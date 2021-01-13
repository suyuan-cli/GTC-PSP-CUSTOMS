<template>
  <div>
    <common-table
      :options="options"
      :columns="columns"
      :data="data"
      :events="events"
      :total="100"
      show-operation
      operation-type="list"
      operation-width="180"
      @load-data="loadData"
      :operationBtnGetter="operationBtnGetter"
      v-cyclic-rolling="{ rowLimit: 3, speed: 50, step: 1 }"
      :show-pagination="false"
      :show-operation="false"
      show-index
    >
      <template slot="empty">
        随便写点啥
      </template>
      <template slot="event">
        <el-table-column label="事件" prop="event">
          <template slot-scope="scope">
            <el-button type="text" @click="click(scope)">点我</el-button>
          </template>
        </el-table-column>
      </template>
    </common-table>
    <tree-table :columns="columns" :data="data">
      <template slot="person" slot-scope="scope">
        {{ scope }}
      </template>
    </tree-table>
    <remark-input v-model="remarkValue"></remark-input>
  </div>
</template>

<script>
import commonTable from './index';
import treeTable from './TreeTable';
import RemarkInput from '../RemarkInput';
export default {
  name: 'common-table-demo',
  components: { commonTable, treeTable, RemarkInput },
  props: {},
  created() {},
  mounted() {
    // setTimeout(() => {
    //   this.data = [
    //     { time: '2020-5-11', address: 'qqqqqq' },
    //     { time: '2020-5-11', address: 'qqqqqqqqqqqq' },
    //     { time: '2020-5-11', address: 'qqqqqq' },
    //     { time: '2020-5-11', address: 'qqqqqq' },
    //     { time: '2020-5-11', address: 'qqqqqq' }
    //   ];
    // }, 6000);
  },
  data() {
    return {
      remarkValue: '',
      options: {
        // highlightCurrentRow: true
        // stripe: true
        // height: 250
      },
      data: [
        {
          time: '2020-5-11',
          address: 'kkk',
          event:
            'gasdfjlajsidongas;ldjsjhfakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasjhdjklgjlkasdghj',
          children: [
            { time: '', address: 'kkk' },
            { time: '', address: 'kkk' }
          ]
        },
        { time: '2020-5-11', address: 'kkk' },
        { time: '2020-5-11', address: 'kkk' },
        { time: '2020-5-11', address: 'kkk' },
        { time: '2020-5-11', address: 'kkk' },
        { time: '2020-5-11', address: 'kkk' }
      ],
      columns: [
        {
          label: '时间',
          prop: 'time',
          width: '200px',
          sortable: 'custom',
          formatter(row, column, cellValue, index) {
            // console.log(row, column, cellValue, index);
            return `<span style="color:red;">${cellValue}</span>`;
          }
        },
        {
          label: '地点',
          prop: 'address',
          width: '200px',
          formatter(row, column, cellValue, index) {
            // console.log(row, column, cellValue, index);
            return `<span style="color:red;">${cellValue}</span>`;
          }
        },
        {
          label: '人物',
          prop: 'person',
          width: '400px',
          showOverflowTooltip: false,
          formatter(row, column, cellValue, index) {
            // console.log(row, column, cellValue, index);
            return `<span style="color:red;">${cellValue}</span>`;
          }
        },
        {
          label: '事件',
          prop: 'event',
          align: 'center',
          minWidth: '100px',
          children2: [
            { label: '起因', prop: 'reason' },
            {
              label: '结果',
              prop: 'result',
              formatter(row, column, cellValue, index) {
                // console.log(row, column, cellValue, index);
                return '<div style="color:red;">666</div>';
              }
            }
          ]
        }
      ],
      events: {
        'sort-change': this.sortChange
      }
    };
  },
  methods: {
    loadData(size, page) {
      console.log(page, size);
    },
    operationBtnGetter() {
      return [
        { label: '123', handler() {} },
        { label: '321', handler() {} }
      ];
    },
    sortChange({ column, prop, order }) {
      console.log({ column, prop, order });
    },
    click(scope) {
      console.log(scope);
    }
  },
  computed: {}
};
</script>

<style scoped></style>
