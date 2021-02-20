<template>
  <el-container>
    <el-header>节点管理</el-header>
    <el-main>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="node_id" label="节点ＩＤ" width="180">
          </el-table-column>
          <el-table-column prop="node_ip" label="节点IP" width="180" sortable>
          </el-table-column>
          <el-table-column
            prop="node_type"
            label="节点类型"
            :filters="[
              { text: '回收节点', value: '回收节点' },
              { text: '采集节点', value: '采集节点' },
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            prop="is_online"
            label="链接状态"
            :formatter="onlineformatter"
            :filters="[
              { text: '在线', value: '1' },
              { text: '离线', value: '0' },
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            prop="heartbeat_time"
            label="最近心跳时间"
            :formatter="heartformatter"
          >
          </el-table-column>
          <el-table-column prop="collect_type" label="采集节点类型">
          </el-table-column>
          <el-table-column prop="ram" label="内存大小"> </el-table-column>
          <el-table-column prop="cpu" label="CPU"> </el-table-column>
          <el-table-column prop="disk" label="硬盘"> </el-table-column>
          <el-table-column label="查看详情" width="100">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="
                  changevisible();
                  transferid(scope.row);
                "
                >节点采集数据</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <component-dialog ref="dialog" :visible="isvisible"></component-dialog>
        <div class="block">
          <el-pagination
            background
            :page-size="20"
            layout="total,prev, pager, next"
            :total="total"
            @current-change="handlecurrentchange"
          >
          </el-pagination>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import componentDialog from "./dialog.vue";
import moment from "moment";

export default {
  components: {
    componentDialog,
  },
  data() {
    return {
      total: 20,
      tableData: [],
      currentpage: 1,
      isvisible: false,
    };
  },
  methods: {
    changevisible() {
      this.$refs.dialog.dialogVisible = true;
      // this.isvisible=true
    },
    transferid(data) {
      this.$refs.dialog.nodeid = data.node_id;
    },

    onlineformatter(row) {
      if (row.is_online === 0) {
        return "离线";
      } else if (row.is_online === 1) {
        return "在线";
      }
    },
    heartformatter(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date * 1000).format("YYYY-MM-DD HH:mm:ss");
    },
    // filterTag(value, row) {
    //   return row.tag === value;
    // },
    handlecurrentchange(val) {
      this.currentpage = val;
      this.getfirstableinfo();
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] == value; //注意为了方便比较，这里的等号只写了两个
    },
    getfirstableinfo() {
      let that = this;
      that
        .axios({
          url: "http://192.168.3.100:60001/api/sys-manager/node",
          params: {
            limit: 20,
            node_type: "",
            is_online: "",
            collect_type: "",
            node_ip: "",
            page: this.currentpage,
            requestid: Math.floor(Math.random() * 1000),
          },
        })
        .then((res) => {
          this.tableData = res.data.payload.data;
          this.total = res.data.payload.total;
        });
    },
  },
  created() {
    this.getfirstableinfo();
  },
};
</script>

<style scoped>
.el-header {
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: blue;
}
</style>