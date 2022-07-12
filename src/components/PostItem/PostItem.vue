<script src="./PostItem.js"></script>
<style src="./PostItem.css" scoped></style>

<template>
  <div class="post">
    <div>
      <div>
        <strong>
          {{post.id}} | Название
        </strong>
        {{post.title}}
      </div>
      <div>
        <strong>
          Описание
        </strong>
        {{post.body}}
      </div>
    </div>
    <div class="post__btns">
      <my-button
          @click="$router.push(`/posts/${post.id}`)"
      >Открыть</my-button>
      <my-button
          @click="$emit('remove', post)"
      >Удалить</my-button>
    </div>
  </div>
</template>
