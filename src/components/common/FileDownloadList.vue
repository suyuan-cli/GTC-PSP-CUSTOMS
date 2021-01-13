<template>
  <div>
    <span v-if="tip && fileList">{{ tip }}</span>
    <span
      class="file-download-link"
      v-for="(item, index) in fileList"
      :key="index"
      :class="isblock ? 'block' : ''"
    >
      <i class="el-icon-paperclip"></i>
      <el-tooltip content="点击下载" placement="top">
        <span
          class="file-download-label"
          @click="downloadFn(item[fieldOpt.url])"
          >{{ item[fieldOpt.tag] }}</span
        >
      </el-tooltip>
      <i class="el-icon-download" @click="downloadFn(item[fieldOpt.url])"></i>
    </span>
  </div>
</template>

<script>
const config = require('../../p.config');
export default {
  name: 'FileDownloadList',
  components: {},
  props: {
    fieldOpt: {
      type: Object,
      default() {
        return {
          url: 'docpath',
          tag: 'docname',
        };
      },
    },
    isblock: {
      type: Boolean,
      default: false,
    },
    fileList: {
      type: Array,
      default() {
        return [];
      },
    },
    tip: {
      type: String,
      default: '',
    },
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    downloadFn(url) {
      url = url.split('|')[0];
      if (url.search('' + config.base_image_url) != -1) {
        this.download(url);
        console.log(url);
      } else {
        this.download(config.base_image_url + url);
        console.log(config.base_image_url + url);
      }
    },
  },
  watch: {
    // fileList:{
    //   handler(val){
    //     val = val || []
    //   },
    //   immediate:true
    // }
  },
  computed: {},
};
</script>

<style scoped>
.file-download-link {
  color: #666666;
  font-size: 14px;
  width: fit-content;
  cursor: pointer;
  margin-right: 20px;
}
.el-icon-paperclip {
  color: #333333;
  margin-right: 10px;
}
.el-icon-download {
  margin-left: 20px;
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
.block {
  display: block;
}
</style>
