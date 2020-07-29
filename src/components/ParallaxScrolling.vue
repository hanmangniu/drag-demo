<template>
  <div class="wrap">
    <div class="scroll">
      <div class="article section1"></div>
      <div class="article section2"></div>
      <div class="article section3"></div>
      <div class="article section4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  height: 532px;
  overflow: auto;
  border-bottom: 1px solid;
  .scroll {
    width: 2058px;
    .article {
      height: 532px;
      width: 1029px;
      display: inline-block;
      vertical-align: middle;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: 1029px 532px;
      background-position: center center;
    }
    .section1 {
      background-image: url("../assets/background1.png");
    }
    .section2 {
      background-image: url("../assets/background2.png");
    }
    .section3 {
      background-image: url("../assets/background3.png");
    }
    .section4 {
      background-image: url("../assets/background4.png");
    }
  }
}
</style>
