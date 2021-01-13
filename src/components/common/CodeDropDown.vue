<template>
  <common-select
    ref="select"
    v-model="svalue"
    type="code"
    v-bind="$attrs"
    :config="config"
    :load-data="loadData"
    @change="change"
  >
    <template slot="option" slot-scope="{ scope }">
      <slot name="option" :scope="scope"></slot>
    </template>
  </common-select>
</template>

<script>
import CommonSelect from './CommonSelect';
import queryutil from '../../service/common.js';
import { codeconfig } from './codeconfig';
import { statusconfig } from './statusconfig';

export default {
  name: 'codeSelect',
  components: { CommonSelect },
  props: {
    code: {
      type: Object,
      default() {
        return null;
      }
    },
    codeid: {
      type: String,
      default: null
    },
    value: {
      type: [String, Array, Number],
      default() {
        return null;
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      svalue: this.value
    };
  },
  created() {},
  mounted() {},
  methods: {
    loadData() {
      let params = {
        codeDefId: this.config.code,
        dataFilter: this.config.dataFilter,
        columns: this.config.columns,
        params: this.config.codeparams
      };
      return new Promise((resolve, reject) => {
        queryutil
          .getCodeList(params)
          .then(response => {
            if (response.data.status === 'success') {
              let obj = JSON.parse(response.data.data);
              if (obj.datas[0]) {
                obj = obj.datas[0].columnValue.map(item => {
                  //组装下拉框内容
                  return {
                    value: item[0],
                    label: item[1],
                    orgData: item
                  };
                });
                if (typeof this.config.handler === 'function') {
                  obj = this.config.handler(obj);
                }
                resolve(obj);
              } else {
                reject('码表数据加载失败');
              }
            } else {
              reject('码表数据加载失败');
            }
          })
          .catch(res => {
            reject(res);
          });
      });
    },
    change(val, orgData) {
      this.$emit('change', val,orgData);
    }
  },
  computed: {
    config() {
      return this.code || codeconfig[this.codeid] || statusconfig[this.codeid];
    }
  },
  watch: {
    value(nv) {
      this.svalue = this.value;
    }
  }
};
</script>
<style scoped></style>
