﻿<script src="./MyInput.js"></script>
<style src="./MyInput.css" scoped></style>

<template>
  <input
      class="input"
      type="text"
      :value="modelValue"
      @input="updateInput"
  >
</template>