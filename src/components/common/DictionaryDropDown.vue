<template>
  <common-select
    v-model="svalue"
    type="dict"
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
import { dictionaryconfig } from './dictionaryconfig';

export default {
  name: 'dictSelect',
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
      default: ''
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
        dictDefId: this.config.code,
        dataFilter: this.config.dataFilter,
        sqlFilter: this.config.sqlFilter,
        params: this.config.codeparams
      };
      return new Promise((resolve, reject) => {
        queryutil
          .getDictionaryList(params)
          .then(response => {
            if (response.data.status === 'success') {
              let obj = JSON.parse(response.data.data);
              if (Array.isArray(obj.datas) && obj.datas.length > 0) {
                obj = obj.datas.map(item => {
                  //组装下拉框内容
                  return {
                    value: item.code,
                    label: item.name,
                    orgData: item
                  };
                });
                if (typeof this.config.handler === 'function') {
                  obj = this.config.handler(obj);
                }
                resolve(obj);
              } else {
                reject('字典数据加载失败');
              }
            } else {
              reject('字典数据加载失败');
            }
          })
          .catch(res => {
            reject(res);
          });
      });
    },
    change(val, orgData) {
      this.$emit('change', val, orgData);
    }
  },
  computed: {
    config() {
      return this.code || dictionaryconfig[this.codeid];
    }
  },
  watch: {
    value(nv) {
      this.svalue = nv;
    }
  }
};
</script>
<style scoped></style>
