<template>
<div>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="name" label="名称" fit> </el-table-column>
     <el-table-column prop="pid" label="PID" fit> </el-table-column>
    <el-table-column prop="localAddress" label="本地地址" fit>
    </el-table-column>
     <el-table-column prop="originAddress" label="远程地址" fit>
    </el-table-column>
     <el-table-column prop="type" label="协议类型" fit>
    </el-table-column>
     <el-table-column prop="status" label="状态" fit>
    </el-table-column>
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
          url: "http://192.168.3.100:60001/api/node/detail/network",
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