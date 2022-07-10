<script src="./PostItem.js"></script>
<style src="./PostItem.css" scoped></style>

<template>
  <div class="post">
    <div>
      <div>
        <strong>
          Название
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
      <my-button>Удалить</my-button>
    </div>
  </div>
</template>
