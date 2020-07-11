<template>
  <div class="drag">
    <div class="grid" v-for="(item,index) in data" :key="index" @drop="drop" @dragover="allowDrop">
      <div class="content">
        <p>id:{{item.id}}</p>
        <p>name:{{item.name}}</p>
      </div>
      <div class="shade" :id="index" :draggable="true" @dragstart="drag(item)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      data: [
        { id: "1", name: "A" },
        { id: "2", name: "B" },
        { id: "3", name: "C" },
        { id: "4", name: "D" },
        { id: "5", name: "E" },
        { id: "6", name: "F" },
        { id: "7", name: "G" },
        { id: "8", name: "H" },
        { id: "9", name: "I" },
        { id: "10", name: "J" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" }
      ],
      dargData: {}
    };
  },
  methods: {
    allowDrop(e) {
      e.preventDefault();
    },
    drop(e) {
      e.preventDefault();
      let index = e.target.id;
      let data = this.data;
      data[index] = this.dargData;
      this.data = data;
      this.$forceUpdate();
    },
    drag(item) {
      this.dargData = item;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.drag {
  display: flex;
  flex-wrap: wrap;
  .grid {
    margin: 10px;
    width: 15%;
    height: 100px;
    border: 1px solid #444;
    position: relative;
    .content {
      overflow: hidden;
      background: pink;
      height: 100%;
    }
    .shade {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
