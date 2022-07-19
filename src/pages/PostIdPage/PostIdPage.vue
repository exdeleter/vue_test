<script src="./PostIdPage.js" ></script>
<style src="./PostIdPage.css" scoped></style>

<template>
    <div>
      <h1>Страница поста с ID = {{$route.params.id}} </h1>
      
      <h2>Название: {{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
</template>

