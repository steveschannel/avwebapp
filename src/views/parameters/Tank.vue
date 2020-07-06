<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Tank Volume</b>
        <div class="m-4 grid grid-cols-1">
          <div class="space-y-4 ">
          <div>
          <span class="flex text-left"> Tank Capacity </span>
          <input class="text-center border border-black w-full" type="number" v-model="tank"/>
          </div>
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Formula </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
      <button class="p-2 border border-black m-2 rounded" @click="setTank"> Calculate </button>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      tank:null,
    }
  },
  methods:{
    setTank() {
      this.$store.state.tank.value = parseInt(this.tank);
    }
  }

}
</script>

<style>

</style>