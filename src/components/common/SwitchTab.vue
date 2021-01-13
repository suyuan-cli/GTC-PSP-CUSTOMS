<template>
  <div>
    <div class="switch" :class="typeStyle" v-if="!useName">
      <div
        class="switchItem"
        :class="myswitchActive == index ? 'active' : ''"
        v-for="(item, index) in switchLabel"
        :key="index"
        @click="changeTab(index)"
      >
        {{ item }}
        <slot name="itemOther" :item='item'></slot>
      </div>
    </div>  
    <div class="switch" :class="typeStyle" v-if="useName">
      <div
        class="switchItem"
        :class="myswitchActive == item.name ? 'active' : ''"
        v-for="(item, index) in switchLabel"
        :key="index"
        @click="changeTab(item.name)"
      >
        {{ item.label }}
        <slot name="itemOther" :item='item'></slot>
      </div>
    </div> 
  </div>  
  
</template>

<script>
export default {
  props:{
    switchLabel:{
      type:Array,
      default(){
        return []
      }
    },
    switchActive:{
      type:Number|String,
      default:0
    },
    //下划线类型：bottomLine
    //蓝色块类型：blueBlock
    typeStyle:{
      type:String,
      default:'bottomLine'
    },
    useName:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      myswitchActive:0
    }
  },
  watch:{
    switchActive:{
      handler(val){
        this.myswitchActive=val
      },
      immediate:true
    }
  },
  methods:{
    changeTab(index){
      // this.myswitchActive=index
      this.$parent.switchActive=index
      this.$emit('tabClick',index)
    }
  }

}
</script>

<style>
/* 下划线类型 */
.switch.bottomLine {
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.switch.bottomLine .switchItem {
  display: inline-block;
  /* min-width: 80px; */
  margin-right: 35px;
  line-height: 28px;
  font-size: 14px;
  text-align: center;
  color: #999999;
  cursor: pointer;
  position: relative;
}
.switch.bottomLine .switchItem:hover {
  color: #3195ff;
}
.switch.bottomLine .active {
  color: #3195ff;
  font-weight: bold;
  position: relative;
}
/* .switch.bottomLine .switchItem::after{
  content: '';
  display: block;
  width: 0%;
  height:2px;
  border-radius: 2px;
  background-color: #3195ff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
} */
.switch.bottomLine .switchItem.active::after{
  content: '';
  display: block;
  width: 100%;
  height:2px;
  border-radius: 2px;
  background-color: #3195ff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* transition:width 0.5s; */
  margin-top: 6px;
}
/* 蓝色块 */
.switch.blueBlock {
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.switch.blueBlock .switchItem {
  display: inline-block;
  min-width: 100px ;
  line-height: 28px;
  font-size: 12px;
  background: #f0f0f0;
  text-align: center;
  color: #999999;
  cursor: pointer;
}
.switch.blueBlock .switchItem:hover {
  color: #007aff;
}
.switch.blueBlock .active {
  background-color: #3195ff;
  color: #fff;
}
.switch.blueBlock .active:hover {
  color: #fff;
}
.switch.blueBlock :nth-child(1){
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.switch.blueBlock :nth-last-child(1){
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
</style>