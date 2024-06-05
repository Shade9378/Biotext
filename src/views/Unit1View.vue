<template>
  <!--+ and - button changes the font size, width, and height of the overall format.-->
  <div class="background">
    <div class="sizeButtons">
      <button @click="changeToWide()">+</button>
      <button @click="changeToNarrow()">-</button>
    </div>
    
    <div class="home" v-if=wide>
      <Element2Wide/>
    </div>
    <div class="home" v-if=narrow>
      <Element3Narrow/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Element2Wide from '@/components/Element2Wide.vue'
import Element3Narrow from '@/components/Element3Narrow.vue'

export default { 
  name: 'Unit1View',
  components: {
    Element2Wide,
    Element3Narrow
  },
  data(){
    return{
      narrow: false,
      wide: true
    }
  },
  methods:{
    changeToWide(){
      this.wide = true;
      this.narrow = false;
    },
    changeToNarrow(){
      this.wide=false;
      this.narrow=true;
    }
  }
}
</script>

<style scoped>
.sizeButtons{
  margin-right:0px;
  margin-left:auto;
  width:60px;
}

.background{
  height:100%;
  min-width: 50%;
}
</style>
