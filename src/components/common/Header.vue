<template>
  <div class="header">
    <div class="w1200">
      <!-- logo -->
      <div class="header-left">
        <div class="logo-img">
          <img src="../../assets/logo.png" style="height: 50px" alt />
        </div>
        <!-- <div class="logo-zh">全球溯源中心</div>
        <span class="logo-en">GLOBAL TRACEABILITY CENTER</span>-->
      </div>
      <div class="header-right">
        <div class="header-item" @click="gotoPath('/taskList')">
          <i class="iconfont icon-headermid09"></i>
          <span class="header-text">
            新任务
            <span class="tip-num">({{ myTaskCount }})</span>
          </span>
        </div>

        <div
          class="header-item"
          @click="
            gotoPath(
              '/riskAudit??queryKey=status&queryValue=30&queryType=today'
            )
          "
        >
          <i class="iconfont icon-headermid08"></i>
          <span class="header-text">
            风险提示
            <span class="tip-num">({{ riskCount }})</span>
          </span>
        </div>

        <div class="header-user">
          <!-- 用户头像 -->
          <!-- <div class="header-user-avator">
            <el-badge is-dot class="item">
              <img src="@/assets/img/img.jpg" />
            </el-badge>
          </div>-->
          <span class="header-user-name">您好, {{ username }}</span>
          <!-- 用户名下拉菜单 -->
          <!-- <el-dropdown
            class="header-user-name"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              {{ username }}
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="usermanage">帐号管理</el-dropdown-item>
              <el-dropdown-item command="user">修改密码</el-dropdown-item>
              <el-dropdown-item command="usercancel">账号注销</el-dropdown-item>
              <el-dropdown-item divided command="loginout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>-->
        </div>
        <!-- 语言切换 -->
        <div class="header-out" @click="loginout">
          <span class="header-out-text">退出</span>
        </div>

        <div class="header-user" v-if="roles.length > 1">
          <el-dropdown class="header-user-name" trigger="click" @command="roleChange">
            <span class="el-dropdown-link">切换角色</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="item" v-for="(item, $index) in roles" :key="$index">
                {{ item.name }}
                <span v-show="role.code == item.code">：已登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 用户中心 -->
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../common/bus';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import us from '@/service/user.js';
import common from '../../service/common';
import hc from '@/public-method/HhcJump.js';
export default {
  data () {
    return {
      myTaskCount: 0,
      riskCount: 0,
      collapse: false,
      fullscreen: false,
      name: 'linxin',
      message: 2
    };
  },
  computed: {
    role () {
      return this.$store.state.roleResult.role;
    },
    roles () {
      return this.$store.state.roleResult.roles || [];
    },
    username () {
      let bname = this.$store.state.roleResult.userLimBcodename || '';
      let username = this.$store.state.roleResult.userWCodename || '';
      if (!bname && !username) {
        return '综合科/张某某 ';
      }
      if (!bname || !username) {
        return bname || username;
      }
      return bname + '/' + username;
    },
    ...mapGetters('dailog', {
      isShow: 'isShow'
    })
  },
  methods: {
    gotoPath (path) {
      this.$router.push({ path: path });
    },
    // 用户名下拉菜单选择事件

    //切换角色
    roleChange (role) {
      this.$store.dispatch('loginByType', role).then(res => {
        if (res == false) {
          this.$message.error('抱歉切换失败，请稍后重试');
          return;
        }
        let url = window.location.protocol + '//' + window.location.host;
        window.location.href = url;
      });
    },
    loginout () {
      localStorage.removeItem('ms_username');
      this.$store.dispatch('logout').then(() => {
        if (!hc.initiateLogin()) {
          //如果是hc登录，跳转到第三方登录
          this.$router.push('/logins');
        }
      });
    },
    handleCommand (command) {
      if (command == 'loginout') {
        localStorage.removeItem('ms_username');
        this.$store.dispatch('logout').then(() => {
          if (!hc.initiateLogin()) {
            this.$router.push('/logins');
          }
        });
      } else if (command == 'user') {
        this.$store.dispatch('dailog/showDailog');
      } else if (command == 'usermanage') {
        this.$router.push('/mainsubusermanage');
      } else if (command == 'usercancel') {
        this.$router.push('/usercancel');
      }
    },
    ...mapActions('dailog', ['hideDailog', 'showDailog']),
    // 侧边栏折叠
    collapseChage () {
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    },
    // 全屏事件

    showDailog1 () {
      alert(12);
    },
  },
  mounted () {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
    common.getMyTaskCont({}).then(res => {
      if (res.data.status == 'success') {
        this.myTaskCount = res.data.data;
      } else {
        this.$message({
          message: res.data.message || '查询异常',
          type: 'error',
          offset: 180
        });
      }
    });
    common.getRiskCount({}).then(res => {
      if (res.data.status == 'success') {
        this.riskCount = res.data.data;
      } else {
        this.$message({
          message: res.data.message || '查询异常',
          type: 'error',
          offset: 180
        });
      }
    });

    // setInterval(() => {
    //   this.$axios.get('/api/getTestList');
    // }, 1000);
  }
};
</script>
<style scoped>
.tip-num {
  color: #ffd12d;
  cursor: pointer;
  padding-left: 4px;
}
.iconfont {
  padding-right: 5px;
  font-size: 16px;
}
.header {
  /* background-color: rgba(28, 78, 160, 1) !important; */
  background-color: #304986 !important;
  position: relative;
  /* box-sizing: border-box; */
  width: 100%;
  height: 71px;
  font-size: 22px;
  color: #fff;
}

