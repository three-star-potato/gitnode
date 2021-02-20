
<template>
  <el-dialog :title="title()" v-if="dialogVisible" :visible.sync="dialogVisible" width="80%">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">登录用户</el-menu-item>
      <el-submenu index="2">
        <template slot="title">进程管理</template>
        <el-menu-item index="2-1">进程列表</el-menu-item>
        <el-menu-item index="2-2">进程列表创建删除</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">系统与应用服务</el-menu-item>
      <el-submenu index="4">
        <template slot="title">文件管理</template>
        <el-menu-item index="4-1">文件系统</el-menu-item>
        <el-menu-item index="4-2">文件列表</el-menu-item>
        <el-menu-item index="4-3">文件读写操作</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">网络状态</template>
        <el-menu-item index="5-1">网卡处理数据</el-menu-item>
        <el-menu-item index="5-2">驱动程序状态</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">注册表</el-menu-item>
    </el-menu>
    <userdetail :node_id="nodeid" v-if="flag==='1'"></userdetail>
    <sys-service :node_id="nodeid" v-if="flag==='3'"></sys-service>
    <processlist   :node_id="nodeid" v-if="flag==='2-1'"   ></processlist>
    <processmonitor :node_id="nodeid" v-if="flag==='2-2'"></processmonitor>
    <filesystem :node_id="nodeid" v-if="flag==='4-1'"> </filesystem>
    <filerecord :node_id="nodeid" v-if="flag==='4-2'"></filerecord>
    <fileaction :node_id="nodeid" v-if="flag==='4-3'"></fileaction>
    <cardinfo :node_id="nodeid" v-if="flag==='5-1'"></cardinfo>
    <network :node_id="nodeid" v-if="flag==='5-2'"></network>
    <registry :node_id="nodeid" v-if="flag==='6'"></registry>
  </el-dialog>
</template>

<script>
import userdetail from "./indialog/userdetail";
import SysService from './indialog/sysService.vue';
import processlist from './indialog/processlist'
import Processmonitor from './indialog/processmonitor.vue';
import Filesystem from './indialog/filesystem.vue';
import Filerecord from './indialog/filerecord.vue';
import Fileaction from './indialog/fileaction.vue';
import Cardinfo from './indialog/cardinfo.vue';
import Network from './indialog/network.vue';
import Registry from './indialog/registry.vue';


export default {
  data() {
    return {
      flag:'1',
      nodeid: " ",
     dialogVisible:false,
      title() {
        return "节点id:" + this.nodeid;
      },
    };
  },
  props:{visible:Boolean},
  components: {
    userdetail,
    SysService,
    processlist,
    Processmonitor,
    Filesystem,
    Filerecord,
    Fileaction,
    Cardinfo,
    Network,
    Registry,
    
  },
  methods: {
    handleSelect(key, keypath) {
      console.log(key, keypath);
      this.flag=key
    },
  },
};
</script>