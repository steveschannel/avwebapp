<template>
<div class="mx-8 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <giz class="shadow-lg border border-gray-400 rounded-lg"/>
    <sab class="shadow-lg border border-gray-400 rounded-lg"/>
    <flo class="shadow-lg border border-gray-400 rounded-lg"/>
    <bom class="shadow-lg border border-gray-400 rounded-lg"/>
    <art class="shadow-lg border border-gray-400 rounded-lg"/>
</div>
</template>

<script>
import art from './art.vue'
import bom from './bomba.vue'
import flo from './flotador.vue'
import giz from './giz.vue'
import sab from './sabaplus.vue'

  export default{
    components:{
      art,
      bom,
      flo,
      giz,
      sab,
    }
    
  }
</script>
