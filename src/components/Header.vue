<script setup>
import {ref} from 'vue'
const companyName = ref('YU YUAN')

const jumpMemberInfo = () => {
  console.log('jumpMemberInfo')
}
</script>
<template>
  <div class="common-header">
    <div class="company-left">
      <div class="company-logo"></div>
    </div>
    <div class="company-name flex-center">{{companyName}}</div>
    <div class="company-right">
      <img class="avatar" src="../assets/images/avatar.jpg" alt="" @click="jumpMemberInfo">
      <div class="option"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common-header {
  width: 100%;
  height: 55px;
  background-color: #D6BCC8;
  position: relative;
  .company-name {
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-size: 38px;
  }
  .company-right {
    height: 100%;
    padding-right: 20px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>