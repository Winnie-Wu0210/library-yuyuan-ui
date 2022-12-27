<script setup>
import {ref, computed, onMounted, onBeforeUnmount} from 'vue'
onMounted(() => {
  swiperStart()
})
onBeforeUnmount(() => {
  clearInterval(swiperTimer)
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
const swiperCurrent = ref(0)
// 当前图片样式
const swiperCurrentStyle = {
  transform: 'scale(1.2)',
}
// 返回动画
const swiperBack = (current) => {
  let point1 = swiperCurrent.value < 2 ? swiperCurrent.value - 2 + imgList.length : swiperCurrent.value - 2;
  let point2 = swiperCurrent.value < 1 ? swiperCurrent.value - 1 + imgList.length : swiperCurrent.value - 1;
  let point3 = swiperCurrent.value;
  let point4 = swiperCurrent.value > imgList.length - 2 ? swiperCurrent.value + 1 - imgList.length : swiperCurrent.value + 1;
  if(current === point3) {
    return 'move-left-in'
  }else if(current === point2) {
    return 'move-left-out'
  }else if(current === point4) {
    return 'move-left-translation'
  }else if(current === point1) {
    return 'move-left-translation'
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
  clearInterval(swiperTimer)
  swiperStart()
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
    .move-left-in {
      animation: move-left-in 1s;
    }
    .move-left-out {
      animation: move-left-out 1s;
    }
    .move-left-translation {
      animation: move-left-translation 1s;
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
@keyframes move-left-in {
  0% {
    transform: translateX(100%) scale(1);
  }
  100% {
    transform: translateX(0) scale(1.2);
  }
}
// 上一张图片左滑退出
@keyframes move-left-out {
  0% {
    transform: translateX(100%) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
// 其他图片左滑平移
@keyframes move-left-translation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>