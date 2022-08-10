<script src="./DepartmentPage.js"></script>
<style src="./DepartmentPage.css" scoped></style>

<template>
    <div class="DepartmentPage">
      <h1>Страница с отделами</h1>
      <!--TODO Вынести таблицу в компоненты-->
      <div class="my-div-table">
        <table class="my-table">
          <thead>
          <tr>
            <td class="my-td"
                v-for="column in columns">
              {{ column.name }}
            </td>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="record in data">
            <td class="my-td"
                v-for="column in columns"
            >
              {{ record[column.field] }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="add-department">
        <h4>Добавление отдела</h4>
        <my-input
            v-model="department.departmentId"
            type="text"
            placeholder="Id"
        ></my-input>
        <my-input
            v-model="department.departmentName"
            type="text"
            placeholder="Название"
        ></my-input>
        <my-button
            class="btn"
            style="align-self: flex-end; margin-top: 15px "
            @click="addDepartment"
        >Добавить</my-button>
      </div>
      
      </div>
 </template>


