<template>
  <el-menu
    class="el-menu-demo flex justify-center"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/"> Home </el-menu-item>
    <el-menu-item index="/dashboard">Dashboard </el-menu-item>
    <el-menu-item index="/admin">Admin </el-menu-item>
    <el-menu-item index="/about">About </el-menu-item>
  </el-menu>
</template>
