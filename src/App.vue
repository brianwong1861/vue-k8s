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
  <el-menu-item index="3"><router-link to="/topology">系统拓撲</router-link></el-menu-item>
  <el-menu-item index="4">系統設定</el-menu-item>
</el-menu>
<!-- <el-row :gutter="20"> -->
  <!-- <el-col :span="12" :offset="6"><div class="grid-content bg-purple child-view"><router-view></router-view></div></el-col> -->
  <el-col>
    <div class="grid-content bg-purple child-view">
    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
    <router-view v-show="show" class="animated"></router-view>
    </transition>    
    </div>
  </el-col>
<!-- </el-row> -->
</div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      show: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted(){
  
        return this.show=true;  
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
