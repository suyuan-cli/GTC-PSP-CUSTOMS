<template>
  <el-form
    v-bind="options"
    ref="commonForm"
    :class="['common-form', { 'uneditable-form': !editable }]"
  >
    <el-row v-for="(row, $key) in renderFormItems" :key="$key">
      <template v-for="(item, $index) in row">
        <el-col v-bind="item.colOptions" v-show="item.visible" :key="$index">
          <el-form-item v-bind="item.options">
            <slot :name="item.options.prop" :slot-scope="item.component">
              <component
                v-if="editable && item[item.activityComponentKey]"
                v-bind:is="item[item.activityComponentKey].name"
                v-bind="item[item.activityComponentKey].options"
                v-on="item[item.activityComponentKey].events"
                :ref="item.options.prop"
                v-model="options.model[item.options.prop]"
              ></component>
              <template v-else>
                {{
                formatValue(options.model[item.options.prop], item.formatter)
                }}
              </template>
            </slot>
            <template slot="label">
              <slot :slot-scope="item" :name="item.options.prop + '-label'">
                <span style="position: relative">
                  <el-tooltip
                    v-if="item.options.hasOwnProperty('tooltip')"
                    :content="item.options.tooltip"
                    placement="top"
                  >
                    <i class="el-icon-warning"></i>
                  </el-tooltip>
                  {{ item.options.label + options.labelSuffix }}
                </span>
              </slot>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script>
import { Form } from 'element-ui';
let key = 1;
export default {
  name: 'common-form',
  components: {},
  props: {
    ...Form.props,
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelSuffix: {
      type: String,
      default: '：'
    },
    /*
     * {
     *   colOptions:布局配置，
     *   options：form元素配置；el-form-item的Attributes，
     *   visible: 是否显示，
     *   component：表单内的组件：{
     *      name:组件名，
     *      options：组件属性
     *      events：组件事件
     *   }
     * }
     * */
    formItems: {
      type: Array
    },
    colOptions: {
      type: Object,
      default () {
        return {
          span: 8
        };
      }
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.init();
  },
  mounted () {
    this.bindMethods('commonForm');
  },
  updated () { },
  data () {
    return {
      toggleProp: []
    };
  },
  methods: {
    init () {
      this.formItems.forEach(item => {
        /* 设置默认的列布局配置 */
        item.colOptions = item.colOptions || {};
        item.activityComponentKey = item.activityComponentKey || 'component';
        this.setVisible(item);
        this.setDefValue(item.colOptions, this.colOptions);
        if (item[item.activityComponentKey] !== undefined) {
          item[item.activityComponentKey].options =
            item[item.activityComponentKey].options || {};
          this.setDefValue(item[item.activityComponentKey].options, {
            style: { width: '100%' }
          });
        }
        // 设置通用非空校验信息
        this.setRequired(item);
      });
    },
    toggleShow (visible = null) {
      this.formItems.forEach(item => {
        if (this.toggleProp.includes(item.options.prop)) {
          if (visible === null) {
            item.visible = !item.visible;
          } else {
            item.visible = visible;
          }
        }
      });
    },
    setVisible (item) {
      if (item.visible !== undefined) {
        this.toggleProp.push(item.options.prop);
      }
      if (item.visible === undefined) {
        item.visible = true;
      }
    },
    setRequired (item) {
      if (item.options.required) {
        if (!Array.isArray(item.options.rules)) item.options.rules = [];
        if (
          item.options.rules.length > 0 &&
          item.options.rules[0].hasOwnProperty('required')
        ) {
          item.options.rules.pop();
        }
        item.options.rules.splice(0, 0, {
          required: true,
          message: `${item.options.label}不能为空`
        });
      } else {
        if (
          Array.isArray(item.options.rules) &&
          item.options.rules.length > 0 &&
          item.options.rules[0].hasOwnProperty('required')
        ) {
          item.options.rules.pop();
        }
      }
    },
    setVisibleByMode (item) {
      if (this.editable && item.hasOwnProperty('showFor')) {
        item.visible = item.showFor === 'normal';
      }
      if (!this.editable && item.hasOwnProperty('showFor')) {
        item.visible = item.showFor === 'detail';
      }
    },
    formatValue (value, formatter = null) {
      if (typeof formatter !== 'function') return value;
      return formatter(value, this.model);
    }
  },
  computed: {
    options () {
      let options = {};
      Object.keys(Form.props).forEach(key => {
        options[key] = this.$props[key];
      });
      return options;
    },
    renderFormItems () {
      let items = [];
      let row = [];
      let sum = 0;
      this.init();
      this.formItems.forEach(item => {
        this.setVisibleByMode(item);
        // this.setVisible(item);
        // this.setRequired(item);
        let {
          span,
          offset = 0,
          push = 0,
          pull = 0,
          right = 0
        } = item.colOptions;
        let s = span + offset + push - pull + right;
        sum += s;
        if (sum > 24) {
          items.push(row);
          sum = s;
          row = [item];
        } else {
          row.push(item);
        }
      });
      items.push(row);
      return items;
    }
  }
};
</script>

<style scoped>
.uneditable-form >>> .el-form-item {
  margin-bottom: 0;
}
.common-form {
  /*margin-left: -20px;*/
}
.common-form >>> .el-form-item__label {
  /*padding-left: 20px;*/
  height: 28px;
  line-height: 28px;
}
.common-form >>> .el-form-item__content {
  line-height: 28px;
}

.common-form >>> .el-input .el-input__inner {
  height: 28px;
  line-height: 28px;
}

.el-icon-warning {
  color: #faad14;
  position: absolute;
  left: -30px;
  top: 0;
  cursor: pointer;
}
/*调整行间距*/
.uneditable-form >>> .el-form-item {
  display: flex;
}
/*调整行间距*/
.uneditable-form >>> .el-form-item .el-form-item__content[style] {
  margin-left: 0 !important;
  word-break: break-all;
  /*IE10 hack*/
  flex: 1 1 100%\9;
}
.uneditable-form >>> .el-form-item__label {
  flex-shrink: 0;
}
.uneditable-form >>> .el-form-item__label,
.uneditable-form >>> .el-form-item__content {
  line-height: 24px;
  font-size: 12px;
  padding-bottom: 6px;
  letter-spacing: 1px;
  color: #666666;
}
.uneditable-form >>> .el-form-item__label {
  color: #000000;
}
</style>
