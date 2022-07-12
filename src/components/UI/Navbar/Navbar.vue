<script src="./Navbar.js" ></script>
<style src="./Navbar.css" scoped></style>

<template>
    <div class="navbar">
      <div @click="$router.push('/')">
        Vue 3
      </div>
      <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">
          Посты
        </my-button>
        <my-button
            @click="$router.push('/about')"
            style="margin-left: 20px"
        >
          О сайте
        </my-button>
      </div>
    </div>
  
</template>

