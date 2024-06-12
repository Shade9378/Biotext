<template>
  <header>
    <nav>
      <div id="mySidemenu" class="sidemenu">
        <a href="javascript:void(0)" class="close" @click="closeSM">&times;</a>
        <div class="sm-wrapper">
          <router-link tag="a" to="/scroll">Unit 1. Bonding, Introduction to Structural Representations</router-link>
          <a href="#">Unit 2. More Structural Representations and Isomers</a>
          <a href="#">Unit 3</a>
          <a href="#">Unit 4</a>
        </div>
      </div>
      <div id="pg-content">
        <div class="open" style="font-size:2vw;cursor:pointer;color:#5b5b5b" @click="openSM">&#9776;</div>
      </div>
      <h3><router-link to="/" style="text-decoration: none;">Organic Chemistry E-Text</router-link></h3>
    </nav>
  </header>

  <div @click="clickOut">
    <router-view/> 
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default{
  components:{
    RouterLink,
    RouterView
  },

  methods: {
    openSM(){
      if (parseInt( document.getElementById("mySidemenu").style.width) == 350) {
        this.closeSM();
      }
      else {
        if (window.screen.width <=725) {
          document.getElementById("mySidemenu").style.width ="350px";
          document.getElementById("pg-content").style.marginLeft = "0px";
        }
        else {
          document.getElementById("mySidemenu").style.width ="350px";
          document.getElementById("pg-content").style.marginLeft = "350px";
        }
      }
    },

    clickOut(){
      if (parseInt(document.getElementById("mySidemenu").style.width) == 350) {
        this.closeSM();
      }
    },
    
    closeSM(){
      document.getElementById("mySidemenu").style.width = "0";
      document.getElementById("pg-content").style.marginLeft ="0";
    }
  },
}
</script>

<style>
h3 {
  margin: 3vw;
}

.open {
  margin: 0%;
}

nav {
  display: flex;
  align-items: center;
  margin-left: 3vw !important;
}
/* SIDE MENU PART */
 
.sm-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
 
.sidemenu{
  display: flex;
  text-wrap:nowrap;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(72, 72, 72);
  transition: 0.5s;
  padding-top: 10px;
  -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
  scrollbar-width: none;  /* Hide scrollbar for Firefox */
}

/* Hide scrollbar for IE, Edge and Firefox */
.sidemenu::-webkit-scrollbar {
  display: none;
}

.sidemenu a{
  margin:15px 20px;
  text-decoration: none;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  display: block;
  margin-bottom: 20px;
  transition: 0.3s;
  }
 
.sidemenu .close{
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 20px;
  margin-left: 50px;
}
 
  /* SIDE MENU HOVER EFFECT */
 
.sm-wrapper a:after{
  z-index: -1;
  position: absolute;
  left: 0%;
  width: 0;
  height: 20px;
  background: #e85e4f;
  content: '';
  transition: width 0.35s ease-in-out;
}
 
.sm-wrapper a:hover:after{
  width: 3%;
}
 
.sm-wrapper a:hover{
  padding-left: 5px;
  transition: 0.35s ease-in-out;
}
 
/* CONTENT PART */
 
#pg-content{
  transition: margin-left 0.5s;
  padding: 5px;
}
 
</style>
