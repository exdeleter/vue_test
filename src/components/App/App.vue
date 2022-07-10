<script src="./App.js"></script>
<style src="./App.css" scoped></style>

<!-- некоторая разметка -->
<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list 
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>
