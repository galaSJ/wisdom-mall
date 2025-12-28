<template>
  <div class="count-box">
    <button class="minus" :class="{disable: value<=1}" @click="handleSub">-</button>
    <input class="inp" @change="handleChange" :value="value" type="text">
    <button class="add" @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    // 减
    handleSub () {
      if (this.value <= 1) return
      this.$emit('input', this.value - 1)
    },
    // 加
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    // 用户输入
    handleChange (e) {
      // 转类型
      const num = +e.target.value
      // 利用 + 运算进行隐式转换,非数字类型会NaN
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return false
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang='less'>
  .count-box{
    width: 110px;
    display: flex;
    .minus, .add{
      width: 30px;
      height: 30px;
      outline: none;
      border: none;
      font-weight: 700;
      background: #efefef;
    }
    .disable{
      background: #fbf8f8;
    }
    .inp{
      width: 40px;
      height: 30px;
      margin: 0 5px;
      border: none;
      background: #efefef;
      text-align: center;
    }
  }
</style>
