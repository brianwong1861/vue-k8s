<template>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="節點名称">
            <span>{{ props.row.metadata.name }}</span>
          </el-form-item>
          <el-form-item label="節點標籤">
            <span>{{ props.row.metadata.labels }}</span>
          </el-form-item>
          <el-form-item label="節點ID">
            <span>{{ props.row.metadata.uid }}</span>
          </el-form-item>
          <el-form-item label="節點IP">
            <span>{{ props.row.status.addresses[0].address }}</span>
          </el-form-item>
          <el-form-item label="節點IP分配">
            <span>{{ props.row.spec.podCIDR }}</span>
          </el-form-item>
          <el-form-item label="狀態">
            <span>{{ props.row.status.conditions[3].status }}</span>
          </el-form-item>
          <el-form-item label="系统">
            <span>{{ props.row.status.nodeInfo.osImage }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="節點ID"
      prop="metadata.uid">
    </el-table-column>
    <el-table-column
      label="節點名稱"
      prop="metadata.name">
    </el-table-column>
    <el-table-column
      label="生成時間"
      prop="metadata.creationTimestamp">
    </el-table-column>
  </el-table>   
</template>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 80%;
}
</style>

<script>

import axios from "axios";


// export const httpInstance = axios.create({
//   // baseURL: `https://192.168.151.40:443/`,
//   baseURL: `http://127.0.0.1:8001/`,
//   // method: "jsonp",
//   headers: {
//     Authorization: "Bearer Y7mLAOpgqzSzePXrEOw6QJq1e6nONKfm"
//   }
// });

export default {
  data() {
    return {
      tableData5: []
    };
  },
  mounted() {

      axios.get('/api/v1/nodes')
      .then(response => {
        console.log(response.data.items);
        this.tableData5 = response.data.items
      })
  }
};
</script>
