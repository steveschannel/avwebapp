<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Volume</b>
        <div class="m-4 grid grid-cols-1">
            <div class="justify-left">
          <p class="flex text-left"> Reservoir Shape </p>
          <div class="flex space-x-2">
              <label for="cub">
                <input  type="radio" 
                        id="cub" 
                        value="Cubic" 
                        v-model="shape"> Cubic
            </label>
            <br>
            <label for="cyl">
                <input  type="radio" 
                        id="cyl" 
                        value="Cylindrical" 
                        v-model="shape">
                Cylindrical</label>
          </div>
          </div>

                    <div v-if="shape === 'Cubic'">
          <hr class="m-4">
          <div class="space-y-4">
          <div>
          <span class="flex text-left"> Height </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          <div>
          <span class="flex text-left"> Length </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          <div>
          <span class="flex text-left"> Width </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          </div>
          </div>
                    <div v-else-if="shape === 'Cylindrical'">
          <hr class="m-4">
          <div class="space-y-4">
          <div>
          <span class="flex text-left"> Height </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
          <div>
          <span class="flex text-left"> Diameter </span>
          <input class="text-center border border-black w-full" type="number"/>
          </div>
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
        data: function() {
        return {
            shape: "Cubic",
        }
    }

}
</script>

<style>

</style>