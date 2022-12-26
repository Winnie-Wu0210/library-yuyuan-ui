<script setup>
import {ref, watch} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
// 当前路由
const fullPath = router.currentRoute.value.fullPath === '/' ? ref('/home') : ref(router.currentRoute.value.fullPath)
watch(
  () => router.currentRoute.value.fullPath,
  (newVal) => {
    fullPath.value = newVal
  }
)
// 侧边栏列表
const list = [
  {
    id: 0,
    name: '首页',
    fullPath: '/home',
    path: 'home',
  },
  {
    id: 1,
    name: '图片循环',
    fullPath: '/swiper',
    path: 'swiper',
  },
  {
    id: 3,
    name: 'demo',
    fullPath: '/demo',
    path: '/demo',
  }
]
// 侧边栏高亮样式
const  activeStyle = {
  color: '#ffffff',
  backgroundColor: '#FFC1B4'
}
// 侧边栏点击事件
const changeActiveItem = (item) => {
  if(item.fullPath === fullPath.value || item.fullPath === '/demo') return
  fullPath.value = item.fullPath
  router.push(item.fullPath)
}
</script>
<template>
  <div class="side-bar">
    <div class="side-items">
      <div
          class="side-item flex-center"
          v-for="item in list"
          :key="item.id"
          :style="fullPath.includes(item.path) ? activeStyle : {}"
          @click="changeActiveItem(item)">
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>