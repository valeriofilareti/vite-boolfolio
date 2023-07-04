<script>
import axios from 'axios';
import { store } from "../data/store";
export default {
name: 'Projects',
methods: {
      getApi(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(result => {
            store.projects = result.data
        })
      },
      // getCategories(){
      //   axios.get('http://127.0.0.1:8000/api/projects/categories')
      //     .then(result => {
      //       store.categories = result.data
            
      //   })
      // },
    },
    mounted() {
      this.getApi();
      // this.getCategories();
      console.log(store.projects);
    },
    data(){
      return {
        store
      }
    }
}
</script>

<template>
<h1 class="text-center my-5">Projects</h1>
<!-- <ul>
  <li v-for="category in store.categories.name" :key="category.id">
  x</li>
</ul> -->
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Show</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(project, index) in store.projects" :key="index">
      <th scope="row">{{project.id}}</th>
      <td>{{ project.name }}
        <div class="badges">
          <span class="badge bg-primary m-1">{{ project.category.name }}</span>
          <span class="badge bg-secondary m-1">tag</span> 
          <span class="badge bg-secondary m-1">tag</span> 
        </div>
      </td>
      <td>{{ project.description }}</td>
      <td><button class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
    </tr>
  </tbody>
</table>
</template>


<style>

</style>