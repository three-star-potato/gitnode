<template>
<div>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="partition" label="分区" width="180"> </el-table-column>
     <el-table-column prop="fileSystem" label="文件系统" width="180"> </el-table-column>
    <el-table-column
      prop="time"
      label="采集时间"
      width="180"
      :formatter="heartformatter"
    >
    </el-table-column>
  </el-table>
  <div class="block">
          <el-pagination
            background
           :page-size='20'
            layout="total,prev, pager, next"
            :total="total"
            @current-change='handlecurrentchange'
          >
          </el-pagination>
        </div>
        </div>
</template>


<script>
import moment from "moment";
export default {
  data() {
    return {
      data: [],
       total:20,
       currentpage:1,
    };
  },
  props: ["node_id"],
  methods: {
    getdetail() {
      console.log(this.node_id);
      let that = this;
      that
        .axios({
          url: "http://192.168.3.100:60001/api/node/detail/file",
          params: {
            limit: 20,
            node_id: this.node_id,
            page: this.currentpage,
            requestId: Math.floor(Math.random() * 1000),
          },
        })
        .then((res) => {
          this.data = res.data.payload.data;
          this.total=res.data.payload.total
        });
    },
    heartformatter(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date * 1000).format("YYYY-MM-DD HH:mm:ss");
    },
        handlecurrentchange(val){
      this.currentpage=val
      this.getdetail()

    },
  },
  created() {
    this.getdetail();
  },
};
</script>