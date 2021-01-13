<template>
  <div class="search-box">
    <el-row class="mysearch">
      <el-col :span="4">
        <el-input :placeholder="placeholder" v-model="val" class="input-search">
          <el-button slot="append" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import query from '@/service/implementSupportCenter';
import config from '@/p.config';
export default {
  name: 'selectsbox',
  props: {
    placeholder: {
      type: String,
      default: '请输入企业名称'
    }
  },
  data() {
    return {
      val:'',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit',this.val)
    }
  }
};
</script>
<style scoped>
.search-box {
  height: 59px;
}

.mysearch >>> .el-select .el-input__inner {
  width: 120px;
  background: #f5f5f5;
  height: 36px;
}

.mysearch >>> .el-input__inner {
  font-size: 12px;
  height: 36px;
  line-height: 36px;
  position: relative;
}
.input-search {
  width: 538px;
  height: 36px;
  line-height: 36px;
}
.mysearch {
  width: 538px;
  margin: 0 auto;
}

.mysearch >>> .el-input__inner {
  height: 36px;
  line-height: 36px;
}

.mysearch >>> .el-input-group__append {
  width: 79px;
  text-align: center;
  font-size: 14px;
  background: #3195ff;
  border: 1px solid #3195ff;
  color: #fff;
  height: 34px;
  line-height: 34px;
}

.mysearch .myselect >>> .el-input__inner {
  width: 120px !important;
  color: #666 !important;
  background-color: #f5f5f5 !important;
  height: 36px;
  line-height: 36px;
}

.mysearch >>> .el-button {
  background: #3195ff;
  width: 120px;
  height: 36px;
}
</style>
