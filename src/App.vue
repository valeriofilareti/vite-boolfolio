<script>
  import axios from 'axios';
  import vfHeader from './components/vfHeader.vue';
  import vfFooter from './components/vfFooter.vue';
  import { store } from "./data/store";

  export default{
    name: 'App',
    components: {
      vfHeader,
      vfFooter
    },
    methods: {
      getApi(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(result => {
            store.resultArray = result.data
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

<vfHeader />
<div class="container my-5">
  <router-view></router-view>
</div>
<vfFooter />
</template>

<style>
@import './scss/main.scss';
</style>
