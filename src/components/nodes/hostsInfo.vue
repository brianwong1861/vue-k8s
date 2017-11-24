<template>
<div id=hosts>
  <el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props" >
        <el-form label-position="left" inline class="table-expand">
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
            <span>{{ props.row.spec.pod_cidr }}</span>
          </el-form-item>
          <el-form-item label="狀態">
            <span>{{ props.row.status.conditions[3].status }}</span>
          </el-form-item>
          <el-form-item label="系统">
            <span>{{ props.row.status.node_info.os_image }}</span>
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
      label="節點狀態"
      prop="status.conditions[3].status">
    </el-table-column>
    <el-table-column
      label="生成時間"
      prop="metadata.creation_timestamp">
    </el-table-column>
  </el-table>  
    </div></el-col>
    
  <el-col :span="8">
    
    <div class="grid-content bg-purple">
      <transition enter-active-class="bounceInRight" leave-active-class="bounceOutRight">
      <RestartPod v-show="show" class="animated"></RestartPod>
       </transition>      
      </div>
      
    </el-col>
</el-row> 
  
  </div>
</template>

<style>
#hosts {
  margin-top: 30px;
}
.table-expand {
  font-size: 0;
}
.table-expand label {
  width: 100px;
  color: #99a9bf;
}
.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 80%;
}
</style>

<script>
import axios from "axios";
import RestartPod from "../restartPod";

// export const instance = axios.create({
//   baseURL: 'http://192.168.89.47:8000/',
//   // baseURL: `http://127.0.0.1:8001/`,
//   // method: "jsonp",
//   headers: {
//     Authorization: "Bearer Y7mLAOpgqzSzePXrEOw6QJq1e6nONKfm"
//   },
//   auth: {
//     username: 'kube',
//     password: 'allbright'
//   },
// });

export default {
  data() {
    return {
      tableData: [],
      show: false,
    };
  },
  components: {
    RestartPod
  },
  mounted() {
    axios
      .get("api/nodes")
      .then(response => {
        this.tableData = response.data.items;
        this.show = true
      })
      .catch(error => {
        alert("Error");
      });
  },

};
</script>
