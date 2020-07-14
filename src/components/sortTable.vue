<template>
  <div class="table">
    <table border="1">
      <tr>
        <th v-for="(item, index) in title" :key="index">{{ item }}</th>
      </tr>
      <tr v-for="(item, index) in title" :key="index">
        <template v-for="(data, ind) in newArr">
          <td v-if="parseInt(ind / 7) == index" :key="data.id">{{ data.id }}--{{ data.day }}</td>
        </template>
      </tr>
    </table>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      arr: [
        { id: 1, day: "周一1" },
        { id: 2, day: "周一2" },
        { id: 3, day: "周一3" },
        { id: 4, day: "周一4" },
        { id: 5, day: "周一5" },
        { id: 6, day: "周二1" },
        { id: 7, day: "周二2" },
        { id: 8, day: "周二3" },
        { id: 9, day: "周二4" },
        { id: 10, day: "周二5" },
        { id: 11, day: "周三1" },
        { id: 12, day: "周三2" },
        { id: 13, day: "周三3" },
        { id: 14, day: "周三4" },
        { id: 15, day: "周三5" },
        { id: 16, day: "周四1" },
        { id: 17, day: "周四2" },
        { id: 18, day: "周四3" },
        { id: 19, day: "周四4" },
        { id: 20, day: "周四5" },
        { id: 21, day: "周五1" },
        { id: 22, day: "周五2" },
        { id: 23, day: "周五3" },
        { id: 24, day: "周五4" },
        { id: 25, day: "周五5" },
        { id: 26, day: "周六1" },
        { id: 27, day: "周六2" },
        { id: 28, day: "周六3" },
        { id: 29, day: "周六4" },
        { id: 30, day: "周六5" },
        { id: 31, day: "周日1" },
        { id: 32, day: "周日2" },
        { id: 33, day: "周日3" },
        { id: 34, day: "周日4" },
        { id: 35, day: "周日5" },
      ],
      newArr: [],
    };
  },
  beforeMount() {
    let newArr = [];
    let len = this.arr.length / 7;
    let index = 0;
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < len; j++) {
        newArr[j * 7 + i] = this.arr[index];
        index++;
      }
    }
    this.newArr = newArr;
  },
};
</script>

<style></style>
