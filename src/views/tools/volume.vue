<template>
    <div class="bg-white items-center justify-center p-8">
        <h1>Volume</h1>
        
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
                                v-model="shape"> Cylindrical
                    </label>
                </div>
          </div>

            <div v-if="shape === 'Cubic'">

                <hr class="m-4">
                
                <b> Cube - Reservoir Volume </b> <br> {{ cubVolume }} liters

                <div class="space-y-4">

                    <div>
                        <span class="flex text-left"> Height - M </span>
                        <input class="text-center border border-black w-full" type="number" v-model="cubHeight" />
                    </div>

                    <div>
                        <span class="flex text-left"> Length - M </span>
                        <input class="text-center border border-black w-full" type="number" v-model="cubLength" />
                    </div>

                    <div>
                        <span class="flex text-left"> Width - M </span>
                        <input class="text-center border border-black w-full" type="number" v-model="cubWidth" />
                    </div>

                </div>
            </div>

            <div v-else-if="shape === 'Cylindrical'">
                
                <hr class="m-4">

                <b> Cylinder - Reservoir Volume </b> <br> {{ cylVolume }} liters

                <div class="space-y-4">

                    <div>
                        <span class="flex text-left"> Height - M </span>
                        <input class="text-center border border-black w-full" type="number" v-model="cylHeight"/>
                    </div>

                    <div>
                        <span class="flex text-left"> Diameter - M </span>
                        <input class="text-center border border-black w-full" type="number" v-model="cylDiameter" />
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
    
    data() {
        return {
            shape: "Cubic",

            cubHeight: null,
            cubLength: null,
            cubWidth: null,

            cylHeight: null,
            cylDiameter: null,
        }
    },
    computed:{
        cubVolume(){

            const hei = this.cubHeight;
            const len = this.cubLength;
            const wid = this.cubWidth;

            const result = hei * len * wid ;
            return result.toFixed(2)*1000;
        },

        cylVolume(){

            const hei = this.cylHeight;
            const dia = this.cylDiameter;

            const result = Math.PI * (dia**2) * hei / 4;

            return result.toFixed(2)*1000;
        }
    }

}
</script>

<style>

</style>