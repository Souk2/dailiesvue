<template>
  <HeaderComponents v-if="isAuthenticated"/>
  <SidebarComponents v-if="isAuthenticated"/>
  <router-view/>
</template>

<script>

//import HeaderComponents from './components/includes/HeaderComponents.vue';
import SidebarComponents from './components/includes/SidebarComponents.vue';

export default {
  name: 'App',
  components: {
    //HeaderComponents,
    SidebarComponents
  },
  data(){
    return {
      isAuthenticated: false
    };
  },
  created(){
    this.checkAuthStatus();
  },
  methods: {
    checkAuthStatus(){
      this.isAuthenticated = !!localStorage.getItem('token');
    }
  }
}
</script>

<style>

</style>
