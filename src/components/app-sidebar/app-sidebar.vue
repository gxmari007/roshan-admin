<template>
  <el-menu :default-active="defaultActive" router>
    <el-sub-menu index="form">
      <template #title>
        <el-icon><Edit /></el-icon>
        <span>表单</span>
      </template>
      <el-menu-item index="/form/basic-form">基础表单</el-menu-item>
      <el-menu-item index="/form/step-form">分步表单</el-menu-item>
      <el-menu-item index="/form/advanced-form">高级表单</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'

const route = useRoute()
const defaultActive = computed(() => route.fullPath)
</script>
