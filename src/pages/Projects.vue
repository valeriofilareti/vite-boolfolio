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
      }
    },
    mounted() {
      this.getApi()
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
      <td>{{ project.name }}</td>
      <td>{{ project.description }}</td>
      <td><button class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
    </tr>
  </tbody>
</table>
</template>


<style>

</style>