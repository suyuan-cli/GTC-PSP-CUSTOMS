<!-- <verification
      style="position: relative;z-index:999;left:100px;top:400px"
      :width="300"
      :height="200"
      :src="src"
      @success="success"
      @fail="fail"
    >
    </verification> -->

<template>
  <div
    class="wrap"
    @mouseup="onMouseup"
    @mousemove.stop="onMousemove"
    @mouseleave="onMouseup"
  >
    <div
      class="top-container"
      v-show="showTop"
      :style="{ width: realwidth + 'px' }"
    >
      <div class="tips-info">
        <span class="tips">完成拼图验证</span>
        <span class="next-img" v-if="showNextImg" @click="onNextImg"
          >换一张</span
        >
      </div>
      <div class="slider-check-wrap">
        <canvas
          ref="bg"
          :width="realwidth"
          :height="height"
          class="bg-canvas"
        />
        <canvas
          ref="card"
          :width="realwidth"
          :height="height"
          class="card-canvas"
        />
      </div>
    </div>

    <div class="slider-wrap" :style="{ width: width + 'px' }" ref="slider-wrap">
      <div class="progress-bar" ref="progress-bar"></div>
      <div class="btn" ref="btn" @mousedown.stop="onMousedown">
        <div class="bgimg"></div>
      </div>
      <div class="slider" :class="{ success: tips == '验证通过' }" ref="slider">
        {{ tips }}
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/service/common.js';
const BTN_WIDTH = 50;
export default {
  name: 'SlideCheck',
  props: {
    radius: {
      type: Number,
      default: 10,
    },
    src: {
      type: [String, Array],
      default: '',
    },
    width: {
      type: Number,
      default: 270,
    },
    height: {
      type: Number,
      default: 150,
    },
    theme: {
      type: String,
      default: '#369',
    },
    positionX: {
      type: Number,
      default: 0,
    },
    config: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      showTop: false,
      range: 0,
      tips: '向右滑动完成拼图',
    };
  },
  computed: {
    showNextImg() {
      return Array.isArray(this.src) && this.src.length > 1;
    },
    realwidth() {
      return this.width - 20;
    },
  },
  watch: {
    src(nv, ov) {
      this.$nextTick(() => {
        this.initCanvas(this.src);
      });
    },
  },
  mounted() {
    if (Array.isArray(this.src)) {
      this.initCanvas(this.src[0]);
    } else {
      this.initCanvas(this.src);
    }
    this.initDomInfo();
  },
  methods: {
    onNextImg() {
      this.reset();
      if (Array.isArray(this.src)) {
        this.initCanvas(this.src[Math.floor(Math.random() * this.src.length)]);
      } else {
        this.initCanvas(this.src);
      }
    },
    initDomInfo() {
      this.pos = this.$refs['btn'].getBoundingClientRect();
      if (this.theme !== '#369') {
        this.$refs['slider'].style.boxShadow = `0 0 10px 0 ${this.theme}`;
        this.$refs['slider'].style.color = this.theme;
        this.$refs['btn'].style.background = this.theme;
        this.$refs['btn'].style.boxShadow = `0 0 10px 0 ${this.theme}`;
      }
    },
    onMousedown(e) {
      clearTimeout(this.hideInner);
      this.showTop = true;
      this.track = {
        top: e.clientY,
        bottom: e.clientY,
      };
      this.track2 = {
        top: e.clientY,
        bottom: e.clientY,
      };
      this.isEnterDown = true;
      this.clickPos = e.clientX;
      this.tips = '向右滑动完成拼图';
      this.$refs['btn'].style.transition = '';
      this.$refs['card'].style.transition = '';
      this.$refs['progress-bar'].style.transition = '';
      this.diff = e.clientX - this.pos.left;
      //console.log('this.diff', this.diff);
    },
    calcTrack(y) {
      let moveToBottom = this.track.top;
      let moveToTop = this.track.bottom;
      if (y > this.track.top) {
        this.track.top = y;
        if (y > moveToTop) {
          moveToTop = y;
        }
      } else if (y < this.track.bottom) {
        this.track.bottom = y;
        if (y < moveToBottom) {
          moveToBottom = y;
        }
      }
    },
    onMousemove(e) {
      if (!this.isEnterDown) return;
      const slideWidth = this.$refs['slider'].clientWidth;
      if (
        e.clientX - this.pos.left - this.diff - 10 + BTN_WIDTH > slideWidth ||
        e.clientX - this.pos.left - this.diff - 10 < 0
      ) {
        return;
      }
      this.calcTrack(e.clientY);
      this.cardMovePos =
        ((this.realwidth - this.radius * 5 + 2) /
          (this.$refs['slider'].clientWidth - BTN_WIDTH)) *
        (e.clientX - this.pos.left - this.diff - 10);
      //console.log('this.cardMovePos', this.cardMovePos);
      this.$refs[
        'card'
      ].style.transform = `translate3d(${this.cardMovePos}px,0,0)`;
      this.$refs['btn'].style.transform = `translate3d(${
        e.clientX - this.pos.left - this.diff - 10
      }px, 0, 0)`;
      this.$refs['progress-bar'].style.width = `${
        e.clientX - this.pos.left - this.diff - 10
      }px`;
      this.$refs['progress-bar'].style.background = '#42c3fc';
    },
    onMouseup(e) {
      if (!this.isEnterDown) return;
      this.isEnterDown = false;
      if (this.clickPos === e.clientX) return;
      common
        .checkVerificationCode({
          code: this.cardMovePos,
          user: 'login',
          vcodeIdx: 0,
        })
        .then((res) => {
          if (
            res.data &&
            res.data.status == 'success' &&
            res.data.data == true
          ) {
            //成功
            this.$refs['progress-bar'].style.background = '#2cd277';
            setTimeout(() => {
              this.tips = '验证通过';
              this.showTop = false;
              this.$emit('success', {
                top: Math.abs(this.track.bottom - this.track2.bottom),
                bottom: Math.abs(this.track.top - this.track2.top),
              });
              this.$refs['progress-bar'].style.transition = '0.3s all';
              this.$refs['progress-bar'].style.width = '0px';
              this.$refs['btn'].style.transition = '0.3s all';
              this.$refs['btn'].style.transform = `translate3d(0,0,0)`;
              this.$refs['card'].style.transition = '0.3s all';
              this.$refs['card'].style.transform = `translate3d(0,0,0)`;
              this.$emit('updateImg');
              this.showTop = false;
              this.reset();
            }, 1000);
          } else {
            //失败
            this.hideInner = setTimeout(() => {
              this.$emit('fail');
              this.$refs['progress-bar'].style.transition = '0.3s all';
              this.$refs['progress-bar'].style.width = '0px';
              this.$refs['btn'].style.transition = '0.3s all';
              this.$refs['btn'].style.transform = `translate3d(0,0,0)`;
              this.$refs['card'].style.transition = '0.3s all';
              this.$refs['card'].style.transform = `translate3d(0,0,0)`;
              this.reset();
              this.$emit('updateImg');
            }, 1000);
            this.$refs['progress-bar'].style.background = '#ff5b57';
          }
        });
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    initCanvas(src) {
      if (!src) {
        return;
      }
      const bg = this.$refs['bg'];
      const card = this.$refs['card'];
      const bgCtx = bg.getContext('2d');
      const cardCtx = card.getContext('2d');
      const r = this.radius;
      const w = r * 4;
      const cardSize = r * 6;
      this.x = this.positionX;
      const y = this.config.blockY;
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        bgCtx.drawImage(img, 0, 0, this.realwidth, this.height);
        //cardCtx.drawImage(img, 0, 0, this.realwidth, this.height);
        const cartImg = new Image();
        cartImg.src = this.config.blockImg;
        cartImg.onload = () => {
          cardCtx.drawImage(
            cartImg,
            0,
            this.config.blockY,
            this.config.blockW,
            this.config.blockH
          );
        };
        // const _y = y - r * 2 + 3;
        // const ImageData = cardCtx.getImageData(this.x, _y, cardSize, cardSize);
        // card.width = cardSize;
        // cardCtx.putImageData(ImageData, 0, _y);
      };
      const rect = {
        x: this.x,
        y,
        w,
        r,
      };
      img.src = src;
      //this.draw(bgCtx, 'fill', rect);
      //this.draw(cardCtx, 'clip', rect);
    },
    reset() {
      const bgCtx = this.$refs['bg'].getContext('2d');
      const card = this.$refs['card'];
      const cardCtx = card.getContext('2d');
      bgCtx.clearRect(0, 0, this.realwidth, this.height);
      cardCtx.clearRect(0, 0, this.realwidth, this.height);
      card.width = this.realwidth;
    },
    draw(ctx, operation, rect) {
      const PI = Math.PI;
      const { x, y, w, r } = rect;
      ctx.beginPath();
      ctx.lineTo(x, y);
      ctx.arc(x + w / 2, y, r, PI, 0);
      ctx.lineTo(x + w, y);
      ctx.arc(x + w, y + w / 2, r, 1.5 * PI, 0.5 * PI);
      ctx.lineTo(x + w, y + w);
      ctx.lineTo(x, y + w);
      ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.stroke();
      ctx[operation]();
      ctx.globalCompositeOperation = 'destination-over';
    },
  },
};
</script>

