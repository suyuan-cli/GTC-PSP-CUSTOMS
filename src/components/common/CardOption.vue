<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix flex" v-if="isHeaderShow">
      <span class="card-title">{{ title }}</span>
      <div>
        <span v-if="subtitleTodate" class="card-subtitle">{{
          subtitleTodate
        }}</span>
        <slot name="header"></slot>
      </div>
    </div>
    <div :class="content">
      <div v-if="site" :class="[site, 'card-button']">
        <slot name="between"></slot>
        <slot name="right"></slot>
      </div>
      <slot></slot>
      <div v-if="button" class="right button">
        <slot name="button"></slot>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  // 组件名称
  name: 'CardOption',
  // 局部注册的组件
  components: {},
  // 组件参数 接收来自父组件的数据
  props: {
    title: {
      default: '', //标题
    },
    subtitle: {
      default: '', //副标题
    },
    subdate: {
      default: '', //副标题日期
    },
    site: {
      // 设置存放的位置position
      default: '',
    },
    content: {
      // 如果使用query-option的组件，要去掉padding的空间
      default: 'true', // true:上下左右都有padding false:配合搜索框，仅上方有padding  none:没有padding
    },
    button: {
      // 存放按钮的情况，去掉bottom的线
      default: '',
    },
  },
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {
    isHeaderShow() {
      return this.title ? true : false;
    },
    subtitleTodate() {
      const subdate = this.formatDate(this.subdate);
      return this.subtitle
        ? this.subtitle + ':' + subdate.replace(/\-/g, '/')
        : '';
    },
  },
  // 组件方法
  methods: {},
};
</script>

<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<style scoped>
.clearfix:after {
  clear: both;
}

.el-card {
  position: relative;
  border: none;
  border-radius: 0;
  margin-bottom: 10px;
  font-size: 14px;
}
.el-card >>> .el-card__header {
  padding: 0 20px;
  height: 44px;
  line-height: 44px;
  border-color: #f5f5f5;
}
.el-card >>> .el-card__body {
  padding: 0;
}
.el-card >>> .el-form-item--mini.el-form-item,
.el-card >>> .query-condition .el-form-item--small.el-form-item {
  margin-bottom: 20px;
}

.card-subtitle {
  font-size: 12px;
  color: rgb(153, 153, 153);
}

.between,
.flex {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.right {
  text-align: right;
}
.right,
.between {
  margin-bottom: 10px;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 8px;
}
.button {
  border-bottom: none;
  padding-bottom: 0;
  margin: 16px 0 0;
}

.card-title {
  font-size: 16px;
  color: rgba(51, 51, 51, 1);
}
.true {
  padding: 16px 20px;
}
.false {
  padding-top: 20px;
}
.list {
  padding: 16px 30px 0;
}
.form {
  padding: 12px 30px 6px;
}
.tabs {
  padding: 16px 20px 30px;
}
.base {
  padding: 16px 20px;
}
.readonly {
  padding: 12px 30px 5px;
}
.tree {
  padding: 16px 0 0;
}

.card-button >>> .el-button {
  min-width: 100px;
  height: 28px;
  line-height: 0;
  background-color: #3195ff;
  border-color: #3195ff;
}
</style>
