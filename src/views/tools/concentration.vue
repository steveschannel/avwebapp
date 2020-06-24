<template>
    <div class="bg-white items-center justify-center p-8">
        <h1>Concentration</h1>

        <b> Mother Solution Concentration</b> <br>
        <span> 
          {{concentration}} miligrams / liter.
        </span>

        <div class="m-4 grid grid-cols-1">
          <div class="space-y-4">
          <div>
          <span class="flex text-left"> Chlorine Weight - G </span>
          <input class="text-center border border-black w-full" type="number" v-model="conCl" />
          </div>
          <div>
          <span class="flex text-left"> Volume of Water - L </span>
          <input class="text-center border border-black w-full" type="number" v-model="conVl" />
          </div>
          <div>
          <span class="flex text-left"> Chlorine Strength - %</span>
          <input class="text-center border border-black w-full" type="number" v-model="conSt" />
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
      conCl: null,
      conVl: null,
      conSt: null,
    }
  },

  computed:{
    concentration(){

      const chl = this.conCl;
      const vol = this.conVl;
      const str = this.conSt;

      const result = chl*10*str/vol;
      return result.toFixed(2);
    }
  }

}
</script>

<style>

</style>