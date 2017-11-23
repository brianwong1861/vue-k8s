<template>
  <div id="restartpod">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称"
     >
    </el-table-column>
    <el-table-column
      prop="restart_count"
      label="重启次数"
     >
    </el-table-column>
  </el-table>
  </div>
</template>
<style>

</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    axios
      .get("api/pods/restart")
      .then(response => {
        this.tableData = response.data.data;

      })
      .catch(error => {
        alert("Error");
      });
  }
};
</script>
