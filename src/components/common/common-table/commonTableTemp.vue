<template>
  <div class="common-list-page">
    <page-header :paths="paths" :tos="tos" v-if="showPageHeader"></page-header>
    <slot name="conditions">
      <query-condition
        ref="queryCondition"
        class="common-list-page-condition"
        :model="model"
        @search="loadData()"
      >
        <template v-for="(item, key) in primaryForm">
          <el-form-item :key="key" :label="item.label" :prop="item.prop">
            <component
              v-bind:is="item.component.name"
              v-bind="item.component.options"
              v-model="model[item.prop]"
            ></component>
          </el-form-item>
        </template>
        <el-row slot="senior">
          <template v-for="(item, key) in seniorForm">
            <el-form-item :key="key" :label="item.label" :prop="item.prop">
              <component
                v-bind:is="item.component.name"
                v-bind="item.component.options"
                v-model="model[item.prop]"
              ></component>
            </el-form-item>
          </template>
        </el-row>
      </query-condition>
    </slot>
    <div class="common-list-page-table">
      <slot name="toolBar" :slot-scope="toolBarScope"></slot>
      <common-table
        ref="table"
        :data="table.data"
        :columns="table.columns"
        :pagination="table.pagination"
        :show-index="showIndex"
        :show-operation="showOperation"
        :show-selection="showSelection"
        :operation-btn-getter="operationBtnGetter"
        :operation-type="operationType"
        :operation-width="operationWidth"
        :events="tableEvent"
        :options="tableOptions"
        @load-data="loadData"
        v-fixed-row="fixedRow"
      >
        <template slot="empty">
          <slot name="empty"></slot>
        </template>
      </common-table>
    </div>
  </div>
</template>

<script>
import queryCondition from '../../common/QueryCondition';
import pageHeader from '../../common/PageHeader';
import datePicker from '../../common/DatePicker';
import codeSelect from '../../common/CodeDropDown';
import dictSelect from '../../common/DictionaryDropDown';
import commonTable from '../../common/common-table/index';
import bus from '../bus';

const orderMap = {
  ascending: 'ASC',
  descending: 'DESC'
};

export default {
  name: 'commonTableTemp',
  components: {
    queryCondition,
    pageHeader,
    datePicker,
    codeSelect,
    dictSelect,
    commonTable
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    paths: {
      type: Array,
      default() {
        return [];
      }
    },
    tos: {
      type: Array,
      default() {
        return [];
      }
    },
    /*返回一个promise对象，并resolve({data:[]列表数据,total:xxx总行数})*/
    loadDataFn: {
      type: Function,
      default(params) {}
    },
    /*{label:xxx,prop:xxx,type:xxx,component:{name:xxx,options:{...}}}*/
    primaryFormItems: {
      type: Array,
      default() {
        return [];
      }
    },
    /*{label:xxx,prop:xxx,type:xxx}*/
    seniorFormItems: {
      type: Array,
      default() {
        return [];
      }
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    operationType: {
      type: String,
      default: 'dropDown'
    },
    showOperation: {
      type: Boolean,
      default: false
    },
    showPageHeader: {
      type: Boolean,
      default: true
    },
    operationWidth: {
      type: [Number, String],
      default: 80
    },
    operationBtnGetter: {
      type: Function,
      default(scope) {
        return [];
      }
    },
    tableEvent: {
      type: Object,
      default() {
        return {};
      }
    },
    tableOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    autoFillData: {
      type: Object,
      default() {
        return {
          enable: true,
          rowCount: 5
        };
      }
    },
    /*用于区分当前页面*/
    name: {
      type: String,
      default: 'common'
    },
    fixedRow: {
      type: Number,
      default: 10
    },
    loadOnMounted: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.init();
  },
  mounted() {
    bus.$on(`${this.name}.refresh`, () => {
      this.loadData();
    });
    this.bindMethods('table');
    this.loadOnMounted && this.loadData();
  },
  data() {
    return {
      model: {},
      selectedRow: null,
      checkedRow: null,
      table: {
        data: [],
        columns: this.columns,
        pagination: {
          total: 0,
          pageSize: this.fixedRow,
          currentPage: 1
        },
        orderParam: {
          orders: [
            // {
            //   column: '',
            //   direction: ''
            // }
          ]
        }
      },
      defTableOptions: null,
      defaultComponents: {
        input: {
          name: 'el-input',
          options: { clearable: true }
        },
        date: {
          name: datePicker,
          options: { clearable: true }
        }
      }
    };
  },
  methods: {
    init() {
      let rowClick = this.tableEvent['row-click'];
      this.tableEvent['row-click'] = (row, column, event) => {
        this.selectedRow = row;
        rowClick && rowClick(row, column, event);
      };
      let select = this.tableEvent['select'];
      this.tableEvent['select'] = (selection, row) => {
        this.checkedRow = selection;
        select && select(selection, row);
      };
      let selectAll = this.tableEvent['select-all'];
      this.tableEvent['select-all'] = selection => {
        this.checkedRow = selection;
        selectAll && selectAll(selection);
      };
      // let sortChange = this.tableEvent['sort-change'];
      this.tableEvent['sort-change'] = ({ column, prop, order }) => {
        this.table.orderParam.orders =
          order === null
            ? []
            : [
                {
                  column: prop,
                  direction: orderMap[order]
                }
              ];
        this.loadData();
      };
    },
    loadData(pageSize, currentPage = 1) {
      this.table.pagination.currentPage = currentPage;
      this.selectedRow = null;
      this.checkedRow = null;
      this.loadDataFn({
        ...this.model,
        pageParam: {
          pageNo: this.table.pagination.currentPage,
          rowsPerPage: this.table.pagination.pageSize
        },
        orderParam: this.table.orderParam
      })
        .then(data => {
          this.table.data = data.data;
          this.table.pagination.total = data.total;
        })
        .catch(e => {
          console.error(e);
          this.table.data = [];
          this.table.pagination.total = 0;
        });
    },
    getFormItems(items) {
      return items.map(item => {
        if (
          item.hasOwnProperty('type') &&
          this.defaultComponents.hasOwnProperty(item.type)
        ) {
          item.component = this.defaultComponents[item.type];
        }
        return item;
      });
    },
    getSelectedData() {
      return this.toolBarScope;
    },
    resetQueryCondition() {
      this.$refs.queryCondition.reset();
    }
  },
  computed: {
    primaryForm() {
      return this.getFormItems(this.primaryFormItems);
    },
    seniorForm() {
      return this.getFormItems(this.seniorFormItems);
    },
    toolBarScope() {
      return {
        selectedRow: this.selectedRow,
        checkedRow: this.checkedRow
      };
    },
    tableHeight() {
      let padding = 0;
      if (this.$refs.table.$el.querySelector('.el-table--scrollable-x')) {
        padding = 9;
      }
      if (this.autoFillData.enable) {
        let num = this.columns.some(col => {
          return col.hasOwnProperty('children');
        })
          ? 2
          : 1;
        return (this.autoFillData.rowCount + num) * 36 + padding + 'px';
      } else {
        return this.tableOptions.height;
      }
    },
    slotColumns() {
      return this.columns.filter(item => item.slot);
    }
  }
};
</script>

<style scoped>
.common-list-page-condition >>> .el-input__inner {
  width: 250px;
}

.common-list-page {
  background-color: #fff;
}

.common-list-page-condition {
  margin-top: 20px;
}

.common-list-page-table {
  border-top: 10px solid #f5f5f5;
  padding: 11px 18px;
}
.common-list-page-table >>> .row-red .cell {
  color: #f15454;
}
</style>
