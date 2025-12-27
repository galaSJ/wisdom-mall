<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearchKey"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" :class="{active: active ===''}" @click="getProductData()">综合</div>
      <div class="sort-item" :class="{active: active ==='sales'}" @click="getProductData('sales')">销量</div>
      <div class="sort-item" :class="{active: active ==='price'}" @click="getProductData('price')">价格</div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProduct } from '@/api/product'
export default {
  name: 'SearchIndex',
  data () {
    return {
      // page: 1, // 页码
      proList: [], // 商品列表
      // 请求元对象
      paramsObj: {
        categoryId: this.$route.query.categoryId || '',
        goodsName: this.$route.query.search
      },
      sortPriceFlag: false, // 商品价格排序方式
      active: '' // 标题激活状态

    }
  },
  computed: {
    querySearchKey () {
      return this.$route.query.search
    }
  },
  created () {
    this.getProductData()
  },
  methods: {
    // 请求数据
    async getProductData (sortType) {
      // 排序
      this.active = sortType || ''
      // 销量排
      const obj = { ...this.paramsObj, sortType: sortType }
      if (sortType === 'price') {
        obj.sortPrice = this.sortPriceFlag ? '1' : '0'
        this.sortPriceFlag = !this.sortPriceFlag
      }
      const { data: { list } } = await getProduct(obj)
      this.proList = list.data
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
      &.active{
            color: #e49a3d;
        }
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
