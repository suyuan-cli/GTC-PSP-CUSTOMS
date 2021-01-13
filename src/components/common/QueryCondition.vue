<!--
 @search="search" //点击查询事件
:model="formInfo" //条件对象

//demo
 <query-condition :model="formInfo" class="demo-form-inline" @search="search">
        <el-form-item label="商品中文名">
          <el-input v-model="formInfo.number" class="el-input-num"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" class="el-form-item-time">
          <el-col :span="11">
            <el-date-picker type="date" v-model="formInfo.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-date-picker type="date" v-model="formInfo.date2"></el-date-picker>
          </el-col>
        </el-form-item>

        //高级条件
        <el-row slot="senior">
          <el-form-item label="商品中文名">
            <el-input v-model="formInfo.number1" class="el-input-num"></el-input>
          </el-form-item>
        </el-row>
      </query-condition>
-->

<template>
  <el-form
    :inline="true"
    ref="formInner"
    :model="model"
    class="query-condition"
    size="mini"
    :label-width="labelWidth"
    :rules="rules"
  >
    <div class="often">
      <div class="often-condition">
        <slot></slot>
      </div>
      <div class="often-btn">
        <el-button
          type="primary"
          v-show="showSearchBtn"
          @click="onSubmit"
          class="status-btn status-primary-btn"
          >查询</el-button
        >
        <el-button
          type="primary"
          v-show="showResetBtn"
          @click="reset"
          class="status-btn reset-btn"
          >重置</el-button
        >
        <a
          href="javascript:void(0)"
          class="el-dropdown-link"
          :class="{ isReverse: isReverse }"
          @click="isReverse = !isReverse"
          v-show="hasSeniorChild"
        >
          更多搜索
          <i class="el-icon-caret-bottom el-icon-right"></i>
        </a>
      </div>
    </div>
    <el-row class="senior-con" :class="{ show: isReverse }">
      <el-col :span="16">
        <slot name="senior"></slot>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: {
    labelWidth: {
      type: String,
      default() {
        return '103px';
      },
    },
    model: {
      type: Object,
      default() {
        return {};
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
    showResetBtn: {
      type: Boolean,
      default: true,
    },
    showSearchBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isReverse: false,
      hasSeniorChild: false,
    };
  },

  mounted() {
    this.setModelKey();
    if (this.$slots.senior) {
      this.hasSeniorChild =
        this.$slots.senior[0].componentOptions.children.length > 0;
    }
    //todo 实现方法待修改，label：hover显示title

    let labels = document.querySelectorAll(
      '.query-condition .el-form-item__label'
    );
    for (var i = 0, l = labels.length; i < l; i++) {
      let node = labels[i];
      node.setAttribute('title', node.innerHTML);
    }
  },
  methods: {
    reset() {
      this.$refs.formInner.resetFields();
      this.$emit('reset');
    },
    onSubmit() {
      this.$emit('search', this.model);
    },
    setModelKey() {
      this.$slots.default.forEach((node) => {
        if (
          node.componentInstance.prop &&
          !this.model.hasOwnProperty(node.componentInstance.prop)
        ) {
          this.$set(this.model, node.componentInstance.prop, null);
        }
      });
      if (this.$slots.senior) {
        this.$slots.senior[0].componentInstance.$children.forEach((node) => {
          if (node.prop && !this.model.hasOwnProperty(node.prop)) {
            this.$set(this.model, node.prop, null);
          }
        });
      }
    },
  },
};
</script>
<style scoped src="@/assets/css/status-color.css"></style>
<style scoped>
.query-condition >>> .reset-btn {
  background-color: #f5f5f5;
  font-size: 12px;
  color: #666;
}
.query-condition >>> .el-input .el-input__inner {
  height: 28px;
  line-height: 28px;
  width: 250px;
}
.query-condition >>> .el-form-item__label {
  height: 28px;
  line-height: 28px;
}
.query-condition >>> .el-select {
  width: 250px;
}
.query-condition >>> .el-form-item__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #333;
}
.query-condition >>> .el-form-item__content {
  width: 250px;
}
.query-condition >>> .el-date-editor {
  width: 250px;
  height: 28px;
}
.often {
  display: flex;
  justify-content: center;
  height: 100%;
}
.senior-con.show {
  display: block;
}
.senior-con {
  padding-left: 67px;
  /*padding-right: 320px;*/
  display: none;
}
.el-dropdown-link,
.el-dropdown-link:hover,
.el-dropdown-link:active {
  color: #666;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;
}
.el-icon-right {
  transition: all 0.3s;
}
.isReverse .el-icon-right {
  transform: rotate(-180deg);
}

.el-button-cx {
  width: 90px;
  height: 30px;
  /* background: #3195ff;
  border-color: #3195ff; */
  border-radius: 2px;
  margin-right: 10px;
}
.floatRight {
  float: right;
  margin-right: 20px !important;
}
.query-condition {
  padding-left: 20px;
  position: relative;
}
.reset-btn {
  background: rgb(232, 232, 232);
  color: rgb(0, 0, 0);
  border-color: rgb(232, 232, 232);
}
.often-condition {
  /*flex-grow: 1;*/
}
.often-btn {
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0 12px;
}
.reset-btn:hover {
  background: #d5d5d5;
  border-color: #d5d5d5;
}
</style>
