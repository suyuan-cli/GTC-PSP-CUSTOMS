<template>
  <div>
    <div @click="showmore=!showmore" class="showmore-box">
      <div class="showmore" :class="showmore ? 'up' : 'down'" :style="{backgroundImage: 'url(' + (showmore ? up : down) + ')',backgroundRepeat: 'no-repeat',}"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: [Number,String],
      default() {
        return `${id}`;
      }
    },
    heights: {
      type: String,
      default() {
        return `'${heights}'`;
      }
    },
    isShowMore: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.showmore = this.isShowMore;
    this.showMore();
  },
  data() {
    return {
      showmore: false,
      up: require('../../assets/img/up.png'),
      down:require('../../assets/img/down.png'),
     
     
    };
  },
  watch: {
    showmore(val) {
      this.showMore();
      this.$emit('update:isShowMore', this.showmore);
    }
  },
  methods: {
    showMore(flag = this.showmore) {
      if (flag) {
        document.getElementById(this.id).style.height = 'auto';
      } else {
        document.getElementById(this.id).style.height = this.heights;
      }
    }
  }
};
</script>

<style scoped>
.showmore-box {
  width: 100%;
  height: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 14px;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  z-index: 10;
}
.showmore {
  width: 50px;
  height: 16px;
  position: absolute;
  top: -4px;
  font-size: 12px;
}
.up,.down {
  background-size: contain;
}
</style>
