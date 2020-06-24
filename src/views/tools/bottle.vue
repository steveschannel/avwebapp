<template>
    <div class="bg-white items-center justify-center p-8">
        <h1>Chlorine Measurement </h1>

        <div class="m-4">
            <span> 
            You can use recipients with a known volume (e.g. soda bottles) to measure grams of chlorine needed provided you know the density of the chlorine used.
            </span>
        </div>
        <span> 
            <b> At 1/4 fullness </b> : {{fullness.quarter}} <br>
            <b> Half full </b> : {{fullness.half}} <br>
            <b> At 3/4 fullness </b> : {{fullness.threefourth}} <br>
            <b> When full </b> : {{fullness.full}} <br>
        </span>

        <div class="m-4 grid grid-cols-1">
            <div class="space-y-4">
            <div>
                <span class="flex text-left"> Density - G/ML</span>
                <input class="text-center border border-black w-full" type="number" v-model="density"/>
          </div>
            <div>
                <span class="flex text-left"> Bottle Volume - L</span>
                <input class="text-center border border-black w-full" type="number" v-model="volume" />
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
        return {
            density: null,
            volume: null,
        }
    },

    computed:{
        fullness(){
                const den = this.density
                const vol = this.volume

                const result = den*vol*1000;

            return {
                quarter : result/4,
                half : result/2,
                threefourth : result*3/4,
                full: result,

            }
        }
    }

}
</script>

<style>

</style>