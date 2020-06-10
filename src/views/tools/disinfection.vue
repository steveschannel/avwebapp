<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Disinfection</b>
        <div class="m-4 grid grid-cols-1">
          <div class="space-y-4">
          <div>
          <span class="flex text-left"> Volume of Target </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          <div>
          <span class="flex text-left"> Desired Dosage </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          <div>
          <span class="flex text-left"> Chlorine Percentage </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Formula </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
      <button class="p-2 border border-black m-2 rounded"> Calculate </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>