.header-out {
  opacity: 0.5;
  text-align: center;
  transition: all 0.2s;
}
.header-out:hover {
  opacity: 1;
  cursor: pointer;
}

.w1200 {
  display: flex;
}

.header-left {
  width: 577px;
  height: 71px;
  position: relative;
}

.logo-img {
  float: left;
  /* width: 60px; */
  height: 100%;
  /* background: #fff; */
  display: flex;
  align-items: center;
}
.logo-img img {
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
}
.header .logo-zh {
  float: left;
  /* width: 123px; */
  height: 23px;
  font-size: 17px;
  font-family: inpin-culangti;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
  letter-spacing: 1px;
  margin-left: 4px;
  margin-top: 19px;
}

.header-left .logo-en {
  position: fixed;
  top: 41px;
  left: 212px;
  width: 163px;
  height: 9px;
  font-size: 9px;
  font-family: DINCondensed-Bold;
  font-weight: bold;
  color: rgba(169, 169, 169, 1);
  line-height: 11px;
  display: block;
  transform: scale(0.75, 0.75);
}
.header-right {
  width: 623px;
  height: 71px;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
}

.header-item {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  width: 150px;
  cursor: pointer;
}
.header-item:hover {
  font-size: 15px;
  color: #ffd12d;
}
.header-right > div {
  align-self: center;
}

.header-tool {
  width: 120px;
}
.header-tool >>> .el-submenu,
.header-tool >>> .el-submenu__title:hover {
  background-color: rgba(28, 78, 160, 1) !important;
}
.header-tool >>> .el-menu.el-menu--horizontal,
.header-tool >>> .el-submenu.is-active .el-submenu__title {
  border-color: rgba(28, 78, 160, 1) !important;
}
.header-tool-icon {
  background-color: rgba(28, 78, 160, 1);
  color: #fff;
  font-size: 12px;
}
.header-tool-icon i {
  color: #fff;
  margin-right: 7px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.header-user {
  width: 200px;
  height: 20px;
  display: flex;
  /* justify-items: center; */
  justify-content: space-between;
  align-items: flex-start;
}

.header-user-avator {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-right: 10px;
}

.header-user .header-user-name {
  height: 20px;
  display: block;
  align-self: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: white;
  line-height: 20px;
}

.header-user-avator .item {
  width: 20px;
  height: 20px;
  margin-top: -4px;
  margin-right: 40px;
}

.header-user-avator img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.header-out {
  width: 79px;
  height: 24px;
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(213, 213, 213, 1);
  border-radius: 2px;
  cursor: pointer;
}

.header-out-text {
  width: 24px;
  display: block;
  height: 17px;
  align-self: center;
  margin: 0 auto;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
</style>
