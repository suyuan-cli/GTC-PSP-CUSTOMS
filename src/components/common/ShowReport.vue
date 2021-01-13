<template>
  <div>
    <div class="timeline-container" v-if="dataLength > 0">
      <div class="funcBtn leftBtn" v-if="dataLength > 2">
        <i class="el-icon-arrow-left" @click="toleft"></i>
      </div>
      <div class="mask">
        <div
          class="timeline"
          :style="{ width: timelineWidth + 'px', marginLeft: marginLeft + 'px' }"
        >
          <div
            class="timeline_item"
            v-for="(item, index) in datas"
            :key="index"
            :class="{ time_item_active: index == timelineActive }"
          >
            <div class="bottom" @click="timelineActive=index">
              <div class="alignList">
                <div class="img-box">
                  <el-image
                    style="width: 128px; height: 175px"
                    :src="config.base_image_url + item.filepathview"
                    fit="contain"
                  ></el-image>
                  <span class="download" @click="downloads(item)">
                    <i class="el-icon-download"></i>下载
                  </span>
                  <span class="look" @click="showPicDig(item.urls)">
                    <i class="el-icon-search"></i>预览
                  </span>
                </div>
                <div>
                  <div class="alignItem" v-for="(ele,i) in timelineItems">
                    <div class="label">{{ele.options.label}}：</div>
                    <el-tooltip class="item" effect="dark" :content="item[ele.options.prop]" placement="top-start">
                    <div
                      class="contentvalue"
                      v-if="ele.options.label === '出具日期' || ele.options.label === '来源时间'"
                    >{{dateFormat(item[ele.options.prop])}}</div>
                    <div
                      v-else
                      class="contentvalue"
                      :class="ele.options.prop=='attach'?'routerlink':''"
                      :style="ele.options.prop=='attach'?'cursor:pointer':''"
                      @click="ele.options.prop=='attach'?goto(item.sourceLink):null"
                    >{{item[ele.options.prop]}}</div>
                     </el-tooltip>
                  </div>
                </div>
              </div>

              <div class="view_detail">
                <span class="showdetail" @click="showDetail(item)">证书联网核查</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="funcBtn rightBtn" v-if="dataLength > 2">
        <i class="el-icon-arrow-right" @click="toright"></i>
      </div>
      <PicCarousel ref="picCarousel"></PicCarousel>
    </div>
    <div class="center" v-else>
      <el-image :src="infoUrl" fit="cover" class="myimage"></el-image>
      <span class="title">暂无检验检测报告信息</span>
    </div>
  </div>
