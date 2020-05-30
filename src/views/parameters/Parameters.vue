<template>
<div class="mx-8 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <Inflow class="shadow-lg border border-gray-400 rounded-lg"/>
    <Tank class="shadow-lg border border-gray-400 rounded-lg"/>
    <Percentage class="shadow-lg border border-gray-400 rounded-lg"/>
    <Dosage class="shadow-lg border border-gray-400 rounded-lg"/>
    <DripRate class="shadow-lg border border-gray-400 rounded-lg"/>
</div>
</template>

<script>
import Inflow from './Inflow.vue'
import Tank from './Tank.vue'
import Percentage from './Percentage.vue'
import Dosage from './Dosage.vue'
import DripRate from './DripRate.vue'

  export default{
    components:{
      Inflow,
      Tank,
      Percentage,
      Dosage,
      DripRate
    }
    
  }
</script>
