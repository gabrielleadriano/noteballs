<template>
  <div>
    <NavBar />
    <div class="container is-max-desktop px-2 py-4">
      <router-view />
    </div>
  </div>
</template>

<style>
@import "bulma\css\bulma.min.css";
</style>

<script setup>
// imports
import NavBar from "@/components/Layout/NavBar.vue";
</script>
