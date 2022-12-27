<template>
  <div class="content">
    <div class="document">
      <div class="corner"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 24px;
  .document {
    width: 200px;
    height: 282px;
    background-color: orange;
    position: relative;
    .corner {
      width: 0;
      height: 0;
      border-top: 25px solid #ffffff;
      border-right: 25px solid #ffffff;
      border-bottom: 25px solid red;
      border-left: 25px solid red;
      position: absolute;
      top: 0;
      right: 0;
      &::before {
        content: '';
        width: 20px;
        height: 60px;
        background-color: orange;
        border-radius: 0 50% 50% 0;
        position: absolute;
        top: -25px;
        left: -37px;
      }
      &::after {
        content: '';
        width: 60px;
        height: 20px;
        background-color: orange;
        border-radius: 50% 50% 0 0;
        position: absolute;
        bottom: -37px;
        left: -35px;
      }
    }
  }
}
</style>