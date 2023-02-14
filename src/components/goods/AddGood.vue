<template>
  <div class="content-container" direction="vertical">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="基础设置" name="1">
        <base-setting></base-setting>
      </el-tab-pane>

      <el-tab-pane label="价格库存" name="2">
        <price-setting></price-setting>
      </el-tab-pane>

      <el-tab-pane label="商品详情" name="3">
        <detail-setting></detail-setting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import baseSetting from "@/components/goods/base/BaseSetting.vue";
import detailSetting from "@/components/goods/base/DetailSetting.vue";
import priceSetting from "@/components/goods/base/PriceSetting.vue";

export default {
  data() {
    return {
      activeTab: "1"
    }
  },
  components: {
    BaseSetting: baseSetting,
    PriceSetting: priceSetting,
    DetailSetting: detailSetting,
  },
  methods: {
    handleClick(tab) {
      console.log(tab.label)
    }
  }
}
</script>