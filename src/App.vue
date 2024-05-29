<template>
  <header>
    <nav>
      <h3>Organic Chemistry E-Text</h3>
      <ul class="nav nav-pills">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle='dropdown' href="#" role="button" aria-haspopup="true" aria-expanded="false">Select content</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"><router-link to="/scroll">Unit 1 Switchable between Wide/Narrow Styles</router-link></a>
            <a class="dropdown-item" href="#"><router-link to='/'>Put other units here</router-link></a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>

  <div>
    <router-view/> 
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default{
  components:{
    RouterLink,
    RouterView
  }
}
</script>

<style>

</style>
