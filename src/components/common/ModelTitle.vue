<template>
  <div class="hint-box">
    <div class="table-title-adj">
      <span class="table-title">{{title}}</span>
    </div>
    <div class="bint-box-right">
      <slot name="topRight">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.hint-box {
  height: 45px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  justify-content: space-between;
  width: 1160px;
  margin: 0 auto;
}

.hint-box > div {
  display: flex;
}
.hint-box >>> .el-button {
  /* min-width: 100px; */
  height: 28px;
  font-size: 12px;
  line-height: 10px;
}
.table-title-adj {
  margin-top: 7px;
  /* padding-top: 12px; */
}
.table-title {
  width: 152px;
  height: 16px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 14px;
}
.table-top{
  padding-bottom: 13px;
  margin-top: 10px;
}
</style>