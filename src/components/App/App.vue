<script src="./App.js"></script>
<style src="./App.css" scoped></style>

<!-- некоторая разметка -->
<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button
          @click="showDialog"
          
      >
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog-window v-model:show="dialogVisible" >
      <post-form
          @create="createPost"
      />
    </my-dialog-window>
    <post-list 
        :posts="sortedPosts"
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
