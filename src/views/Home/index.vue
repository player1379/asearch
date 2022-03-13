<template>
  <div class="home-container">
    <Search />
    <div class="a-d-c" id="a">
      <template v-if="handleItemChecked === 1">
        <div class="a-d-c-i black-active">
          <img class="img-icon img-active" src="@/assets/images/1_3.png" />
          <i class="el-icon-plus item-active"></i>
          <h2 class="item-active">About Us</h2>
          <div class="item-content item-active">
            Read articles and whitepaper
          </div>
        </div>
      </template>
      <template v-else>
        <div class="a-d-c-i" @click="handleCheck(1)">
          <img class="img-icon" src="@/assets/images/1_3.png" />
          <i class="el-icon-plus"></i>
          <h2>About Us</h2>
          <div class="item-content">Read articles and whitepaper</div>
        </div>
      </template>

      <template v-if="handleItemChecked === 2">
        <div class="a-d-c-i black-active a-d-c-i-active">
          <img class="img-icon img-active" src="@/assets/images/1_2.png" />
          <i class="el-icon-plus item-active"></i>
          <h2 class="item-active">Developer Portal</h2>
          <div class="item-content item-active">
            Help us to enjoy a “first mover” advantage <br />
            by contributing early to the protocol.
          </div>
        </div>
      </template>
      <template v-else>
        <div class="a-d-c-i" @click="handleCheck(2)">
          <img class="img-icon" src="@/assets/images/1_2.png" />
          <i class="el-icon-plus"></i>
          <h2>Developer Portal</h2>
          <div class="item-content">
            Help us to enjoy a “first mover” advantage <br />
            by contributing early to the protocol.
          </div>
        </div>
      </template>

      <template v-if="handleItemChecked === 3">
        <div class="a-d-c-i black-active">
          <img class="img-icon img-active" src="@/assets/images/1_1.png" />
          <i class="el-icon-plus item-active"></i>
          <h2 class="item-active">Contact Us</h2>
          <div class="item-content item-active">
            Your individual transactions <br />
            are kept secure, always.
          </div>
        </div>
      </template>
      <template v-else>
        <div class="a-d-c-i" @click="handleCheck(3)">
          <img class="img-icon" src="@/assets/images/1_1.png" />
          <i class="el-icon-plus"></i>
          <h2>Contact Us</h2>
          <div class="item-content">
            Your individual transactions <br />
            are kept secure, always.
          </div>
        </div>
      </template>
    </div>

    <div id="b" class="developer-container">
      <div class="developer-item-center">
        <h2 class="developer-title">User-friendly</h2>
        <div class="developer-summary">Search with no ads</div>
      </div>
      <div class="developer-item-censorship">
        <h2 class="developer-title">Censorship resistance</h2>
        <div class="developer-summary">
          No entity can tamper with search results,<br />
          you will get all you want
        </div>
      </div>
      <div class="developer-item-customization">
        <h2 class="developer-title">Customization</h2>
        <div class="developer-summary">
          Customize your search to balance your <br />
          needs and costs
        </div>
      </div>
      <div class="developer-item-free">
        <h2 class="developer-title">Free access</h2>
        <div class="developer-summary">
          Anyone can work for the protocol to earn <br />
          the price
        </div>
      </div>
      <div class="developer-item-governance">
        <h2 class="developer-title">Governance</h2>
        <div class="developer-summary">
          Respect and tolerance to different voices, <br />
          come and build the protocol together with <br />
          our society
        </div>
      </div>
    </div>

    <div id="c" class="contact-container">
      <h1>CONTACT US</h1>
      <img class="logo-tw" src="@/assets/images/logo_tw.png" alt="" />
      <address>
        <p>@Asearch_io</p>
      </address>
      <p>Contact the team and join the community</p>
      <div class="future">FUTURE</div>
      <img class="footer-img" src="@/assets/images/footer.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      handleItemChecked: 1
    }
  },
  components: {},
  mounted () {
    /**
     * @param id 需要被 active 的内容
     */
    this.$bus.$on('handleItemChecked', id => {
      this.handleCheck(id)
    })
    // 子组件this.$bus.$emit('handleItemChecked',1);
  },
  methods: {
    handleCheck (id) {
      this.handleItemChecked = id
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  width: 100%;
  margin: 0 auto;
  .a-d-c {
    // width: 1600px;
    height: 450px;
    display: flex;
    flex: 1;
    .a-d-c-i {
      width: 100%;
      position: relative;
      padding-left: 60px;
      background-color: #ffffff;

      .img-icon {
        margin: 60px 0 0 0;
        height: 50px;
      }
      .el-icon-plus {
        font-size: 35px;
        position: absolute;
        left: 430px;
        top: 80px;
      }
      h2 {
        font-size: 30px;
        margin: 40px 0 70px 0;
        color: #444f8c;
      }
      .item-content {
        font-size: 18px;
        color: #9f9f9f;
      }
      //供选中时使用
      .item-active {
        color: #ffffff;
      }
    }
    .a-d-c-i-active {
      &::after {
        height: 40px;
        width: 2px;
        content: "";
        background-color: #cecece;
      }
    }
    .img-active {
      // 只切了彩色图 过滤处理颜色成黑白
      filter: grayscale(100%) brightness(300%);
    }

    //供选中时使用
    .black-active {
      background-color: #7786eb;
    }
  }

  .developer-container {
    //两部分页面背景重叠处理
    z-index: 10;
    margin-top: 250px;
    // padding-right: 100px;
    width: 100%;
    height: 1225px;
    background: url("../../assets/images/g_3_1x2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    .developer-title {
      font-size: 30px;
      font-weight: 500;
      color: #c52393;
      margin-bottom: 15px;
    }
    .developer-summary {
      font-size: 16px;
      color: #a1a0e3;
    }
    .developer-item-center {
      position: absolute;
      top: 40%;
      left: 45%;
      .developer-title {
        color: #253f97;
        font-size: 42px;
        font-weight: 800;
      }
      .developer-summary {
        font-size: 30px;
        color: #253f97;
      }
    }
    .developer-item-censorship {
      position: absolute;
      top: 30%;
      left: 13%;
    }
    .developer-item-customization {
      position: absolute;
      top: 30%;
      left: 80%;
    }
    .developer-item-governance {
      position: absolute;
      top: 70%;
      left: 80%;
    }
    .developer-item-free {
      position: absolute;
      top: 70%;
      left: 13%;
    }
  }
  .contact-container {
    //两部分页面背景重叠处理
    box-sizing: border-box;
    z-index: 9;
    margin-top: -100px;
    width: 100%;
    height: 1185px;
    background: url("../../assets/images/g_2.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center ;
    color: #444f8b;
    h1 {
      padding: 180px 0 60px 0;
      font-size: 42px;
    }
    .logo-tw {
      height: 120px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .future {
      margin-top: 280px;
      font-size: 125px;
      font-weight: 550;
      margin-left: 150px;
      letter-spacing: 90px;
      color: rgba(37, 63, 151, 0.5);
    }
    .footer-img {
      z-index: 8;
      width: 100%;
      margin-top: -330px;
    }
  }
}
</style>
