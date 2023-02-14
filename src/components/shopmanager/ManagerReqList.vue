<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">用户状态:</div>
        <div class="input-field">
          <el-input v-model="queryParams.state"></el-input>
        </div>

        <div class="input-tip">用户信息:</div>
        <div class="input-field">
          <el-input v-model="queryParams.info"></el-input>
        </div>
      </el-container>

      <el-container class="content-row">
        <el-button type="primary" @click="search">筛选</el-button>
        <el-button type="primary" @click="clear">清空</el-button>
      </el-container>
    </div>

    <div>
      <el-table :data="managerList" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="用户信息" width="300" prop="people"></el-table-column>
        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.state ? 'success' : 'info'">{{ scope.row.state ? '已激活' : '待审核' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" width="200" prop="time"></el-table-column>
        <el-table-column label="添加时间" width="200" prop="reqTime"></el-table-column>
        <el-table-column label="操作" width="100" prop="reqTime">
          <template #default='scope'>
            <el-button size="default" @click='click(scope.row)' :type="scope.row.state ? 'danger' : 'success'">
              {{ scope.row.state ? '冻结' : '激活' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mock from "@/mockjs/mock";

export default {
  data() {
    return {
      queryParams: {
        state: "",
        info: ""
      },
      managerList: []
    }
  },
  mounted() {
    this.managerList = mock.getManagerReqList();
  },
  methods: {
    search() {
      this.$message({
        type: 'success',
        message: '请求参数：' + JSON.stringify(this.queryParams),
        duration: 1500,
      });
      this.managerList = mock.getManagerReqList();
    },
    clear() {
      this.queryParams = {
        state: "",
        info: ""
      };
      this.managerList = mock.getManagerReqList();
    },
    click(item) {
      item.state = !item.state;
    }
  }
}
</script>