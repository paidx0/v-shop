<template>
  <div class="content-container" direction="vertical">
    <el-container class="content-row">
      <el-button type="primary" @click="addCategory">添加分类</el-button>
    </el-container>

    <div>
      <el-table :data="categoryList" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="分类ID" width="100" prop="id"></el-table-column>
        <el-table-column label="分类名称" width="100" prop="name"></el-table-column>
        <el-table-column label="分类负责人" width="500">
          <template #default="scope">
            <el-tag size="large">{{ scope.row.manager }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column width="200" prop="time">
          <template #default="scope">
            <el-button size="default" @click="deleteCategory(scope.$index)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {ElMessageBox} from 'element-plus'

export default {
  data() {
    return {
      categoryList: [
        {
          id: 1001,
          name: "男装",
          manager: "管理员用户01"
        },
        {
          id: 1002,
          name: "男鞋",
          manager: "管理员用户01"
        },
        {
          id: 1003,
          name: "女装",
          manager: "管理员用户02"
        },
        {
          id: 1004,
          name: "女鞋",
          manager: "管理员用户02"
        },
      ]
    }
  },
  methods: {
    deleteCategory(index) {
      this.categoryList.splice(index, 1)
      this.$message({
        type: 'warning',
        message: '删除成功',
        duration: 1500,
      })
    },
    addCategory() {
      ElMessageBox.prompt(
          '请输入分类名',
          '新增分类',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern:
                /^.+$/,
            inputErrorMessage: '*不能为空*',
          }
      ).then(({value}) => {
        this.categoryList.push({
          id: this.categoryList[this.categoryList.length - 1].id + 1,
          name: value,
          manager: "管理员用户01"
        })
        this.$message({
          type: 'success',
          message: '添加成功',
          duration: 1500,
        })
      });
    }
  }
}
</script>