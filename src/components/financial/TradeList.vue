<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="日汇总"></el-tab-pane>
        <el-tab-pane label="月汇总"></el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-table :data="tradeList" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="日期" width="250" prop="time"></el-table-column>
        <el-table-column label="收入" width="120" prop="income"></el-table-column>
        <el-table-column label="支出" width="120" prop="expend"></el-table-column>
        <el-table-column label="备注" width="300" prop="info"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mock from "@/mockjs/mock";

export default {
  data() {
    return {
      tradeList: []
    }
  },
  mounted() {
    this.tradeList = mock.getTradeList()
  },
  methods: {
    handleClick() {
      this.tradeList = mock.getTradeList()
    }
  }
}
</script>