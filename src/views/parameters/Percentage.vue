<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Percentage</b>
        <div class="m-4 grid grid-cols-1">
          <div class="space-y-4 ">
          <div>
          <span class="flex text-left"> Percentage of Chlorine </span>
          <input class="text-center border border-black w-full" type="number" v-model="per"/>
          </div>
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Formula </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
      <button class="p-2 border border-black m-2 rounded" @click="HsetPer"> HTH Strength </button>
      <button class="p-2 border border-black m-2 rounded" @click="BsetPer"> Bleach Strength </button>
    </div>
</template>

<script>
export default {
  data:function(){
    return{
      per:null,
    }
  },
methods: {
  HsetPer() {
    this.$store.state.per = parseFloat(this.per);
    this.$store.state.isBleach = false;
  },

  BsetPer(){
    this.$store.state.per = parseFloat(this.per);
    this.$store.state.isBleach = true;
  }
}
}
</script>

<style>

</style>