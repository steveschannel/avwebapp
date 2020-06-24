<template>
    <div class="bg-white items-center justify-center p-8">
        <h1>Drip</h1>
        <div class="m-4 grid grid-cols-1">

            <span class="m-4">
              <b>Estimated Drip Rate</b> <br>
              {{estimatedDripRate}} mililiters / min. 
              <br>
              or {{estimatedDripRate *60/1000}} liters / hour. 
            </span>

          <div class="space-y-4">

            <div>
              <span class="flex text-left"> Volume of Recipient - ML </span>
              <input class="text-center border border-black w-full" type="number" v-model="dripVolume" />
            </div>

            <div>
              <span class="flex text-left"> Time to fill - SECONDS</span>
              <input class="text-center border border-black w-full" type="number" v-model="timeFill" />
            </div>
            
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Formula </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
    </div>
</template>

<script>
export default {
  
  data(){
    return{
      dripVolume: null,
      timeFill: null,
    }
  },

  computed: {
    estimatedDripRate(){

      const drip = this.dripVolume;
      const time = this.timeFill;

      const result = drip * 60 /time;
      return result.toFixed(2);
    },
  }

}
</script>

<style>

</style>