<script src="./App.js"></script>
<style src="./App.css" scoped></style>

<!-- некоторая разметка -->
<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
        @click="fetchPosts"
    >Получить посты
    </my-button>
    <my-button 
        @click="showDialog"
        style="margin: 15px 0;"
    >
      Создать пост
    </my-button>
    <my-dialog-window v-model:show="dialogVisible" >
      <post-form
          @create="createPost"
      />
    </my-dialog-window>
    <post-list 
        :posts="posts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div
        v-else
    >
      Идет загрузка...
    </div>
  </div>
</template>
