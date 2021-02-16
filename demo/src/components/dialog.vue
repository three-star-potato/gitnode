
<template>
  <el-dialog title="节点ＩＤ:" :visible.sync="dialogVisible" width="80%">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">登录用户</el-menu-item>
  <el-submenu index="2">
    <template slot="title">进程管理</template>
    <el-menu-item index="2-1">进程列表</el-menu-item>
    <el-menu-item index="2-2">进程创建删除</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">系统与应用服务</el-menu-item>
   <el-submenu index="４">
    <template slot="title">文件管理</template>
    <el-menu-item index="４-1">文件系统</el-menu-item>
    <el-menu-item index="４-2">文件列表</el-menu-item>
    <el-menu-item index="４-３">文件读写操作</el-menu-item>
  </el-submenu>
    <el-submenu index="５">
    <template slot="title">网络状态</template>
    <el-menu-item index="５-1">网卡处理数据</el-menu-item>
    <el-menu-item index="５-2">驱动程序状态</el-menu-item>
  </el-submenu>
  <el-menu-item index="６">注册表</el-menu-item>
</el-menu>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {},
};
</script>