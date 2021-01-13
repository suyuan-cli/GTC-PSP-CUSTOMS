<template>
  <div class="container-login">
    <!-- header 溯源logo -->
    <div class="header-oglogo">
      <img :src="oglogo" class="oglogo" />
    </div>
    <!-- 中部内容 -->
    <div class="center-context">
      <div class="div-center-left" ref="divcenterleft">
        <el-carousel
          ref="carousel"
          style="width: 70%; height: 85%"
          height="100%"
          :autoplay="false"
          class="cp1"
          :indicator-position="position"
          arrow="never"
          :interval="interval"
          @change="bannerChange"
        >
          <el-carousel-item v-for="(item, ix) in cp" :key="ix" class="carousel">
            <el-image :src="item" class="img-cp" />
            <div class="msg-content">
              <div class="maintip" ref="maintip">
                {{ bannerInfo[ix].topInfo }}
              </div>
              <div class="subtip" ref="subtip">
                {{ bannerInfo[ix].subInfo }}
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>

        <!-- 轮播轴 -->
        <div class="banner-control" ref="bannercontrol">
          <div class="banner-style">
            <img
              :src="curindex == 0 ? selectedsrc : selectsrc"
              class="img-select"
              @click="selectBanner(0)"
            />

            <div class="point" v-for="(val, index1) in lunarr" />
            <img
              :src="curindex == 1 ? selectedsrc : selectsrc"
              class="img-select"
              @click="selectBanner(1)"
            />
            <div class="point" v-for="(val, index2) in lunarr" />
            <img
              :src="curindex == 2 ? selectedsrc : selectsrc"
              class="img-select"
              @click="selectBanner(2)"
            />
            <div class="point" v-for="(val, index3) in lunarr" />
            <img
              :src="curindex == 3 ? selectedsrc : selectsrc"
              class="img-select"
              @click="selectBanner(3)"
            />
          </div>
        </div>
      </div>
      <!-- 登陆框 -->
      <div class="login-form" v-loading="loading">
        <!-- tabs -->
        <div class="tabs">
          {{ index === 0 ? '用户身份验证' : '设置新密码' }}
        </div>
        <!-- 登陆form -->
        <!-- 手机号码登陆 -->
        <el-form
          autocomplete="off"
          class="form-style"
          :model="loginform"
          v-show="index === 0"
        >
          <el-row>
            <el-form-item>
              <el-input
                placeholder="请输入手机号码"
                v-model="loginform.mobile"
                class="input-style"
              >
                <i
                  slot="prepend"
                  style="width:5px；display;flex;align-items: center;"
                >
                  <img style="background-color: white" :src="mobilesrc" />
                </i>
              </el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item>
              <div style="display: flex">
                <el-input
                  placeholder="请输入验证码"
                  v-model="loginform.authcode"
                  class="input-style"
                  style="width: 280px"
                >
                  <i
                    slot="prepend"
                    style="width:5px;display;flex;align-items: center;"
                  >
                    <img style="background-color: white" :src="checkcodesrc" />
                  </i>
                  <template slot="append">
                    <div
                      class="checkcodebtn cursor"
                      @click="getcheckcode"
                      v-if="gobacktime == 0"
                    >
                      发送验证码
                    </div>
                    <div v-else class="checkcodebtn">
                      {{ gobacktime }}秒后重送
                    </div>
                  </template>
                </el-input>
              </div>
            </el-form-item>
          </el-row>
        </el-form>
        <!-- 密码登陆 -->
        <el-form
          autocomplete="off"
          class="form-style"
          :model="loginform"
          v-show="index === 1"
          :rules="loginrule"
        >
          <el-form-item prop="password">
            <el-input
              placeholder="请输入新密码"
              auto-complete="new-password"
              show-password
              v-model="loginform.password"
              class="input-style"
            >
              <i
                slot="prepend"
                style="width:5px；display;flex;align-items: center;"
              >
                <img style="background-color: white" :src="locksrc" />
              </i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="确认新密码"
              auto-complete="new-password"
              v-model="loginform.password2"
              show-password
              class="input-style"
              style="margin-top: 0px"
            >
              <i
                slot="prepend"
                style="width:5px；display;flex;align-items: center;"
              >
                <img style="width: 16px; height: 16px" :src="locksrc" />
              </i>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          style="width: 280px; margin-top: 3px"
          @click="nextStep"
          >{{ index === 0 ? '下一步' : '提交' }}</el-button
        >
        <div class="forgetPass" v-show="index === 1" @click="backStep">
          返回上一步
        </div>
        <div :style="styleObj">
          <div class="divider">
            <div style="color: #cccccc">———&nbsp;&nbsp;&nbsp;</div>
            <p style="font-size: 12px">海关溯源辅助信息APP下载</p>
            <div style="color: #cccccc">&nbsp;&nbsp;&nbsp;———</div>
          </div>
          <!-- 二维码展示 -->
          <div class="appdownload">
            <div class="img-div">
              <img :src="andr" class="andr" />
              安卓版
            </div>
            <div class="img-div">
              <img :src="ios" class="ios" />
              IOS版
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部咨询 -->
    <div class="bottom-tips">
      <span class="bottom-tips-style">
        Copyright © 2020-2030 , All Rights Reserved 海关溯源辅助信息系统
        版权所有
      </span>
    </div>
  </div>
