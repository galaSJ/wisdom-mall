<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.go(-1)" />

    <van-search v-model="searchKey" show-action placeholder="请输入搜索关键词" clearable>
      <template #action>
        <div @click="getSearch(searchKey)" >搜索</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history" v-if="searchHistory.length > 0">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clearSearchHistory()" name="delete-o" size="16" />
      </div>
      <div class="list" >
        <div class="list-item" @click="getSearch(item)" v-for="item in searchHistory" :key="item">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchHistory, setSearchHistory } from '@/utils/storage'
export default {
  name: 'SearchIndex',
  data () {
    return {
      searchKey: '', // 搜索关键字
      searchHistory: getSearchHistory()
    }
  },
  methods: {
    // 获取搜索历史列表
    getSearch (key) {
      // 查找key是否存在
      const index = this.searchHistory.indexOf(key)
      if (index !== -1) {
        // 有记录，删除原来的
        this.searchHistory.splice(index, 1)
      }
      // 更新到第一位
      this.searchHistory.unshift(key)
      // 本地存储
      setSearchHistory(this.searchHistory)
      // 路由跳转
      this.$router.push('/searchlist?search=' + key)
    },
    // 清除搜索历史列表
    clearSearchHistory () {
      this.searchHistory = []
      setSearchHistory([])
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
