<template>
  <div :class="`header ${navBarFixed == true ? 'nav-bar-wrap' : ''}`">
    <div class="header-main">
      <div class="logo-img" @click="logoClick">
        <img src="@/assets/images/logo.png" />
        <div class="header-important">
          <div class="company-name">ASEARCH</div>
          <div class="company-name-small">ENTERNAL SPIRIT</div>
        </div>
      </div>
      <div class="menu-index">
        <el-menu
          menu-trigger="click"
          text-color="#333"
          style="height: 65px; border: 0"
          mode="horizontal"
        >
          <el-menu-item
            index="1"
            class="header-title"
            @click="handleItemChecked(1), scroll('a')"
          >
            ABOUT US
          </el-menu-item>
          <el-menu-item index="2" class="header-title">NEWS </el-menu-item>
          <el-menu-item
            index="3"
            class="header-title"
            @click="handleItemChecked(2), scroll('a')"
          >
            <a href="#developers">DEVELOPERS</a>
          </el-menu-item>
          <el-menu-item index="4" class="header-title">JOBS </el-menu-item>
          <el-menu-item
            index="5"
            class="header-title"
            @click="handleItemChecked(3), scroll('a')"
          >
            CONNECT
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navBarFixed: false
    }
  },
  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    logoClick () {
      this.$router.push('/')
    },
    handleItemChecked (id) {
      this.$bus.$emit('handleItemChecked', id)
    },
    // scroll (id) {
    //   document.querySelector(`#${id}`).scrollIntoView(true)
    // },
    scroll (target) {
      const scrollPart = document.querySelector(`#${target}`)
      // 导航安全区 270
      const top = scrollPart.getBoundingClientRect().top - 270
      const pageY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const endPosition = top + pageY
      const startTime = +new Date()
      const duration = 500 // ms
      function offset () {
        const time = +new Date() - startTime
        window.scrollTo(0, pageY + top * (time / duration))
        offset.timer = requestAnimationFrame(offset)
        if (time >= duration) {
          window.scrollTo(0, endPosition)
          cancelAnimationFrame(offset.timer)
        }
      }
      requestAnimationFrame(offset)
    },
    watchScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    }
  }
}
</script>

<style lang="less">
.header {
  z-index: 50;
  height: 140px;
  .header-main {
    display: flex;
    box-sizing: border-box;
    padding: 10px 60px 0 60px;
    width: 1600px;
    margin: 0 auto;
  }
  .logo-img {
    display: flex;
    margin-top: 12px;
    cursor: pointer;
    img {
      height: 83px;
      width: 65px;
    }
  }
  .header-important {
    width: 150px;
    .company-name {
      font-size: 24px;
      font-weight: 500;
      margin-left: 16px;
    }
    .company-name-small {
      font-size: 13px;
      margin: 6px 0 0 -5px;
      -webkit-transform: scale(0.7);
    }
  }
  .footer-font {
    font-size: 18px;
  }
  .menu-index {
    margin-left: 95px;
    width: 1350px;
    justify-content: space-between;
    .header-title {
      font-size: 18px;
      font-weight: 500;
      margin-top: 30px;
      padding: 0px 75px 0 75px;
    }
    .el-menu {
      text-align: left;
      border: none;
      background-color: transparent;

      .el-menu-item {
        height: 100px;
        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  // @media screen and (max-device-width: 415px) {
  //   .logo-img {
  //     cursor: pointer;
  //   }
  //   .footer-font {
  //     font-size: 0.875em;
  //   }
  // }
  .main {
    margin: auto;
    float: left;
    width: 100%;
    border: 0;
  }

  #header-img {
    width: 50px;
    height: 50px;
    float: left;
    margin: auto;
  }
  .header-important {
    float: left;
    margin: -25px 0 0 6px;
    align-self: center;
  }
}
.nav-bar-wrap {
  // background-color: #ffffff;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(204, 198, 204, 1);
  -moz-box-shadow: 0px 4px 5px 0px rgba(204, 198, 204, 1);
  box-shadow: 0px 4px 5px 0px rgba(204, 198, 204, 1);
}
</style>
