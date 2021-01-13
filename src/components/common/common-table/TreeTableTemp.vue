<template>
  <div class="common-list-page">
    <page-header :paths="paths"></page-header>
    <query-condition
      ref="queryCondition"
      class="common-list-page-condition"
      :model="model"
      @search="loadData()"
    >
      <template v-for="item in primaryForm">
        <el-form-item :label="item.label" :prop="item.prop">
          <component
            v-bind:is="item.component.name"
            v-bind="item.component.options"
            v-model="model[item.prop]"
          ></component>
        </el-form-item>
      </template>
      <el-row slot="senior">
        <template v-for="item in seniorForm">
          <el-form-item :label="item.label" :prop="item.prop">
            <component
              v-bind:is="item.component.name"
              v-bind="item.component.options"
              v-model="model[item.prop]"
            ></component>
          </el-form-item>
        </template>
      </el-row>
    </query-condition>
    <div class="common-list-page-table">
      <slot name="toolBar" :slot-scope="selectedRow"></slot>
      <tree-table
        ref="treeTable"
        :class="['table-body', { 'table-border-bottom': showBorderBottom }]"
        :data="table.data"
        :columns="table.columns"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template
          :slot="col.prop"
          slot-scope="{ slotScope }"
          v-for="col in slotColumns"
        >
          <slot :name="col.prop" :slot-scope="slotScope"></slot>
        </template>
      </tree-table>
    </div>
  </div>
</template>

<script>
import queryCondition from '../../common/QueryCondition';
import pageHeader from '../../common/PageHeader';
import datePicker from '../../common/DatePicker';
import codeSelect from '../../common/CodeDropDown';
import dictSelect from '../../common/DictionaryDropDown';
import TreeTable from '../../common/common-table/TreeTable';
export default {
  name: 'TreeTableTemp',
  components: {
    queryCondition,
    pageHeader,
    datePicker,
    codeSelect,
    dictSelect,
    TreeTable
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
    }
  },
  created() {},
  mounted() {
    this.bindMethods('treeTable');
    this.init();
    this.loadData();
  },
  data() {
    return {
      model: {},
      table: {
        data: [],
        columns: this.columns
      },
      selectedRow: null,
      events: { ...this.$listeners },
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
      let rowClick = this.$listeners['row-click'];
      this.events['row-click'] = (row, column, event) => {
        this.selectedRow = row;
        rowClick && rowClick(row, column, event);
      };
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
    loadData() {
      this.loadDataFn({
        ...this.model
      })
        .then(data => {
          this.table.data = data;
        })
        .catch(() => {});
    }
  },
  computed: {
    primaryForm() {
      return this.getFormItems(this.primaryFormItems);
    },
    seniorForm() {
      return this.getFormItems(this.seniorFormItems);
    },
    showBorderBottom() {
      return true;
      // return this.table.data.length === 0;
    },
    slotColumns() {
      return this.table.columns.filter(item => item.slot);
    }
  }
};
</script>

<style scoped>
.common-list-page-condition >>> .el-input__inner {
  width: 250px;
}

.common-list-page {
  background-color: #ffffff;
}

.common-list-page-condition {
  margin-top: 20px;
}

.common-list-page-table {
  border-top: 10px solid #f5f5f5;
  padding: 20px 18px;
}
.table-body {
  border: 1px solid #f5f5f5;
  border-bottom: none;
}
.table-border-bottom {
  border-bottom: 1px solid #f5f5f5;
}
</style>
