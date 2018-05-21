<template>
  <div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tableData(){
      return this.$store.state.page2.tableData;
    }
  },
  mounted(){
    this.$store.dispatch("getTableData");
    console.log(this.$store.state);
  }
};
</script>

<style>
</style>
