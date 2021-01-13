<template>
  <div class="common-table" :class="{ 'common-table-fixed': hasFixedColumn }">
    <el-table
      ref="table"
      v-bind="options"
      :data="data"
      v-on="events"
      v-scrollbar="'table'"
      @row-contextmenu="rowContextMenu"
    >
      <el-table-column
        v-if="showSelection"
        fixed="left"
        align="center"
        type="selection"
        width="40"
        class-name="no-copy"
      ></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        width="60"
        align="center"
        label="序号"
        class-name="no-copy"
      ></el-table-column>
      <template v-for="item in columns">
        <slot :name="item.prop">
          <common-table-column v-bind="item"></common-table-column>
        </slot>
      </template>
      <el-table-column
        v-if="showOperation"
        fixed="right"
        :width="operationWidthCalc"
        align="center"
        label="操作"
        class-name="no-copy"
      >
        <template slot-scope="scope">
          <el-dropdown v-if="operationType === 'dropDown'">
            <i class="el-icon-more"></i>
            <el-dropdown-menu slot="dropdown">
              <template v-for="(item, $index) in operationBtnGetter(scope)">
                <el-dropdown-item
                  @click.native.prevent="item.handler(scope)"
                  :key="$index"
                  >{{ item.label }}</el-dropdown-item
                >
              </template>
            </el-dropdown-menu>
          </el-dropdown>
          <template v-else>
            <el-button
              type="text"
              v-for="item in operationBtnGetter(scope)"
              :key="item.label"
              @click.native.prevent="item.handler(scope)"
              :class="item.labelClass"
              >{{ item.label }}</el-button
            >
          </template>
        </template>
      </el-table-column>
      <template slot="empty">
        <slot name="empty"></slot>
      </template>
    </el-table>
    <div
      v-if="showPagination"
      class="common-table-pagination"
      :class="{ 'common-table-pagination-border': paginationBorder }"
    >
      <el-pagination
        size="mini"
        v-bind="pagination"
        :page-size.sync="pagination.pageSize"
        :current-page.sync="pagination.currentPage"
        @current-change="current => emitLoadData(current)"
        @size-change="size => emitLoadData(1)"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import commonTableColumn from './common-table-column';
import { showContextMenu } from './contextmenu';

export default {
  name: 'commonTable',
  components: { commonTableColumn },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    /*属性名用驼峰命名法*/
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    events: {
      type: Object,
      default() {
        return {};
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    pagination: {
      type: Object,
      default() {
        return {};
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
    showOperation: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    operationType: {
      type: String,
      /*list：平铺的操作按钮，数量较少不超过4个，dropDown：下拉的按钮，数量可以较多*/
      default: 'dropDown'
    },
    total: {
      type: Number,
      default: 0
    },
    /*操作栏的按钮列表获取方法，可根据行状态而改变显示的按钮*/
    operationBtnGetter: {
      type: Function,
      default(scope) {
        //todo 这里应该默认返回一个空数组
        return [];
      }
    },
    operationWidth: {
      type: [String, Number],
      default: null
    }
  },
  created() {
    this.setDefValue(this.options, this.defTableOptions);
    this.setDefValue(this.events, this.defTableEvent);
    if (this.total !== 0) {
      this.pagination.total = this.total;
    }
    this.setDefValue(this.pagination, this.defPagination);
  },
  mounted() {
    this.bindMethods('table');
    this.$refs.table.doLayout();
  },
  activated() {
    this.$refs.table.doLayout();
  },
  data() {
    return {
      defTableOptions: {
        highlightCurrentRow: true
        // border: true
      },
      defTableEvent: { ...this.$listeners },
      defPagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        pageSizes: [5, 10, 20, 30, 50],
        background: true,
        layout: 'sizes, prev, pager, next, total, jumper'
      }
    };
  },
  methods: {
    emitLoadData(current) {
      this.pagination.currentPage = current;
      this.$emit(
        'load-data',
        this.pagination.pageSize,
        this.pagination.currentPage
      );
    },
    rowContextMenu(row, column, event) {
      showContextMenu(row, column, event);
    },
    /*特殊用途：展示空行时，隐藏序号内容*/
    hideIndex(num) {
      setTimeout(() => {
        this.$el
          .querySelectorAll('.el-table__body tbody tr')
          .forEach((tr, index) => {
            if (index >= num) {
              let td = tr.querySelector('td .cell div');
              td.style.height = '23px';
              td.innerHTML = '';
            }
          });
      });
    }
  },
  computed: {
    paginationBorder() {
      return (
        this.options.border ||
        this.columns.some(item => item.children && item.children.length > 0)
      );
    },
    operationWidthCalc() {
      if (this.operationType === 'dropDown') return '60';
      if (this.operationWidth === null)
        return this.operationBtnGetter().length * 60 + '';
      else return this.operationWidth;
    },
    hasFixedColumn() {
      return this.showOperation || this.columns.some(col => col.fixed);
    }
  },
  watch: {
    total() {
      this.pagination.total = this.total;
    }
  }
};
</script>
<style scoped>
.common-table {
  border: 0;
}
/*.common-table >>> .el-table:not(.el-table--border)::before {*/
/*height: 1px;*/
/*}*/

/* .common-table >>> .el-table__body {
  padding-bottom: 10px;
} */

/* .common-table >>> .el-table::before {
  height: 1px;
} */
.common-table >>> .el-table:not(.el-table--border) {
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}
.common-table >>> .el-table--scrollable-x .el-table__body-wrapper {
  box-sizing: border-box;
  padding-bottom: 9px;
  overflow: hidden;
  position: relative;
  /*background: #f8f8f8;*/
}
.common-table >>> .ps__rail-x {
  opacity: 1 !important;
  z-index: 99;
}

.common-table >>> .ps__rail-x .ps__thumb-x {
  background-color: rgba(144, 147, 153, 0.3);
}
.common-table >>> .ps__rail-x .ps__thumb-x:hover {
  background-color: rgba(144, 147, 153, 0.6);
}

.common-table >>> .el-table__fixed,
.common-table >>> .el-table__fixed-right {
  height: 100% !important;
}

.el-icon-more {
  cursor: pointer;
}
.common-table-pagination {
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}
.common-table-pagination-border {
  /*border: 1px solid #ebeef5;*/
}
.common-table-pagination >>> .btn-prev,
.common-table-pagination >>> .btn-next,
.common-table-pagination >>> .el-pager li {
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 4px;
}
.common-table-pagination >>> .el-pager .more {
  border: 0;
}
.common-table >>> .el-table__header .cell {
  font-weight: normal;
}

.common-table >>> .el-table--small td,
.common-table >>> .el-table--small th {
  padding: 6px 0;
}

.common-table-fixed >>> .el-table--small .el-table__body-wrapper td,
.common-table-fixed >>> .el-table--small .el-table__body-wrapper th,
.common-table-fixed >>> .el-table--small .el-table__fixed-body-wrapper td,
.common-table-fixed >>> .el-table--small .el-table__fixed-body-wrapper th {
  padding-top: 3px;
  padding-bottom: 0;
}

.common-table-pagination >>> .el-pagination .el-pagination__sizes,
.common-table-pagination >>> .el-pagination .el-input input,
.common-table-pagination >>> .el-pagination .el-pager li,
.common-table-pagination >>> .el-pagination .el-pagination__total,
.common-table-pagination >>> .el-pagination .el-pagination__jump,
.common-table-pagination >>> .el-pagination button {
  font-size: 12px;
  height: 22px;
  line-height: 22px;
}
.common-table-pagination >>> .el-pagination {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