</template>
<script>
import PicCarousel from './PicCarousel.vue';
import config from '@/p.config';
export default {
  components: { PicCarousel },
  props: {
    timelineItems: {
      type: Array
    },
    timelineModel: {
      type: Object
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      config,
      datas: [],
      timelineActive: 0,
      marginLeft: 0,
      infoUrl: require('../../assets/img/custombg.png'),
      picdata: [
        {
          src:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
      ]
    };
  },
  computed: {
    timelineWidth: function() {
      if (this.data) {
        return this.data.length * 572;
      }
    },
    dataLength: function() {
      if (this.datas) {
        return this.datas.length;
      }
    }
  },
  methods: {
    gettype(arr) {
      var type = typeof arr;
      if (type !== 'array') {
        return type;
      }
    },
    toright() {
      if (Math.abs(this.marginLeft) < this.timelineWidth - 1044) {
        this.marginLeft = this.marginLeft - 572;
      } else {
        return false;
      }
    },
    toleft() {
      if (this.marginLeft < 0) {
        this.marginLeft = this.marginLeft + 572;
      } else {
        return false;
      }
    },
    goto(target) {
      if (target && target.length > 0) {
        this.$router.push(target);
      } else {
        return false;
      }
    },
    showDetail(item) {
      // this.$router.push('/certificateVerification');
      let data =
        item.attachno +
        ',' +
        item.filename +
        ',' +
        item.filepath +
        ',' +
        item.filepathview +
        ',' +
        item.provideodate +
        ',' +
        item.provideorgan +
        ',' +
        item.provideorganname;
      let encodeData = encodeURIComponent(data);
      let urls = '/#/certificateVerification' + '?fromdata=' + encodeData;
      window.open(urls, '_blank');
    },
    showPicDig(vals) {
      this.$refs.picCarousel.isShow = true;
      this.$refs.picCarousel.picdata = vals;
    },
    downloads(val) {
      let path = config.base_image_url + val.filepathview;
      let name = val.filename
      let functionmodule = val.functionmodule
      this.download(path,functionmodule,name);
    },
    dateFormat(val) {
      return val ? this.formatDate(val, 'YYYY-MM-DD') : '/';
    }
  },
  watch: {
    data: {
      handler(nv) {
        if (nv) {
          this.datas = nv;
        } else {
          this.datas = [];
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.timelineform >>> .el-form-item {
  display: block;
}
.timeline-container {
  position: relative;
  /* border: 1px solid #ebeef5; */
  padding-bottom: 10px;
}
.funcBtn {
  display: inline-block;
  position: absolute;
  cursor: pointer;
  color: #999999;
}
.funcBtn i {
  font-size: 30px;
}
.funcBtn:hover {
  color: rgba(70, 124, 253, 1);
}
.leftBtn {
  left: -18px;
  top: 50%;
}
.rightBtn {
  right: -13px;
  top: 50%;
}
.mask {
  width: 1145px;
  margin: auto;
  overflow: hidden;
}
.timeline {
  color: #999999;
  display: flex;
  padding-top: 30px;
}
.timeline_item {
  margin-left: 7px;
  margin-right: 13px;
  margin-bottom: 8px;
}
.timeline_item:last-child {
  margin-right: 0;
}
.timeline .top {
  position: relative;
  height: 53px;
}

.timeline .line {
  position: absolute;
  left: 50%;
  transform: translateX(2px);
  width: 368px;
  height: 2px;
  top: 3px;
  background: #f7f7f7;
}

.timeline .time_item_active .line {
  background: linear-gradient(to right, #3195ff, #e9e9e9);
}

.timeline .center {
  width: 550px;
  font-size: 14px;
  text-align: center;
  height: 246px;
}
.timeline .bottom {
  width: 550px;
  border-radius: 7px;
  border: 1px solid #f2f2f2;
  font-size: 12px;
  height: 246px;
}
.timelineform >>> .el-form-item__label {
  font-size: 14px;
  color: #333333;
}
.timelineform >>> .el-form-item__content {
  font-size: 14px;
  color: #666666;
}
.view_detail {
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.time_item_active .bottom {
  border: 1px solid #2f91ff;
  box-shadow: 0px 0px 10px #bdbdbd;
  border-radius: 8px;
}
.alignList {
  padding: 17px 0px;
  display: flex;
}
.alignItem {
  display: flex;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 15px;
}
.alignItem:last-child {
  margin-bottom: 0;
}
.alignItem .label {
  width: 114px;
  flex-shrink: 0;
  text-align: left;
  margin-right: 8px;
}

.time_item_active .routerlink {
  color: #3195ff;
}
.routerlink:hover {
  color: #2f91ff;
}
.el-icon-download {
  margin-left: 5px;
}
.img-box {
  width: 128px;
  height: 175px;
  margin-left: 30px;
  margin-right: 20px;
  position: relative;
}
.img-box > span {
  display: inline-block;
  height: 18px;
  width: 64px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  bottom: 0px;
  cursor: pointer;
}
.img-box > span:hover {
  color: #3195ff;
}

.download {
  left: 0px;
  background: #373737;
  opacity: 0.21;
}
.look {
  left: 64px;
  background: #000000;
  opacity: 0.31;
}

.img-box > span > i {
  margin-right: 5px;
}
.showdetail {
  display: inline-block;
  width: 126px;
  height: 20px;
  background: #e2f0f2;
  opacity: 1;
  border-radius: 14px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: #3092f9;
  margin-left: 30px;
  cursor: pointer;
}
.center {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.myimage {
  height: 205px;
  width: 200px;
  margin-bottom: 30px;
}

.title {
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 22px;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
}
.contentvalue {
  display: inline-block;
  width: 245px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
