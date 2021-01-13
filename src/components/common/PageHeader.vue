<template>
  <div class="page-header">
    <div class="header-left">
      <el-breadcrumb separator=">">
        <template v-for="(path, index) in paths">
          <el-breadcrumb-item :to="tos[index]">{{ path }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  components: {},
  props: {
    paths: {
      type: Array,
      default() {
        return [];
      }
    },
    /*不需要跳转的，给个''*/
    tos: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.page-header {
  /*height: 40px;*/
  padding: 0 18px 10px;
  background: #f5f5f5;
  display: flex;
  /*border-bottom: 1px solid rgba(237, 237, 237, 1);*/
  justify-content: space-between;
  width: calc(100% - 36px);
  align-items: center;
}
.page-header >>> .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
.page-header
  >>> .el-breadcrumb
  .el-breadcrumb__item
  .el-breadcrumb__inner:hover {
  color: #3195ff;
}
.page-header
  >>> .el-breadcrumb
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner {
  color: #333333;
  cursor: default;
}

.page-header >>> .el-breadcrumb__separator {
  /* font-size: 1px; */
  font-weight: 500;
}
.page-header >>> .el-breadcrumb__item .is-link {
  font-weight: normal;
}
</style>
