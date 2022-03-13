<template>
  <div class="search-container">
    <img class="bg-img" src="@/assets/images/search-bg.png" alt="" />
    <h1>ENTERNAL SPIRTUAL SOCIETY</h1>
    <div class="search-main">
      <el-autocomplete
        class="inline-input"
        v-model="keyword"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        @input="handleInput"
      >
        <i slot="suffix" class="el-icon-search"></i>
      </el-autocomplete>
    </div>
    <div class="view-button">
      <el-button type="primary" round>VIEW</el-button>
    </div>
  </div>
</template>

<script>
import Store from '@/plugins/store'
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      history: [],
      timer: null
    }
  },
  mounted () {
    // $bus清除keyword
    this.$bus.$on('clearKeyword', () => {
      this.keyword = ''
    })
    // 子组件this.$bus.$emit('clearKeyword');
  },
  created () {
    this.history = Store.local.get('_asearch_key')
      ? JSON.parse(Store.local.get('_asearch_key'))
      : ''
  },
  watch: {
    keyword: {
      handler (value) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.getData()
        }, 2000)
      }
    }
  },
  methods: {
    getData () {
      console.log('22', this.keyword)
      //  {data,code} = await 200 后再存 防止节流存无效数据
      this.addSearchHistory()
    },
    handleInput () {
      this.addSearchHistory()
    },
    querySearch (queryString, cb) {
      var history = this.history
      var results = queryString
        ? history.filter(this.createFilter(queryString))
        : history
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    addSearchHistory () {
      this.history = [...this.history, { value: this.keyword }]

      Store.local.set('_asearch_key', JSON.stringify(this.history))
    }
  }
}
</script>
<style lang="less" scoped>
// @search_w: 700px;
// @search_h: 82px;
// @search_b_r: 40px;

.search-container {
  width: 100%;
  height: 835px;
  margin: 0 auto;
  box-sizing: border-box;

  h1 {
    text-align: center;
    margin-top: 120px;
    color: rgb(39, 68, 129);
    font-size: 42px;
  }

  .bg-img {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    display: block;
    margin: 0 auto;
    /* background-size: cover */
    // width: 100%;
    // height: 1000px;
  }

  .search-main {
    width: 100%;
    text-align: center;
    margin: 95px 0;

    .el-autocomplete,
    /deep/.el-input__inner {
      height: 82px;
      width: 700px;
      border-radius: 40px;
      font-size: 28px;
      background-color: #f2f2f2;
    }
    .el-autocomplete {
      -webkit-box-shadow: 0px 4px 5px 0px rgba(204, 198, 204, 1);
      -moz-box-shadow: 0px 4px 5px 0px rgba(204, 198, 204, 1);
      box-shadow: 0px 4px 5px 0px rgba(204, 198, 204, 1);
    }
    .el-icon-search {
      font-size: 40px;
      color: #2e5edc;
      font-weight: 1000;
      line-height: 82px;
      margin-left: -100px;
    }
  }

  .view-button {
    width: 100%;
    text-align: center;
    .el-button {
      background-color: #7587eb;
      width: 175px;
      height: 58px;
      font-size: 35px;
      border-radius: 28px;
      &:hover {
        background-color: #8998eb;
      }
    }
  }
}
</style>
