<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Dosage</b>
        <div class="m-4 grid grid-cols-1">
          <div class="space-y-4 ">
          <div>
          <span class="flex text-left"> Desired Concentration </span>
          <input class="text-center border border-black w-full" type="number" v-model="dos"/>
          </div>
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Formula </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
      <button class="p-2 border border-black m-2 rounded" @click="setd"> Calculate </button>
    </div>
</template>

<script>
export default {
  data: function() {
    return{
      dos: null,
    }
  },
  methods:{
    setd() {
      this.$store.state.dos = parseFloat(this.dos).toFixed(2);
    }
  }

}
</script>

<style>

</style>