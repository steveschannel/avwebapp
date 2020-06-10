<template>
<div class="mx-8 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <bottle class="shadow-lg border border-gray-400 rounded-lg"/>
    <volume class="shadow-lg border border-gray-400 rounded-lg"/>
    <disinfection class="shadow-lg border border-gray-400 rounded-lg"/>
    <drip class="shadow-lg border border-gray-400 rounded-lg"/>
    <concentration class="shadow-lg border border-gray-400 rounded-lg"/>
</div>
</template>

<script>
import bottle from './bottle.vue'
import volume from './volume.vue'
import disinfection from './disinfection.vue'
import drip from './drip.vue'
import concentration from './concentration.vue'

  export default{
    components:{
      bottle,
      volume,
      disinfection,
      drip,
      concentration,
    }
    
  }
</script>
