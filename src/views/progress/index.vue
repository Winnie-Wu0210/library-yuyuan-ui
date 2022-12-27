<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="条形进度条" name="first">
      <progress-bar>都会开发计划署的镂空结构浑善达克就会感慨</progress-bar>
    </el-tab-pane>
    <el-tab-pane label="环形进度条" name="second">
      <div style="display: flex">
        <progress-circle :percent="0">
          <div>自定义</div>
        </progress-circle>
        <progress-circle :percent="10" />
        <progress-circle :percent="20" />
        <progress-circle :percent="30" />
        <progress-circle :percent="40" />
        <progress-circle :percent="50" />
      </div>
      <div>
        <progress-circle :percent="100" />
        <progress-circle :percent="90" />
        <progress-circle :percent="80" />
        <progress-circle :percent="70" />
        <progress-circle :percent="60" />
        <progress-circle :percent="50" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from "./components/progressBar.vue";
import ProgressCircle from "./components/progressCircle.vue";

const activeName = ref("first");
const handleClick = (tab, event) => {
  activeName.value = tab.name;
};

</script>