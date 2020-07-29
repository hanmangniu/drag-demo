<template>
  <div id="app">
    <!-- <h1>拖动复制</h1> -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="box">
      <div class="menu">
        <h3>demo集合</h3>
        <div class="link" @click="component = 'HelloWorld'" :style="component == 'HelloWorld' ? 'background:pink' : ''">拖拽复制数据</div>
        <div class="link" @click="component = 'SortTable'" :style="component == 'SortTable' ? 'background:pink' : ''">遍历排序并渲染成表格</div>
        <div class="link" @click="component = 'G6DragNode'" :style="component == 'G6DragNode' ? 'background:pink' : ''">G6节点不能移出视图</div>
        <div class="link" @click="component = 'ParallaxScrolling'" :style="component == 'ParallaxScrolling' ? 'background:pink' : ''">视差滚动效果</div>
      </div>
      <div class="content">
        <template v-if="component == 'HelloWorld'">
          <HelloWorld />
        </template>
        <template v-else-if="component == 'SortTable'">
          <SortTable />
        </template>
        <template v-else-if="component == 'G6DragNode'">
          <G6DragNode />
        </template>
        <template v-else-if="component == 'ParallaxScrolling'">
          <ParallaxScrolling />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SortTable from "./components/sortTable.vue";
import G6DragNode from "./components/g6DragNode.vue";
import ParallaxScrolling from "./components/ParallaxScrolling.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SortTable,
    G6DragNode,
    ParallaxScrolling,
  },
  data() {
    return {
      component: "ParallaxScrolling",
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .box {
    display: grid;
    grid-template-columns: 200px calc(100vw - 200px);
    grid-template-rows: calc(100vh - 210px);
    .menu {
      border: 1px solid;
      .link {
        cursor: pointer;
        padding: 4px 0;
        &:hover {
          background: pink;
        }
      }
    }
    .content {
      border: 1px solid;
    }
  }
}
</style>
