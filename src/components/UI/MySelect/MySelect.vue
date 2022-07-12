<script src="./MySelect.js"></script>
<style src="./MySelect.css" scoped></style>

<template>
  <select
      @change="changeOption"
  >
    <option disabled value="">Выберите из списка</option>
    <option 
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>