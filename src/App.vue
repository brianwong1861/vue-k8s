<template>
<div id="app">
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/">集群概覧</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的應用</template>
    <el-menu-item index="2-1">正在運行</el-menu-item>
    <el-menu-item index="2-2">已停止</el-menu-item>
    </el-submenu>
  <el-menu-item index="3">系統拓撲</el-menu-item>
  <el-menu-item index="4">系統設定</el-menu-item>
</el-menu>

<el-row :gutter="20">
  
  <el-col :span="15" :offset="5"><div class="grid-content bg-purple"><router-view></router-view></div></el-col>
 
</el-row>

</div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
