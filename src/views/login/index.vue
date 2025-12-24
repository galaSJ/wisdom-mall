<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow  @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="11"
            placeholder="请输入手机号码"
            type="text"
            v-model="mobile"
          />
        </div>
        <div class="form-item">
          <input
            class="inp"
            maxlength="5"
            placeholder="请输入图形验证码"
            type="text"
            v-model="picCode"
          />
          <img v-if="picUrl" :src="picUrl" alt="" @click="getPicCode()" />
        </div>
        <div class="form-item">
          <input class="inp" v-model="msgCode" placeholder="请输入短信验证码" type="text" />
          <button @click="getCode()">{{totalSecond === second ? '获取验证码' : second + ''}}</button>
        </div>
      </div>

      <div class="login-btn" @click="login()">登录</div>
    </div>
  </div>
</template>
<script>
import { codeLogin, getMsgCode, getPicCode } from '@/api/login'
export default {
  name: 'loginPage',
  data () {
    return {
      picUrl: '',
      picKey: '',
      totalSecond: 60, // 倒计时总秒数
      second: 60, // 倒计时秒数
      timer: null, // 定时器
      mobile: '', // 手机号码
      picCode: '', // 图形验证码
      msgCode: '' // 短信验证码

    }
  },
  created () {
    this.getPicCode()
    console.log('17702020303')
  },
  methods: {
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.picKey = key
      this.picUrl = base64
      console.log(11)
    },
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        // vant组件轻提示
        this.$toast('请输入正确的手机号码')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的验证码')
        return false
      }
      return true
    },
    async getCode () {
      // 校验短信验证码和图形验证码
      if (!this.validFn()) return
      // 请求短信验证码
      const res = await getMsgCode(this.picCode, this.picKey, this.mobile)
      if (res.status !== 200) {
        this.$toast('短信验证码获取失败')
        return false
      }
      this.$toast('验证码已发送')

      // 总秒数 === 秒数 && 定时器为空， 才开启定时器
      if (this.totalSecond === this.second && !this.timer) {
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            // 倒计时结束，重置定时器
            clearInterval(this.timer)
            this.timer = null
            // 重置秒数
            this.second = this.totalSecond = 60
          }
        }, 1000)
      }
    },
    async login () {
      // 基础判断
      if (!this.validFn()) return false
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确验证码')
        return false
      }
      try {
        await codeLogin(this.msgCode, this.mobile)
        this.$router.push({ path: '/' })
        this.$toast('登录成功')
      } catch (error) {
        this.$toast.fail('登录失败, 请重试')
      }
    }
  },
  destroyed () {
    // 离开页面清除定时器
    clearInterval(this.timer)
  }

}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg, #ecb53c, #ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