<style scoped>
.wrap {
  display: inline-block;
  position: relative;
}
.top-container {
  padding: 10px;
  box-shadow: 0 0 2px 2px #eee;
  border-radius: 5px;
  font-family: 'Microsoft YaHei';
  background: white;
  position: absolute;
  top: 0px;
  transform: translateY(-100%);
}
.wrap .tips-info {
  display: flex;
  justify-content: space-between;
  padding: 2px 0 2px;
  padding-top: 0px;
  position: relative;
  top: -4px;
}
.wrap .tips {
  color: #666;
}
.wrap .next-img {
  color: #06c;
  font-size: 14px;
  cursor: pointer;
}

.slider.success {
  background-color: #2cd277 !important;
  color: white !important;
}
.slider-check-wrap {
  position: relative;
  line-height: 1.5;
  text-align: left;
  background-color: #fff;
}
.slider-wrap {
  position: relative;
  height: 32px;
  user-select: none;
  z-index: 999;
}
.slider-wrap .progress-bar {
  position: absolute;
  top: 1px;
  left: 0;
  width: 0;
  height: 32px;
  overflow: hidden;
  padding-left: 25px;
  background: #3bbcfc;
  border-radius: 3px 0px 0px 3px;
}
.slider-wrap .btn {
  text-align: center;
  position: absolute;
  width: 44px;
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(214, 216, 221, 1);
  border-radius: 3px 0px 0px 3px;
}

.slider-wrap .btn .bgimg {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('./arrow.png');
  height: 12px;
  width: 12px;
}
.slider-wrap .slider {
  line-height: 30px;
  height: 32px;
  text-align: center;
  background: rgba(243, 243, 245, 1);
  border: 1px solid rgba(214, 216, 221, 1);
  border-radius: 3px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(132, 137, 148, 1);
}
.slider-check-wrap .card-canvas {
  position: absolute;
  left: 0;
}
</style>
