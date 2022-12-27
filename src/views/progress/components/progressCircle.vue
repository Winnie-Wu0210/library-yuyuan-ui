<template>
  <div class="progress-circle">
    <div class="circle-back">
      <slot>{{props.percent}}%</slot>
    </div>
    <div class="circle-left" :style="rateLeftStyle"></div>
    <div class="circle-right" :style="rateRightStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  percent: {
    type: Number,
    default: 10,
  },
});

const rateRightStyle = computed(() => {
  return {
    transform: props.percent > 50 ? 'rotate(0 deg)' : `rotate(${props.percent * 3.6}deg)`,
    borderColor: props.percent > 50 ? "#409eff" : "#eeeeee",
  };
});

const rateLeftStyle = computed(() => {
  return {
    transform: props.percent > 50 ? `rotate(${(props.percent - 50) * 3.6}deg)` : 'rotate(0 deg)',
    borderColor: '#eeeeee',
  };
});

</script>

<style lang="scss" scoped>
.progress-circle {
  margin: 20px;
  display: inline-block;
  position: relative;
  .circle-back {
    width: 100px;
    height: 100px;
    border: 10px solid #409eff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circle-left {
    width: 100px;
    height: 100px;
    border: 10px solid #eeeeee;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0, 50px, 100px, 0);
  }
  .circle-right {
    width: 100px;
    height: 100px;
    border: 10px solid #eeeeee;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0, 100px, 100px, 50px);
  }
}
</style>