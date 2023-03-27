<template>
  <el-container class="h-screen">
    <el-header height="64px">
      <app-header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <app-sidebar />
      </el-aside>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppHeader from '~/components/app-header/app-header.vue'
import AppSidebar from '~/components/app-sidebar/app-sidebar.vue'
</script>
