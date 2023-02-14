<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">店长手机:</div>
        <div class="input-field">
          <el-input v-model="queryParams.phone"></el-input>
        </div>

        <div class="input-tip">店长昵称:</div>
        <div class="input-field">
          <el-input v-model="queryParams.name"></el-input>
        </div>

        <div class="input-tip">店长状态:</div>
        <div class="input-field">
          <el-select v-model="queryParams.state" placeholder="请选择">
            <el-option key="1" label="已激活" value="1"></el-option>
            <el-option key="2" label="审核中" value="2"></el-option>
          </el-select>
        </div>

        <div class="input-tip">店长来源:</div>
        <div class="input-field">
          <el-select v-model="queryParams.source" placeholder="请选择">
            <el-option key="1" label="后台开通" value="1"></el-option>
            <el-option key="2" label="站外申请" value="2"></el-option>
          </el-select>
        </div>
      </el-container>

      <el-container class="content-row">
        <el-button type="primary" @click="search">筛选</el-button>
        <el-button type="primary" @click="clear">清空</el-button>
      </el-container>
    </div>

    <div>
      <el-table :data="managerList" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="店长信息" width="200" prop="people"></el-table-column>
        <el-table-column label="微信号" width="150" prop="weixin"></el-table-column>
        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.state ? 'success' : 'info'">{{ scope.row.state ? '已激活' : '审核中' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="收入总额" width="100" prop="income"></el-table-column>
        <el-table-column label="退款" width="100" prop="back"></el-table-column>
        <el-table-column label="来源" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.source ? '' : 'warning'">{{ scope.row.source ? '后台开通' : '站外申请' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="客户数" width="100" prop="customer"></el-table-column>
        <el-table-column label="更新时间" width="200" prop="time"></el-table-column>
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
        phone: "",
        name: "",
        state: "",
        source: "",
      },
      managerList: []
    }
  },
  mounted() {
    this.managerList = mock.getManagerList()
  },
  methods: {
    search() {
      this.$message({
        type: 'success',
        message: '请求参数：' + JSON.stringify(this.queryParams),
        duration: 1500,
      });
      this.managerList = mock.getManagerList();
    },
    clear() {
      this.queryParams = {
        phone: "",
        name: "",
        state: ""
      };
      this.managerList = mock.getManagerList();
    }
  }
}
</script>