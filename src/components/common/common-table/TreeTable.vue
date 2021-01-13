<template>
  <div class="tree-table">
    <table class="tree-table-head">
      <colgroup>
        <col width="46px" />
        <template v-for="item in columns">
          <col :width="item.width" />
        </template>
      </colgroup>
      <thead>
        <th class="cell first-head-cell">
          {{ firstColumnLabel }}
        </th>
        <template v-for="item in columns">
          <th ref="tableHead" class="cell">
            {{ item.label }}
          </th>
        </template>
      </thead>
    </table>
    <el-scrollbar style="height: 360px;">
      <el-tree
        ref="tree"
        :key="treeKey"
        :data="data"
        show-checkbox
        check-strictly
        :indent="indent"
        class="table-tree"
        :expand-on-click-node="false"
        :default-expand-all="isExpandAll"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <div class="tree-table-row" slot-scope="{ node, data: rowData }">
          <template v-for="(item, index) in columns">
            <div
              class="tree-table-cell"
              @mouseenter="cellMouseEnter($event, item)"
              @mouseleave="cellMouseLeave($event)"
              :style="{ width: item.width }"
            >
              <slot :name="item.prop" :slot-scope="{ node, rowData }">
                {{ formatter(rowData, item, index) }}
              </slot>
            </div>
          </template>
        </div>
      </el-tree>
    </el-scrollbar>
    <el-tooltip
      placement="top"
      ref="cellTooltip"
      :content="tooltipContent"
    ></el-tooltip>
  </div>
</template>

<script>
import debounce from 'throttle-debounce/debounce';
export default {
  name: 'TreeTable',
  components: {},
  props: {
    /*
     * {label:xx,width:xxx,prop:xxx}
     * */
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    firstColumnLabel: {
      type: String,
      default: '启用'
    }
  },
  created() {
    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper());
  },
  mounted() {
    this.bindMethods('tree');
  },
  data() {
    return {
      isExpandAll: false,
      treeKey: 1,
      tooltipContent: ''
    };
  },
  methods: {
    changeAllExpand(expand = true) {
      this.isExpandAll = expand;
      this.treeKey += 1;
    },
    formatter(row, item, index) {
      if (typeof item.formatter === 'function') {
        return item.formatter(row, item, row[item.prop], index);
      } else {
        return row[item.prop];
      }
    },
    /*实现参考node_modules/element-ui/packages/table/src/table-body.js:handleCellMouseEnter*/
    cellMouseEnter(event, options) {
      const cellChild = event.target;
      if (
        !cellChild.childNodes.length ||
        options.showOverflowTooltip === false
      ) {
        return;
      }
      const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      if (
        (rangeWidth > cellChild.offsetWidth ||
          cellChild.scrollWidth > cellChild.offsetWidth) &&
        this.$refs.cellTooltip
      ) {
        const tooltip = this.$refs.cellTooltip;
        this.tooltipContent = cellChild.innerText || cellChild.textContent;
        tooltip.referenceElm = cellChild;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    cellMouseLeave(event) {
      const tooltip = this.$refs.cellTooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
    }
  },
  computed: {
    indent() {
      return 0;
      // return parseInt(this.columns[0].width.replace('px', ''));
    }
  },
  watch: {}
};
</script>

<style scoped>
.tree-table-head {
  /*padding-left: 50px;*/
  width: 100%;
  border-spacing: 0;
  background-color: #efefef;
}
.tree-table-head th {
  padding: 10px;
  font-size: 14px;
  font-weight: normal;
  background-color: #efefef;
  /*text-align: left;*/
  box-sizing: border-box;
}
.tree-table-row {
  display: flex;
  font-size: 12px;
  height: 100%;
}
.tree-table-cell {
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-tree >>> .el-tree-node__content {
  height: 36px;
  border-bottom: 1px solid #ebeef5;
}
.tree-table-head .first-head-cell {
  padding: 10px 0;
  text-align: center;
}
</style>
