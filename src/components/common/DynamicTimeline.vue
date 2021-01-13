<template>
  <div class="timeline-container">
    <div class="funcBtn leftBtn" v-if="timelineLength > 3">
      <i class="el-icon-arrow-left" @click="toleft"></i>
    </div>
    <div class="mask">
      <div
        class="timeline"
        :style="{ width: timelineWidth + 'px', marginLeft: marginLeft + 'px' }"
      >
        <div
          class="timeline_item"
          v-for="(item, index) in data"
          :key="index"
          :class="{ time_item_active: index == timelineActive }"
        >
          <div class="bottom" @click="timelineActive=index">
            <div class="alignList">
              <div class="alignItem" v-for="(ele,i) in timelineItems">
                <div class="label">{{ele.options.label}}：</div>
                <el-tooltip class="item" effect="dark" :content="item[ele.options.prop]" placement="top-start">
                <div class="contentvalue" v-if="ele.options.label === '签发时间' || ele.options.label === '有效时间'">{{dateFormat(item[ele.options.prop])}}</div>
                <div class="contentvalue" 
                v-else
                :class="ele.options.prop=='filepath'?'routerlink':''" 
                :style="ele.options.prop=='filepath'?'cursor:pointer':''"
                @click="ele.options.prop=='filepath'?downloads(item):null"><i :class="ele.options.prop=='filepath'?'el-icon-paperclip':''" ></i>{{item[ele.options.prop]}}<i :class="ele.options.prop=='filepath'?'el-icon-download':''" ></i></div>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="funcBtn rightBtn" v-if="timelineLength > 3">
      <i
        class="el-icon-arrow-right"
        @click="toright"
      ></i>
    </div>
  </div>
</template>
<script>
import config from '@/p.config';
export default {
  components: {
  },
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
      timelineActive: 0,
      marginLeft: 0,
      // timelineLength: null
    };
  },
  computed: {
    timelineWidth: function() {
      return this.data.length * 242;
    },
    timelineLength: function() {
      return this.data.length
    }
  },
  // watch: {
  //   data: {
  //     handler(nv) {
  //       if(nv) {
  //         this.timelineLength = nv.length
  //       }
  //     },
  //     immediate:true
  //   },
    
  // },
  methods: {
    downloads(val) {
      let path = config.base_image_url + val.filepathview;
      let name = val.filename
      let functionmodule = val.functionmodule
      this.download(path,functionmodule,name)
    },
    toright() {
      if (Math.abs(this.marginLeft) < this.timelineWidth - 850) {
        this.marginLeft = this.marginLeft - 365;
      } else {
        return false;
      }
    },
    toleft() {
      if (this.marginLeft < 0) {
        this.marginLeft = this.marginLeft + 365;
      } else {
        return false;
      }
    },
    dateFormat(val) {
      return val ? this.formatDate(val, 'YYYY-MM-DD') : '/';
    },
  
  }
};
</script>

<style scoped>
.timelineform >>> .el-form-item {
  display: block;
}
.timeline-container {
  position: relative;
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
  left: 5px;
  top: 50%;
}
.rightBtn {
  right: 5px;
  top: 50%;
}
.mask {
  width: 1080px;
  margin: auto;
  overflow: hidden;
}
.timeline {
  color: #999999;
  display: flex;
  padding-top: 30px;
}
.timeline_item {
  margin-left: 16px;
  
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
  width: 340px;
  font-size: 14px;
  text-align: center;
}
.timeline .bottom {
  width: 340px;
  border-radius: 7px;
  border: 1px solid #f2f2f2;
  font-size: 12px;
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
  border-top: 1px solid #f9f9f9;
  text-align: center;
  line-height: 37px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.time_item_active .view_detail{
  color: #3195FF;
}
.time_item_active .center{
  color: #3195FF;
}
.time_item_active .bottom {
  
border: 1px solid #2F91FF;
box-shadow: 0px 0px 10px #BDBDBD;
border-radius: 8px;
}
.alignList{
  padding: 17px 14px;
}
.alignItem {
  display: flex;
  font-size: 12px;
  line-height:17px;
  margin-bottom: 17px;
}
.alignItem:last-child{
  margin-bottom: 0;
}
.alignItem .label{
  width: 90px;
  flex-shrink: 0;
  text-align: left;
}
.time_item_active .view_detail {
  border-top: 1px solid rgba(219, 236, 255, 0.2);
}
.time_item_active .routerlink {
  color: #3195ff;
}
.routerlink:hover {
  color: #2F91FF;
}
.el-icon-download {
  margin-left: 5px;
}
.el-icon-paperclip {
  margin-right: 5px;
}

.contentvalue {
  display: inline-block;
  width: 245px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
