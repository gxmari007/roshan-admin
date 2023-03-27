<template>
  <div class="h-full flex">
    <nuxt-link class="flex items-center h-full mr-[-8px]" to="/">
      <el-space :size="8">
        <img class="h-[48px]" src="~assets/images/logo.svg" alt="logo" />
        <span class="text-[18px] text-green-500 font-600">Roshan Admin</span>
      </el-space>
    </nuxt-link>
    <div class="ml-[16px]">
      <div class="flex items-center h-full cursor-pointer">
        <el-icon :size="24" color="#000000"><Fold /></el-icon>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-end">
      <el-space class="h-full" :size="16">
        <el-badge is-dot>
          <el-icon class="block" :size="24"><Bell /></el-icon>
        </el-badge>
        <el-avatar>user</el-avatar>
      </el-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Fold, Bell } from '@element-plus/icons-vue'
</script>
