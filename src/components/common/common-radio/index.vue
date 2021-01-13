<template>
  <el-radio-group v-model="svalue" @change="change">
    <template v-for="item in items">
      <el-radio v-bind="item">{{ item.text }}</el-radio>
    </template>
  </el-radio-group>
</template>

<script>
// import Emitter from 'element-ui/src/mixins/emitter';
import Emitter from '../../common/mixins/emitter';
export default {
  name: 'common-radio',
  model: {
    prop: 'value',
    event: 'change'
  },
  mixins: [Emitter],
  components: {},
  props: {
    items: {
      type: Array,
      default () {
        return [];
      }
    },
    value: {
      type: [String, Number, Boolean]
    }
  },
  created () { },
  mounted () { },
  data () {
    return {
      svalue: this.value
    };
  },
  methods: {
    change (val) {
      this.$emit('change', val);
      this.dispatch('ElFormItem', 'el.form.change', [this.value]);
    }
  },
  computed: {},
  watch: {
    value () {
      this.svalue = this.value;
    }
  }
};
</script>

<style scoped></style>
