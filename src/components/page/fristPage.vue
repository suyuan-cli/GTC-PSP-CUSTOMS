<template>
  <div class="fristpage-content">
    <div class="bannar" ref="bannar">
      <img src="../../assets/img/firstpages/banner2.png" ref="bannarimg" />

      <div class="bannar-text" ref="bannarText">
        <p class="b-title">系统可以辅助您开展哪些工作？</p>
        <p class="b-cntent">
          海关溯源辅助信息系统是一套有效利用全球商品溯源数据，对申报信息以外的信息进行补充，有效识别商品及其关联主体业务监管风险的辅助信息系统。海关关员使用海关溯源辅助信息系统，可帮助其辅助开展日常监管工作，如审单、查验等，是海关开展作业执行工作的信息智库及有益的工具助手。
        </p>
      </div>
    </div>
    <div class="frist-content">
      <img src="../../assets/img/firstpages/frist-content.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    let bheight = window.innerWidth * 0.13;
    if (bheight < 200) {
      bheight = 200;
    }
    this.$refs.bannar.style.width = window.innerWidth + 'px';
    this.$refs.bannar.style.marginLeft = -(window.innerWidth - 1200) / 2 + 'px';
    this.$refs.bannarimg.style.height = bheight + 'px';
    this.$refs.bannarText.style.left = (window.innerWidth - 1200) / 2 + 'px';
  },
};
</script>

<style scoped>
.bannar {
  position: relative;
}
.bannar-text {
  position: absolute;
  top: 25%;
  left: 19%;
  width: 768px;
  color: white;
}
.b-title {
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 20px;
  text-align: left;
}
.b-cntent {
  font-size: 14px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  line-height: 24px;
}
.bannar img {
  object-fit: cover;
  width: 100%;
}
.frist-content {
  width: 1200px;
}
.frist-content img {
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
  width: 1200px;
}
</style>