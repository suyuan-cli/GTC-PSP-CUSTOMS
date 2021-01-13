<template>
  <span class="file-download-link">
    <i class="el-icon-paperclip"></i>
    <el-tooltip content="点击下载" placement="top">
      <span class="file-download-label" @click="downloadFn"><slot></slot></span>
    </el-tooltip>
    <i class="el-icon-download"></i>
  </span>
</template>

<script>
const config = require('../../p.config');
export default {
  name: 'FileDownload',
  components: {},
  props: {
    url: String
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    downloadFn() {
      this.download(config.base_image_url + this.url);
    }
  },
  computed: {}
};
</script>

<style scoped>
.file-download-link {
  color: #666666;
  font-size: 14px;
  width: fit-content;
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
}
.el-icon-paperclip {
  color: #333333;
  margin-right: 0;
}
.el-icon-download {
  margin-left: 0;
}
.file-download-label {
  color: #007aff;
  font-size: 12px;
}
.file-download-label:hover {
  text-decoration: underline;
  color: #007aff;
}
.el-icon-download {
  color: #007aff;
}
</style>
