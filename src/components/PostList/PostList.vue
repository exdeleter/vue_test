<style src="./PostList.css" scoped></style>
<script src="./PostList.js"></script>

<template>
  <div>
    <h3>Список постов</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        v-bind:key="post"
    >
    </post-item>
  </div>
</template>
