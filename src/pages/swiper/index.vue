<script setup>
import {ref, computed, onMounted} from 'vue'
onMounted(() => {
  swiperStart()
})
// 图片列表
const imgList = [
  {
    id: 0,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片1'
  },
  {
    id: 1,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片2'
  },
  {
    id: 2,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片3'
  },
  {
    id: 3,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片4'
  },
  {
    id: 4,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片5'
  },
  {
    id: 5,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片6'
  },
  {
    id: 6,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片7'
  },
  {
    id: 7,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片8'
  },
  {
    id: 8,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片9'
  },
  {
    id: 9,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片10'
  },
  {
    id: 10,
    src: 'https://qitianlie-1.oss-cn-hangzhou.aliyuncs.com/weike/new/swiper-2.png',
    title: '图片11'
  }
]
// 当前图片
const swiperCurrent = ref(1)
// 当前图片样式
const swiperCurrentStyle = {
  transform: 'scale(1.2)',
}
// 返回动画
const swiperBack = (current) => {
  if(current === swiperCurrent.value) {
    return 'move-add-in'
  }else if(current === swiperCurrent.value - 1) {
    return 'move-add-out'
  }else if(current === swiperCurrent.value + 1) {
    return 'move-add-translation'
  // }else {
  //   return 'move-add-translation'
  }
}

// 根据当前图片计算前后共5张图片
const swiperList = computed(() => {
  const list = []
  const current = swiperCurrent.value
  const len = imgList.length
  for (let i = 0; i < 5; i++) {
    const index = current + i - 2
    if (index < 0) {
      list.push(imgList[len + index])
    } else if (index >= len) {
      list.push(imgList[index - len])
    } else {
      list.push(imgList[index])
    }
  }
  return list
})
// 点击选中
const swiperClick = (item) => {
  swiperCurrent.value = item.id
}
// 自动下一张
const swiperAutoPlay = () => {
  const len = imgList.length
  swiperCurrent.value = swiperCurrent.value + 1 >= len ? 0 : swiperCurrent.value + 1
}
// 播放定时器
let swiperTimer = null
const swiperStart = () => {
  swiperTimer = setInterval(swiperAutoPlay, 5000)
}
</script>
<template>
  <div class="content">
    <div class="swiper">
      <div class="swiper-item"
         v-for="item in swiperList"
         :key="item.id"
         :style="item.id === swiperCurrent ? swiperCurrentStyle : {}"
         :class="swiperBack(item.id)"
         @click="swiperClick(item)"
      >
        <img :src="item.src" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 24px;
  .swiper {
    width: 100%;
    height: 550px;
    background-color: #ececec;
    display: flex;
    align-items: center;
    // 手指向左滑动，当先图片缩小并向左移动，下一张图片放大并向左移动
    .move-add-in {
      animation: move-add-in 1s;
    }
    .move-add-out {
      animation: move-add-out 1s;
    }
    .move-add-translation {
      animation: move-add-translation 1s;
    }
    // 手指向右滑动，当先图片缩小并向右移动，上一张图片放大并向右移动
    .swiper-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 200px;
        height: 250px;
        margin: 24px;
      }
    }
  }
}
// 当前图片左滑进入
@keyframes move-add-in {
  0% {
    transform: translateX(100%) scale(1);
  }
  100% {
    transform: translateX(0) scale(1.2);
  }
}
// 上一张图片左滑退出
@keyframes move-add-out {
  0% {
    transform: translateX(100%) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
// 其他图片左滑平移
@keyframes move-add-translation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>