</template>

<script>
import hc from '@/public-method/HhcJump.js';
import common from '../../../service/common';
import checkutil from './CheckUserInfo';
let selectsrc = require('@/assets/img/loginOrRegister-select.png');
let selectedsrc = require('@/assets/img/loginOrRegister-selected.png');

export default {
  mounted() {
    this.$store.dispatch('getEncryptKey');
    this.okbymyseft();
    this.start();
  },
  data() {
    return {
      loading: false,
      lunarr: [1, 2, 3, 4, 5],
      bannerInfo: [
        {
          topInfo: '打破信息壁垒，实现商品溯源信息的有效利用，辅助监管',
          subInfo:
            '接收全球潮源中心传递的商品溯源数据，经大数行分析、整合后，形成有益于辅助决策和执行的辅助信息，可向海关相关业务系统开放',
        },
        {
          topInfo:
            '全链条商品溯源数据时间、空间、主体的多维特性，可有效拓宽监管视野',
          subInfo:
            '可助力海关看清贸易本源和商品本质，基于大数据的风险分析、可视报表等应用功能，能有效辅助决策',
        },
        {
          topInfo:
            '自动、智能的执行辅助功能，可有效提升海关审单、查验等工作效率',
          subInfo:
            '基于海关18类作业指令及10类日常监管环节的执行辅助功能，可自动识别监管风险，智能补充商品溯源数据',
        },
        {
          topInfo: '搭建海关与企业、消费者等社会公众的信息桥梁，建立沟通渠道',
          subInfo:
            '接收企业、消费者等社会公众反馈的品质投诉、举报、咨询等信息，传递监督结果，反馈监管之声',
        },
      ],
      timer: {},
      curindex: 0,
      selectsrc: selectsrc,
      selectedsrc: selectedsrc,
      timer2: null,
      mobilesrc: require('@/assets/img/loginOrRegister-mobile.png'),
      checkcodesrc: require('@/assets/img/loginOrRegister-checkcode.png'),
      locksrc: require('@/assets/img/loginOrRegister-lock.png'),
      usersrc: require('@/assets/img/loginOrRegister-user.png'),
      interval: 2500,
      position: 'none',
      loginrule: {
        loginname: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      positionX: 130,
      src: [require('@/components/common/verification-code/bg.jpg')],
      gobacktime: 0,
      loginform: {
        mobile: null,
        loginname: null,
        password: null,
        authcode: null,
        password2: null,
      },
      andr: require('@/assets/img/android.png'),
      ios: require('@/assets/img/ios.png'),
      index: 0,
      loginType: 'password',
      oglogo: require('@/assets/img/loginOrRegister-logo.png'),
      cp: [
        require('@/assets/img/loginOrRegister-cp1.png'),
        require('@/assets/img/loginOrRegister-cp2.png'),
        require('@/assets/img/loginOrRegister-cp3.png'),
        require('@/assets/img/loginOrRegister-cp4.png'),
      ],
    };
  },
  computed: {
    styleObj() {
      let obj = {
        marginTop: '70px',
      };
      if (this.index === 1) {
        obj.marginTop = '43px';
      }
      return obj;
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        if (this && this.$refs && this.$refs.carousel)
          this.$refs.carousel.next();
      }, 3000);
    },
    backStep() {
      //清空计数器
      if (this.timer2) {
        clearInterval(this.timer2);
      }
      this.loginform.authcode = ''; //清空验证码
      this.index = 0;
      this.gobacktime = 0;
    },
    nextStep() {
      if (this.index === 0) {
        if (!this.loginform.mobile) {
          this.$message({
            message: '手机号码不能为空！',
            type: 'error',
            offset: 180,
          });
          return;
        }
        if (!this.loginform.authcode) {
          this.$message({
            message: '验证码不能为空！',
            type: 'error',
            offset: 180,
          });
          return;
        }
        common
          .checkCode({
            authcode: this.loginform.authcode,
            mode: 'mobile',
            vfmobile: this.loginform.mobile,
          })
          .then((res) => {
            if (res.data.status == 'success') {
              this.index = this.index + 1;
            } else {
              this.$message({
                message: res.data.message,
                type: 'error',
                offset: 180,
              });
            }
          });
      } else {
        if (!this.$store.state.encryptkey) {
          this.$message({
            message: `暂时无法登录，请稍后再试！`,
            type: 'error',
            offset: 180,
          });
          return;
        }
        //提交
        let pass1 = this.loginform.password;
        let pass2 = this.loginform.password2;
        // 密码校验暂时去掉
        let res =
          checkutil.checkPass(pass1) || checkutil.chaeckAgPass(pass1, pass2);
        if (res) {
          this.$message({
            message: `${res.name}${res.msg}`,
            type: 'error',
            type: 180,
          });
          return;
        }
        let params = {
          password: common.encrypt(pass1),
          password2: common.encrypt(pass2),
          vfmobile: this.loginform.mobile,
        };
        common.forgotPass(params).then((res) => {
          if (res.data.status === 'success') {
            if (!hc.initiateLogin()) {
              this.$router.push('/logins');
            }
          } else {
            this.$message({
              message: res.data.message || '操作异常',
              type: 'error',
              offset: 180,
            });
          }
        });
      }
    },
    bannerChange(curindex, preindex) {
      this.curindex = curindex;
    },
    selectBanner(index) {
      this.$refs.carousel.setActiveItem(index);
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.start();
    },
    okbymyseft() {
      let that = this;
      let planwidth = 1920;
      let mainFontSize = 28;
      let subFontSize = 14;
      let planHeight = 1040;

      let imgwidth = 1344;
      let imgheight = 730;
      // 监听 window 的 resize 事件．在浏览器窗口变化时再设置下区域高度．
      window.onresize = () => {
        let html = document.documentElement;
        let curwidth = html.clientWidth; //当前宽度
        if (curwidth < 1200) {
          return;
        }
        let curheight = html.clientHeight; //高度
        // let proportion = curwidth / planwidth; //求出比例
        let proportion = curheight / planHeight;
        //缩放图片
        // let height = that.$refs.carousel.offsetHeight;
        that.$refs.divcenterleft.style.height = imgheight * proportion + 'px';
        // let width = that.$refs.divcenterleft.offsetWidth;
        that.$refs.divcenterleft.style.width = curwidth * proportion + 'px';

        //缩放字体
        that.$refs.maintip.forEach((item) => {
          let mainfont = mainFontSize * proportion;
          if (mainfont < 16) {
            mainfont = 16;
          }
          if (mainfont > 28) {
            mainfont = 28;
          }
          item.style.fontSize = mainfont + 'px';
          item.style.marginTop = -100 * proportion + 'px';
        });

        that.$refs.subtip.forEach((item) => {
          let mainfont = subFontSize * proportion;
          if (mainfont < 12) {
            mainfont = 12;
          }
          if (mainfont > 16) {
            mainfont = 16;
          }
          item.style.fontSize = mainfont + 'px';
          item.style.marginTop = 22 * proportion + 'px';
        });

        let margintop = '1px';
        if (imgheight * (1 - proportion) < 100 * proportion) {
          margintop = 100 * proportion - imgheight * (1 - proportion);
        }
        that.$refs.bannercontrol.style.marginTop = margintop;
      };
    },
    getcheckcode() {
      let res = checkutil.checkMobile(this.loginform.mobile);
      if (res) {
        this.$message({
          message: `${res.name}${res.msg}`,
          type: 'error',
          offset: 180,
        });
        return;
      }
      this.loading = true;
      common.getcheckcode({ mobile: this.loginform.mobile }).then((res) => {
        this.loading = false;
        if (res.data.status == 'success') {
          //1.关闭发送验证码校验
          let temp0 = res.data;
          if (temp0.message) {
            if (temp0.message.indexOf('短信验证码发送成功') == -1) {
              this.$message({
                message: temp0.message,
                type: 'error',
                offset: 180,
              });
              return;
            }
          } else {
            //2.开启发送验证码校验
            let data = temp0.data;
            if (data.message !== '短信验证码发送成功') {
              this.$message({
                message: data.message,
                type: 'error',
                offset: 180,
              });
              return;
            }
          }

          this.gobacktime = 60;
          let temp = setInterval(() => {
            this.gobacktime = this.gobacktime - 1;
            if (this.gobacktime === 0) {
              clearInterval(temp);
            }
          }, 1000);
          this.timer2 = temp;
        } else {
          this.$message({
            message: res.data.message,
            type: 'error',
            offset: 180,
          });
        }
      });
    },
  },
};
</script>
<style scoped>
.checkcode {
  font-size: 12px;
  background-color: white;
  width: 100px;
  color: #848994;
  border: 1px solid rgba(207, 212, 214, 1);
  border-radius: 3px;
  margin-left: 10px;
  height: 29px;
  line-height: 29px;
  cursor: pointer !important;
}

