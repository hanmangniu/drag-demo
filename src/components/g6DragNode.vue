<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {
      data: {
        // 点集
        nodes: [
          {
            id: "node1", // String，该节点存在则必须，节点的唯一标识
            x: 100, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
            size: 40,
          },
          {
            id: "node2", // String，该节点存在则必须，节点的唯一标识
            x: 300, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
            size: 40,
          },
        ],
        // 边集
        edges: [
          {
            source: "node1", // String，必须，起始点 id
            target: "node2", // String，必须，目标点 id
          },
        ],
      },
      selectNode: "",
      canDrag: false,
    };
  },
  methods: {
    initG6() {
      const graph = new G6.Graph({
        container: "mountNode", // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: 800, // Number，必须，图的宽度
        height: 500, // Number，必须，图的高度
        modes: {
          default: [
            {
              type: "drag-node",
              shouldBegin: (e) => {
                this.selectNode = e.item._cfg.id;
                this.canDrag = true;
                return true;
              },
              shouldUpdate: () => {
                let item = graph.findById(this.selectNode);
                let node = item.getBBox();
                if (this.canDrag) {
                  //x判断范围  0 -> graph.width - node.width/2
                  //y判断范围  0 -> gragh.width - node.heigh/2
                  if (node.x >= 780 || node.x <= 0 || node.y >= 480 || node.y <= 0) {
                    let cfg = {
                      //这里 779 21 479 是保证最后节点位置一直处于视图之中 所以减了1px
                      x: node.x >= 780 ? 779 : node.x <= 20 ? 21 : node.x + 20,
                      y: node.y >= 480 ? 479 : node.y <= 20 ? 21 : node.y + 20,
                    };
                    item.updatePosition(cfg);
                    this.canDrag = false;
                    return false;
                  } else {
                    return true;
                  }
                } else {
                  return false;
                }
              },
            },
          ],
        },
      });
      graph.data(this.data); // 读取 Step 2 中的数据源到图上
      graph.render(); // 渲染图
    },
  },
  mounted() {
    this.initG6();
  },
};
</script>

<style lang="scss" scoped>
::v-deep canvas {
  border: 1px solid;
}
</style>
