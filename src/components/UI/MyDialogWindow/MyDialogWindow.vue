<style src="./MyDialogWindow.css" scoped></style>
<script src="./MyDialogWindow.js"></script>

<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>


