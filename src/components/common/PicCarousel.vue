<template>
  <!-- 商品图片 -->
  <el-dialog 
  :visible.sync="isShow" 
  :destroy-on-close="true" 
  @close="close"
  class="dialog">
    <span slot="title"></span>
    <span class="arrow arrow-left" @click="toPrev">
      <i class="el-icon-arrow-left"></i>
    </span>
    <span class="arrow arrow-right" @click="toNext">
       <i class="el-icon-arrow-right"></i>
    </span>

    <el-carousel 
    ref="carousel"
    v-if="isShow"
    height="500px" class="carousel"
    :autoplay="true"
    arrow="never"
    @change="changeCarousel">
      <el-carousel-item v-for="(item,index) in picdata" :key="index">
        <el-image
      style="width: 500px; height: 500px"
      :src="item"
      fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>

    <p class="dotBox">
      <span 
      v-for="(item,index) in picdata" :key="index"
      class="dot" 
      :class="{'dotActive':carouselActive==index}"
      @click="toggle(index)"
      ></span>
    </p>
  </el-dialog>
</template>

<script>
export default {
  props:{
    picdata:{
      type:Array,
      default:()=>{
        return []
      }
    },
  },
  data() {
    return {
      isShow:false,
      carouselActive:0,
    };
  },
  methods:{
    toggle(i){
      this.carouselActive=i;
      this.$refs.carousel.setActiveItem(i);
    },
    toPrev(){
      this.$refs.carousel.prev();
    },
    toNext(){
      this.$refs.carousel.next();
    },
    changeCarousel(i){
      console.log(i);
      this.carouselActive=i;
    },
    close(){
    }
  }
};
</script>

<style scoped>
.dialog >>> .el-dialog{
  border-radius: 8px;
}
.dialog >>> .el-dialog__header span{
  color: #333333;
  line-height: 22px;
  font-weight: 600;
}
.carousel{
  width: 500px;
  margin: 0 auto;
}
.carousel >>> .el-carousel__indicators{
  display: none;
}
.dialog .arrow{
  position: absolute;
  top: 50%;
  cursor: pointer;
}
.dialog .arrow-left{
  left: 50px;
}
.dialog .arrow-right{
  right: 50px;
}
.dialog .dotBox{
  line-height: 8px;
  text-align: center;
  margin-block-start:0;
  margin-block-end:0;
  margin-top: 36px;
  margin-bottom: 45px;
}
.dialog .dot{
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D8D8D8;
  margin-right: 20px;
}
.dialog .dot:last-child{
  margin-right: 0;
}
.dialog .dotActive{
  background: #4C8FF7;
}

</style>