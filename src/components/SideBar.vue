<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
// 侧边栏列表
const list = [
  {
    id: 0,
    name: '首页',
    path: '/home',
  },
  {
    id: 1,
    name: '图片循环',
    path: '/swiper',
  }
]
// 选中的侧边栏
const activeId = ref(0)
// 侧边栏高亮样式
const  activeStyle = {
  color: '#ffffff',
  backgroundColor: '#FFC1B4'
}
// 侧边栏点击事件
const changeActiveId = (item) => {
  activeId.value = item.id
  router.push(item.path)
}
</script>
<template>
  <div class="side-bar">
    <div class="side-items">
      <div class="side-item flex-center" v-for="item in list" :key="item.id" :style="activeId === item.id ?activeStyle:'' " @click="changeActiveId(item)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.side-bar {
  width: 220px;
  height: 100%;
  border-right: 1px solid #F7BDC5;
  overflow: auto;
  .side-items {
    padding: 10px 0;
    .side-item {
      width: 100%;
      height: 50px;
      color: #c3c3c3;
      cursor: pointer;
    }
  }
}
</style>