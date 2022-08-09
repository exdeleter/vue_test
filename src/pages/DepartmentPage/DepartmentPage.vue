<script src="./DepartmentPage.js"></script>
<style src="./DepartmentPage.css" scoped></style>

<template>
    <div class="DepartmentPage">
      <h1>Страница с отделами</h1>
      <table>
        <tr>
          <td 
              v-for="column in columns">
            {{ column.name }}
          </td>
        </tr>
        <tr v-for="record in data">
          <td
              v-for="column in columns"
          >
            {{ record[column.field] }}
          </td>
        </tr>
      </table>
      </div>
 </template>


