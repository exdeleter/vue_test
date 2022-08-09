<script src="./MyNavbar.js" ></script>
<style src="./MyNavbar.css" scoped></style>

<template>
    <div class="navbar">
      <div @click="$router.push('/')">
        PostBook
      </div>
      <div class="navbar__btns">
        <ul>
          <li class="navbar__btns_item">
            <my-button style="width: 100%"
                @click="$router.push('/posts')"
            >Посты
            </my-button>
          </li>
          <li class="navbar__btns_item">
            <my-button style="width: 100%"
                @click="$router.push('/about')"
            >О сайте
            </my-button>
          </li>
          <li class="navbar__btns_item">
            <my-button style="width: 100%"
                @click="$router.push('/department')"
            >Департаменты
            </my-button>
          </li>
          <li class="navbar__btns_item">
            <my-button style="width: 100%"
                       @click="$router.push('/employee')"
            >Сотрудники
            </my-button>
          </li>
        </ul>
      </div>
    </div>
  
</template>

