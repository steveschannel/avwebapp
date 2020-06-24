<template>
    <div class="bg-white items-center justify-center p-8">
        <h1>Disinfection</h1>
        <div class="m-4 grid grid-cols-1">

          <!-- currently unsure if bleach formula is correct, wait for updates from angel on the use of this formula -->

          <!-- <div class="justify-left">

                <p class="flex text-left"> Disinfectant Used </p>

                <div class="flex space-x-2">
                    <label for="hth">
                        <input  type="radio" 
                                id="hth" 
                                value="HTH" 
                                v-model="chlorineType"> HTH
                    </label>

                    <br>
                    
                    <label for="ble">
                        <input  type="radio" 
                                id="ble" 
                                value="Bleach" 
                                v-model="chlorineType"> Bleach
                    </label>
                </div>
          </div> -->

          <div class="space-y-4" v-if="chlorineType==='HTH'" >
            <!-- <hr class="m-4"/> -->
            <b> HTH </b> <br>
            <span>
              {{Disinfection}} grams needed for disinfection.
            </span>

              <div>
                <span class="flex text-left"> Volume of Target - L</span>
                <input class="text-center border border-black w-full" type="number" v-model="hVolume" />
              </div>

              <div>
                <span class="flex text-left"> Desired Dosage - MG/L</span>
                <input class="text-center border border-black w-full" type="number" v-model="hDosage" />
              </div>

              <div>
                <span class="flex text-left"> Chlorine Percentage - %</span>
                <input class="text-center border border-black w-full" type="number" v-model="hPercentage"/>
              </div>
          </div>

          <div class="space-y-4" v-if="chlorineType==='Bleach'" >
            <hr class="m-4"/>
            <b> Bleach </b> <br>
            <span>
              {{Disinfection}} liters of bleach needed for disinfection.
            </span>

              <div>
                <span class="flex text-left"> Volume of Target - L</span>
                <input class="text-center border border-black w-full" type="number" v-model="bVolume" />
              </div>

              <div>
                <span class="flex text-left"> Desired Dosage - MG/L </span>
                <input class="text-center border border-black w-full" type="number" v-model="bDosage" />
              </div>

              <div>
                <span class="flex text-left"> Chlorine Percentage - %</span>
                <input class="text-center border border-black w-full" type="number" v-model="bPercentage" />
              </div>
          </div>


      </div>

      <div v-if="chlorineType==='HTH'" >
        <button class="p-2 border border-black m-2 rounded"> Formula </button>
        <button class="p-2 border border-black m-2 rounded"> Guide </button>
      </div>

      <div v-if="chlorineType==='Bleach'" >
        <button class="p-2 border border-black m-2 rounded"> Formula </button>
        <button class="p-2 border border-black m-2 rounded"> Guide </button>
      </div>

    </div>

</template>

<script>
export default {

  data(){
    return {
      chlorineType: 'HTH',

      hVolume: null,
      hDosage: null,
      hPercentage: null,

      bVolume: null,
      bDosage: null,
      bPercentage: null,
    }
  },

  computed: {

    Disinfection(){
      const hVol = this.hVolume;
      const hDos = this.hDosage;
      const hPer = this.hPercentage;

      const bVol = this.bVolume;
      const bDos = this.bDosage;
      const bPer = this.bPercentage;

      let result;

      if ( this.chlorineType ==="HTH" ){
        result = hVol * hDos / ( 10 * hPer )
      }

      else {
        result = bVol * bDos / ( 1000 * bPer ) 
      }
      return result.toFixed(2);
    },

  }

}
</script>

<style>

</style>