<template>
  <el-menu text-color="#131414">
    <el-sub-menu index="form">
      <template #title>
        <el-icon><Edit /></el-icon>
        <span>表单</span>
      </template>
      <el-menu-item index="basic-form">基础表单</el-menu-item>
      <el-menu-item index="step-form">分步表单</el-menu-item>
      <el-menu-item index="advanced-form">高级表单</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'
</script>
