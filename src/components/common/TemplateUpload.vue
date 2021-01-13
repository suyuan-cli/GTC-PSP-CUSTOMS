<template>
  <el-upload
    :action="action"
    :show-file-list="false"
    style="margin-right: 10px;"
    :on-success="success"
    :on-error="error"
    accept=".xls,.xlsx"
  >
    <el-button class="status-primary-btn status-btn" type="primary">
      excel导入
    </el-button>
  </el-upload>
</template>

<script>
import config from '../../p.config';
import axios from '../../service/axios';
export default {
  name: 'TemplateUpload',
  components: {},
  props: {
    action: {
      type: String,
      default: config.uploader
    },
    code: {
      required: true,
      type: String,
      default: ''
    },
    /*操作记录模块*/
    functionModule: {
      required: true,
      type: String,
      default: null
    }
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    success({ data }, file, fileList) {
      if (Array.isArray(data) && data.length > 0) {
        let { tmpid } = data[0];
        axios
          .post('/access/ui/CASTS-FRONT/FRONTCOMMIMPORT010', {
            excelfile: tmpid,
            xlscode: this.code
          })
          .then(data => {
            let status = JSON.parse(data.data.data);
            if (status) {
              this.$message.success('文件导入成功！');
            } else {
              this.$message.error(`文件导入失败！[${data.data.message}]`);
            }
            this.triggerHandleRecord({
              functionmodule: this.functionModule,
              opttype: '07',
              optcontent: `【%OptType%】了名称为【${file.name}】的数据。`
            });
          });
      } else {
        this.$message.error('文件上传失败！');
      }
    },
    error(err, file, fileList) {
      this.$message.error('文件上传失败！');
    }
  },
  computed: {}
};
</script>
<style scoped src="@/assets/css/status-color.css"></style>
<style scoped></style>
