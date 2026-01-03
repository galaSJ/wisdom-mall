
// 登录判断
export default {
  methods: {
    loginConfirm () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '亲! 还没登录, 请先登录',
          confirmButtonText: '登录',
          cancelButtonText: '先逛逛'
        })
          .then((result) => {
            // 跳转登录
            // 登录成功后，需要返回到原来的路径，跳转时传递参数
            // 使用replace替换push
            // push会记录每一次路由记录，按返回时会回到登录页，体验感不好，优化一下
            this.$router.replace({
              path: '/login',
              query: {
                // 获取全路径
                backUrl: this.$route.fullPath
              }
            })
          }).catch(() => {

          })
        return true
      }
      return false
    }
  }
}
