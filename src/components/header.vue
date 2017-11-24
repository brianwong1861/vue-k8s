<style scoped>
.logo {
  font-size: 22px;
  font-weight: 330;
  color: #fdc46f;
  float: left;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 30px;
  text-transform: uppercase;
}
</style>
<template>
  <div id=header>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <a class="logo">Kubernetes</a>
    <el-menu-item index="1"><router-link to="/">集群概覧</router-link></el-menu-item>
    <el-submenu index="2">
        <template slot="title">我的應用</template>
        <el-menu-item index="2-1">正在運行</el-menu-item>
        <el-menu-item index="2-2">已停止</el-menu-item>
        </el-submenu>
    <el-submenu index="3">
        <template slot="title">集群佈署</template>
        <el-menu-item index="3-1">Pod</el-menu-item>
        <el-menu-item index="3-2">Service</el-menu-item>
        <el-menu-item index="3-3">Deployment</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">系統設定</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import PageContent from './content'
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  components: {
      PageContent
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }

};
</script>

