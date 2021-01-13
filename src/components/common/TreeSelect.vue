<template>
  <el-popover placement="bottom" :width="popoverWidth" v-model="visible">
    <div
      style="position: relative;"
      slot="reference"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <el-input
        class="show-input"
        ref="valueInput"
        readonly
        :clearable="clearable"
        size="mini"
        :value="inputText"
        :title="inputText"
        :disabled="disabled"
        @click.native="inputClick"
      >
      </el-input>
      <i
        v-show="hover && !!inputText && !visible"
        class="el-icon-circle-close"
        @mousedown.prevent
        @click="clear"
      ></i>
    </div>
    <el-input v-model="filterText"></el-input>
    <div class="content-wrapper">
      <el-scrollbar class="scrollbar">
        <el-tree
          ref="treeSelect"
          :props="props"
          :data="treeData"
          :default-checked-keys="defaultCheckedKeys"
          :current-node-key="currentNodeKeys"
          :expand-on-click-node="false"
          highlight-current
          :node-key="nodeKey"
          :show-checkbox="multiSelect"
          :filter-node-method="filterNode"
          @current-change="nodeClick"
          @node-expand="nodeExpand"
          @check-change="handleCheckChange"
        >
        </el-tree>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'treeSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    multiSelect: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    loadNode: {
      type: Function
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    /*选择任意一级选项,若为false，则只能选择最后一级节点*/
    selectStrictly: {
      type: Boolean,
      default: true
    },
    /* 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
    nodeKey: {
      type: String,
      default: 'label'
    },
    value: {
      type: [Object, Array, String, Number],
      default() {
        return this.multiSelect ? [] : null;
      }
    },
    loadData: {
      type: Function
    },
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          children: 'children',
          disabled: 'disabled',
          isLeaf: 'isLeaf'
        };
      }
    }
  },
  mounted() {
    if (typeof this.loadData === 'function') {
      this.loadData()
        .then(data => {
          this.sData = data;
          this.setDefaultCheck();
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.setDefaultCheck();
    }
    this.popoverWidth = this.$refs.valueInput.$el.querySelector(
      'input'
    ).offsetWidth;
  },
  data() {
    return {
      sData: null,
      visible: false,
      hover: false,
      // 弹出框的宽度
      popoverWidth: 200,
      checkedData: [],
      allCheckedData: [],
      filterText: '',
      defaultCheckedKeys: null,
      currentNodeKeys: null
    };
  },
  methods: {
    clear(e) {
      e.stopPropagation();
      if (!this.multiSelect) {
        this.$refs.treeSelect.setCurrentKey(null);
        this.checkedData = [];
        this.allCheckedData = [];
        this.$emit('select-change', this.checkedData, this.allCheckedData);
        this.changeValue();
      }
    },
    setDefaultCheck() {
      if (this.multiSelect) {
        this.defaultCheckedKeys = this.value;
      } else {
        if (Array.isArray(this.value)) {
          this.currentNodeKeys = this.value[0] || null;
          // this.checkedData = this.value;
        } else {
          this.currentNodeKeys = this.value || null;
          // this.checkedData = [this.value];
        }
        this.$nextTick(() => {
          this.$refs.treeSelect.setCurrentKey(this.currentNodeKeys);
          let val = this.$refs.treeSelect.getCurrentNode();
          if (val) {
            this.checkedData = [val];
          } else {
            this.checkedData = [];
          }
        });
      }
    },
    clearChecked(e) {
      this.checkedData.forEach(key => {
        this.multiSelect
          ? this.$refs.treeSelect.setChecked(key, false, true)
          : this.$refs.treeSelect.setCurrentKey(null);
      });
      this.checkedData = [];
      this.allCheckedData = [];
      this.$emit('select-change', this.checkedData, this.allCheckedData);
      this.changeValue();
      e.stopPropagation();
    },
    nodeExpand(data, node, ele) {
      data.expanded = true;
    },
    /**
     * 节点选中状态改变事件
     * @param data 节点数据
     * @param checked 节点状态
     *@param indeterminate
     */
    handleCheckChange(data, checked, indeterminate) {
      // 设置所有节点选中数据
      let flag = checked;
      if (indeterminate) flag = this.value.includes(data[this.nodeKey]);
      this.setCheck(data, flag, indeterminate, this.allCheckedData);
      if (!data.expanded && data.hasOwnProperty('children')) {
        data.children.forEach(item => {
          this.handleCheckChange(item, flag, indeterminate);
        });
      } else if (!data.hasOwnProperty('children')) {
        // 设置末级节点选中数据
        this.setCheck(data, flag, indeterminate, this.checkedData);
      }
      this.$emit('select-change', this.checkedData, this.allCheckedData);
      this.changeValue();
    },
    /**
     * 设置选中的节点数据
     * @param data 节点数据
     * @param checked 节点状态
     *@param indeterminate 不确定状态
     *@param target 目标数组
     */
    setCheck(data, checked, indeterminate, target) {
      // 如果是选中状态就加入选中数组
      const index = target.findIndex(
        item => item[this.nodeKey] === data[this.nodeKey]
      );
      if (checked) {
        if (index < 0) {
          if (indeterminate) {
            setTimeout(() => {
              target.push(data);
            }, 0);
          } else {
            target.push(data);
          }
        }
      } else {
        target.splice(index, 1);
      }
    },
    /* 节点过滤，模糊匹配 */
    filterNode(val, data) {
      if (!val) return true;
      return data[this.props.label].includes(val);
    },
    /* 节点点击，单选模式下设置选中数据 */
    nodeClick(data, node, ele) {
      if (!this.multiSelect) {
        if (this.selectStrictly || (!this.selectStrictly && node.isLeaf)) {
          this.visible = false;
          this.checkedData = [data];
          this.allCheckedData = [data];
          this.$emit('select-change', this.checkedData, this.allCheckedData);
          this.changeValue();
        }
      }
    },
    checkedValues() {
      let check = this.checkedData.map(item => item[this.nodeKey]);
      if (this.multiSelect) return check;
      else return check[0] || null;
    },
    changeValue() {
      this.$emit('change', this.checkedValues());
    },
    inputClick(e) {
      if (this.disabled) {
        e.stopPropagation();
      }
    }
  },
  computed: {
    inputText() {
      return this.checkedData.map(item => item[this.props.label]).join(',');
    },
    treeData() {
      return this.sData || this.data;
    }
  },
  watch: {
    filterText(nv, ov) {
      this.$refs.treeSelect.filter(nv);
    },
    value(nv, ov) {
      this.setDefaultCheck();
    },
    data() {
      this.$nextTick(() => {
        this.$refs.treeSelect.setCurrentKey(this.currentNodeKeys);
        let val = this.$refs.treeSelect.getCurrentNode();
        if (val) {
          this.checkedData = [val];
        }
      });
    }
  }
};
</script>

<style scoped>
.content-wrapper {
  height: 300px;
}
.scrollbar {
  height: 100%;
}
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-icon-circle-close {
  position: absolute;
  right: 10px;
  top: 8px;
  font-size: 14px;
  cursor: pointer;
}
.el-icon-circle-close:before {
  content: '\E607';
  color: #c0c4cc;
}
</style>
