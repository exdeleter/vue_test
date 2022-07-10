<script src="./PostForm.js"></script>
<style src="./PostForm.css" scoped></style>

<template>
  <!--    чтобы страница не обновлялась или не обновление страницы-->
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
           v-model="post.title"
           type="text"
           placeholder="Название"></my-input>
    <my-input
           v-model="post.body"
           type="text"
           placeholder="Описание"
    ></my-input>
    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px "
        @click="createPost"
    >
      Добавить
    </my-button>
  </form>
</template>
