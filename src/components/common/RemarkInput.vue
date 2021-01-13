<!--使用方法：-->
<!--<remark-input v-model="remarkValue"></remark-input>-->

<template>
  <div class="remark">
    <el-input :value="inputValue" @focus="focus"></el-input>
    <el-dialog
      top="30vh"
      :visible.sync="visible"
      :close-on-click-modal="false"
      width="600px"
      append-to-body
    >
      <span slot="title">备注</span>
      <el-input v-model="copyValue" type="textarea" :rows="5"></el-input>
      <template slot="footer">
        <el-button type="primary" class="status-info-btn status-btn" @click="close">取消</el-button>
        <el-button type="info" class="status-primary-btn status-btn" @click="submit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RemarkInput',
  components: {},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  created () { },
  mounted () { },
  data () {
    return {
      inputValue: this.inputValue,
      copyValue: null,
      visible: false
    };
  },
  methods: {
    focus () {
      this.copyValue = this.inputValue;
      this.visible = true;
    },
    close () {
      this.visible = false;
    },
    submit () {
      this.inputValue = this.copyValue;
      this.$emit('change', this.inputValue);
      this.close();
    }
  },
  computed: {},
  watch: {
    value (nv) {
      this.inputValue = nv;
    }
  }
};
</script>
<style scoped src="@/assets/css/status-color.css"></style>
<style scoped>
.remark >>> .el-dialog__header {
  font-size: 16px;
  padding: 15px 20px 0;
}
</style>
