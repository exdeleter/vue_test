<style src="./PostList.css" scoped></style>
<script src="./PostList.js"></script>

<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      >
      </post-item>
    </transition-group>
  </div>
  <h2 v-else style="color:red"> Список постов пуст</h2>
</template>
