<template>
  <div class="bg-white items-center justify-center p-8"> 
    <heading class="text-2xl font-black">
      GIZ
      <br>
      <br>
    </heading>
    <div v-if="isBleach">
    <span> {{ WeightH }}</span>
    <br>
    <br>
    <span> {{ Recharge }}</span>
  </div>
      <div v-else>
    <span> {{ WeightB }}</span>
    <br>
    <br>
    <span> {{ Recharge }}</span>
  </div>
  <br>
  <hr>
    <div>
  <button class="p-2 border border-black m-2 rounded" @click="editChange"> Edit </button>
  <button class="p-2 border border-black m-2 rounded" @click="editCal"> Calibrate </button>
  </div>
  <template v-if="editOn">
    <div>
    <heading class="font-light"> EDIT PARAMETERS  </heading>
      <div class="space-y-1">
          <div>
            <span class="flex text-left"> Inflow Rate </span> 
            <input class="text-center border border-black w-full" type="number" v-model="Inflow"/>
          </div>
          <div>
            <span class="flex text-left"> Tank Volume </span>
            <input class="text-center border border-black w-full" type="number" v-model="Tank"/>
          </div>
          <div>
            <span class="flex text-left"> Percentage </span>
            <input class="text-center border border-black w-full" type="number" v-model="Percentage"/>
          </div>
          <div>
            <span class="flex text-left"> Dosage</span>
            <input class="text-center border border-black w-full" type="number" v-model="Dosage"/>
          </div>
          <div>
            <span class="flex text-left"> Drip Rate</span>
            <input class="text-center border border-black w-full" type="number" v-model="Drip"/>
          </div>
      </div>
    </div>
    <hr>
  </template>
  <template v-if="calibrateOn">
    <div>
    <heading class="font-light"> CALIBRATION MENU  </heading>
    </div>
  </template>

  </div>



</template>

<script>
export default {
  data: function(){
    return{
      editOn: false,
      calibrateOn: false,

      Inflow: null,
      Tank: null,
      Percentage: null,
      Dosage: null,
      Drip: null,

    }
  },
  computed:{
    Weight(){
      const tank = this.$store.state.tank;
      const inflow = this.$store.state.inflow;
      const per = this.$store.state.per;
      const drip = this.$store.state.drip;
      const dos = this.$store.state.dos;
      
      //answer is in KG, need to multiply by 1000 to convert to grams
      const answer = .36*tank*inflow*dos/(drip*per)
      return answer;
    },

    WeightH(){
      if (this.editOn){
        const answer = .36*this.Tank*this.Inflow*this.Dosage/(this.Drip*this.Percentage)
        return answer.toFixed(2)*1000 + " grams per recharge.";
      }
      else {
        return this.Weight.toFixed(2)*1000 + " grams per recharge."
        }
    },

    WeightB(){

      if (this.editOn) {
        const weightBleach = .36*this.Tank*this.Inflow*this.Dosage/(this.Drip*this.Percentage)
        const answer = weightBleach/3.79
        return weightBleach.toFixed(2) + " liters, or " + answer.toFixed(2) + " gallons of bleach per recharge."
      }

      else {
      const weiL = this.Weight.toFixed(2);
      const weightG = this.Weight/3.79;
      return weiL + " liters, or " + weightG.toFixed(2) + " gallons of bleach per recharge."
      }
    },
    
    Recharge() {
      const tank = this.$store.state.tank;
      const drip = this.$store.state.drip;

      const answer = tank/(drip*24)
      return answer.toFixed(2) + " day recharge time.";
    },
    isBleach(){
      return !this.$store.state.isBleach;
    }
  },
  methods:{
    editChange(){
      this.editOn = !this.editOn

      this.Inflow = this.$store.state.inflow;
      this.Tank = this.$store.state.tank;
      this.Percentage = this.$store.state.per;
      this.Dosage = this.$store.state.dos;
      this.Drip = this.$store.state.drip;
    },
    editCal(){
      this.calibrateOn = !this.calibrateOn
    }
  }

}
</script>

<style>

</style>