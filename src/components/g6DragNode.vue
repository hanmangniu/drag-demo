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
            size: 40
          },
          {
            id: "node2", // String，该节点存在则必须，节点的唯一标识
            x: 300, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
            size: 40
          }
        ],
        // 边集
        edges: [
          {
            source: "node1", // String，必须，起始点 id
            target: "node2" // String，必须，目标点 id
          }
        ]
      },
      selectNode: ""
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
              shouldBegin: e => {
                let model = e.item._cfg.model;
                if (
                  model.x >= 780 ||
                  model.x <= 20 ||
                  model.y >= 480 ||
                  model.y <= 20
                ) {
                  model.x = model.x >= 780 ? 770 : model.x <= 20 ? 30 : model.x;
                  model.y = model.y >= 780 ? 770 : model.y <= 20 ? 30 : model.y;
                }
                this.selectNode = e.item._cfg.id;
                // let item = graph.findById(this.selectNode);
                // item.update(model);
                return true;
              },
              shouldUpdate: e => {
                console.log(e.type);
                let item = graph.findById(this.selectNode);
                let node = item._cfg.bboxCache;
                if (
                  node.x >= 760 ||
                  node.x <= 0 ||
                  node.y >= 460 ||
                  node.y <= 0
                ) {
                  return false;
                } else {
                  return true;
                }
              }
            }
          ]
        }
      });
      graph.data(this.data); // 读取 Step 2 中的数据源到图上
      graph.render(); // 渲染图
    }
  },
  mounted() {
    this.initG6();
  }
};
</script>

<style>
</style>