.canclick {
  background-color: #007aff;
  color: white;
  border: 1px solid #007aff;
  cursor: pointer !important;
}
.container-login {
  height: 100%;

  min-width: 1200px;
  min-height: 625px !important;
  overflow: hidden;
}
.header-oglogo {
  width: 100%;
  height: 65px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
}
.oglogo {
  height: 76%;
  margin-left: 200px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
}
.center-context {
  width: 100%;
  height: calc(100% - 110px);
  background-image: url('../../../assets/img/loginOrRegister-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.bottom-tips {
  background-color: white;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.bottom-tips-style {
  font-size: 12px;
  color: #666666;
}

.login-form {
  position: absolute;
  width: 352px;
  height: 443px;
  background-color: rgb(242, 243, 246);
  text-align: center;
  z-index: 2;
  top: 20%;
  right: 15.4%;
}
@media screen and (max-width: 1440px) {
  .login-form {
    right: 3%;
  }
  /* .el-carousel {
    height: 100% !important;
  }
  .banner-control {
    position: relative;
    top: -4%;
  } */
}
.banner-control {
  position: relative;
  top: 4%;
}
.img-cp >>> .el-image__inner--center {
  transform: none !important;
  /* margin-left: -50% !important; */
  transform: translateX(-50%) !important;
  /* margin-top: -50% !important; */
}
@media screen and (max-height: 740px) {
  .login-form {
    top: 10%;
  }
}
@media screen and (min-width: 720px) and (max-height: 800px) {
  .maintip {
    font-size: 22px !important;
  }
  .msg-content {
    bottom: 7.5% !important;
  }
  .img-cp {
    width: 800px !important;
  }
  .el-carousel {
    height: 100% !important;
  }
  .banner-control {
    position: relative;
    top: -4%;
  }
}
@media screen and (min-width: 100px) and (max-height: 720px) {
  .maintip {
    font-size: 20px !important;
  }
  .img-cp {
    width: 700px !important;
  }
}
.tabs {
  margin-top: 44px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 38px;
  text-align: left;
}
.tap-style {
  font-size: 14px;
  cursor: pointer;
  padding-bottom: 6px;
}
.marginleft {
  margin-left: 20px;
}
.tap-selected {
  color: #007cff;
  border-bottom: #007cff;
  border-bottom-width: 3px;
  border-bottom-style: solid;
}
.input-style {
  height: 20px;
}
.tabs >>> .el-form-item {
  margin-bottom: 10px;
}
.divider {
  width: 280px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  margin-top: 10px;
}
.form-style {
  width: 280px;
  margin: 0 auto;
  margin-top: 36px;
}
.forgetPass {
  font-size: 12px;
  color: #007cff;
  margin-left: 225px;
  margin-top: 10px;
  cursor: pointer;
}
.appdownload {
  width: 280px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 15px;
}
.andr {
  width: 50px;
  height: 50px;
}
.ios {
  width: 50px;
  height: 50px;
}
.img-div {
  width: 50px;
  text-align: center;
  font-size: 12px;
}

.input-style >>> .el-input-group__prepend {
  background-color: white;
  padding-left: 14px;
  padding-right: 14px;
}
.carousel {
  text-align: center;
}
.msg-content {
  position: absolute;
  bottom: 5%;
  width: 100%;
}
.maintip {
  font-size: 25px;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 42px;
  margin: 0 auto;
}

.subtip {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 1%;
}

.div-center-left {
  width: 100%;
  height: 100%;
}
.banner-control {
  width: 70%;
  display: flex;
  /* justify-content: center; */
  text-align: center;
}
.img-cp {
  width: 830px;
  margin-left: 8%;
}
.banner-control {
  margin-top: -10px;
}
.img-select {
  width: 26px;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  z-index: 99;
}
.point {
  width: 2px;
  height: 2px;
  background-color: white;
  margin-left: 10px;
}
.banner-style {
  display: flex;
  margin: 0 auto;
  align-items: center;
}
.checkcode-span {
  font-size: 14px;
  cursor: pointer;
}
.input-style >>> .el-input-group__append {
  background: rgb(0, 122, 255);
}
.marginTop {
  margin-top: 87px;
}
.checkcodebtn {
  width: 100%;
  text-align: center;
  color: white;
}
.cursor {
  cursor: pointer;
}
</style>
