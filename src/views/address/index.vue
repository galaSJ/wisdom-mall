<template>
  <div class="page-address">
    <!-- 顶部导航 -->
    <van-nav-bar
      title="收货地址"
      left-text=""
      @click-left="$router.go(-1)"
      left-arrow
    />
    <div class="content">
      <div class="address-card">
        <div class="card-inner">
            <div class="address-item" v-for="item in sortList" :key="item.address_id">
              <div class="card-top">
                <div class="name-phone">
                <span class="name">{{item.name}}</span>
                  <span class="phone">{{item.phone}}</span>
                </div>
              </div>

              <div class="card-addr">
                <div class="region">
                  <span>{{item.region.province}}</span>
                </div>
                <div class="region">
                  <span>{{item.region.city}}</span>
                </div>
                <div class="region">
                <span>{{item.region.region}}</span>
                </div>
                <div class="detail">
                  <span>{{item.detail}}</span>
                </div>
              </div>

              <div class="line"></div>

              <div class="card-bottom">
                <div class="left">
                  <van-checkbox
                    :value="item.address_id === defaultAddressId"
                    @click="changeDefault(item.address_id)"
                    checked-color="#ee0a24"
                    icon-size="18"
                  >默认</van-checkbox>
                </div>
                <div class="right">
                  <div class="edit">
                    <van-icon color="#666" name="edit" />
                    <span>编辑</span>
                  </div>
                  <div class="del" >
                    <van-icon name="delete-o" />
                    <span>删除</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>

    <!-- 底部固定按钮 -->
    <div class="bottom-wrap">
      <van-button type="info" round block class="add-btn">
        添加新地址
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'AddressPage',
  created () {
    this.getAddressList()
  },
  computed: {
    ...mapState('address', ['defaultAddressId']),
    ...mapGetters('address', ['sortList'])
  },
  methods: {
    // 获取收货地址列表
    getAddressList () {
      this.$store.dispatch('address/fetchAddressList')
    },
    // 修改默认收货地址
    changeDefault (addressId) {
      this.$store.dispatch('address/updateDefaultAddress', addressId)
    },
    // 获取默认收货地址id
    getDefaultAddress () {
      this.$store.dispatch('address/fetchDefaultAddrssId')
    }
  }

}
</script>

<style lang="less" scoped>
.page-address {
  min-height: 100vh;
  background: #e9e9e9;
  display: flex;
  flex-direction: column;

  .content {
    padding: 12px;
    padding-bottom: 88px; // bottom button 留空
    flex: 1;
    background: #e9e9e9;
  }

  .address-card {
    .card-inner {
      .address-item{
            background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    padding: 14px;
    margin-bottom: 12px;
    overflow: hidden;
      }
      .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name-phone {
          .name {
            color: #333;
            font-size: 15px;
            margin-right: 12px;
          }
          .phone {
            color: #333;
            font-size: 15px;
          }
        }
      }

      .card-addr {
        margin-top: 10px;
        color: #333;
        line-height: 1.5;
        font-size: 14px;
        display: flex;
        .region {
          margin-right: 5px;
        }
      }
      .line {
        margin: 10px 0;
        border-bottom: 0.5px solid #f3f3f3;
      }
      .card-bottom {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          align-items: center;
          span{
            font-size: 14px;
            margin-left: 5px;
          }
        }
        .right {
          display: flex;
          span {
            font-size: 14px;
            margin-left: 2px;
            color: #666;
          }
          .edit {
            margin-right: 20px;
          }
        }
      }
    }
  }

  .bottom-wrap {
    height: 60px;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none; // 让容器不拦截点击，按钮可点击
    background-color: #fff;
    border-top: 1px solid #eee;
    .add-btn {
      pointer-events: auto; // 恢复按钮点击
      width: calc(100% - 32px);
      border-radius: 26px;
      height: 44px;
      box-shadow: 0 6px 12px rgba(255, 74, 42, 0.18);
      background-image: linear-gradient(90deg, #ff5724, #ff7a50);
      border: none;
      color: #fff;
    }
  }
}
</style>
