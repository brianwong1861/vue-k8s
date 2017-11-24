<template>

  <div class="block">

      <el-row :gutter="20">
        <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
          <span class="demonstration">带快捷选项</span>
              <el-date-picker
                v-model="value2"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions1">
              </el-date-picker>
          </div>
          </el-col>
      </el-row>
     
  </div>

</template>
<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [
          {
            text: "今日",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨日",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value3: "",
      value2: ""
    };
  }
};
</script>
