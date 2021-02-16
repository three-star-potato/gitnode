<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="节点ＩＤ" width="180">
      </el-table-column>
      <el-table-column prop="name" label="节点IP" width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="节点类型"
        :formatter="formatter"
        :filters="[
          { text: '回收节点', value: '2016-05-01' },
          { text: '采集节点', value: '2016-05-02' },

        ]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="address" label="链接状态" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="address" label="节点类型" :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="address"
        label="最近心跳时间"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="采集节点类型"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column prop="address" label="内存大小" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="address" label="CPU" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="address" label="硬盘" :formatter="formatter">
      </el-table-column>
      <el-table-column label="查看详情" width="100">
        <el-button type="text" @click="changevisable"
          >计算机节点采集数据</el-button
        >
      </el-table-column>
    </el-table>
    <component-dialog ref="dialog"></component-dialog>
    <div class="block">
      <el-pagination background layout="total,prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import componentDialog from "./dialog.vue";
export default {
  components: {
    componentDialog,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  methods: {
    changevisable() {
      this.$refs.dialog.dialogVisible = true;
    },
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>