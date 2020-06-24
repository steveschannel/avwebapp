<template>
  <div class="bg-white items-center justify-center p-8"> 
    <heading class="text-2xl font-black">
      GIZ
      <br>
    </heading>
    <div>
      <h1> Chlorine Weight </h1>
      <span> {{ Weight.weight }} {{Weight.units}}  </span>
      <span v-if="!isBleach"> or {{ Weight.weight*1000 }} grams <br> <br></span>
      <span v-if="isBleach"> <br> <br></span>

      <h1> Recharge Time </h1>
      <span> {{ Recharge }} day(s) before recharge <br><br></span>
      
      <h1> Concentration </h1>
      <span> {{ Concentration }} MG/L </span>
  </div>

  <div v-if="calibrateOn==true">

    
    <br>
    <hr>
    <br>

    <h1> Testing Volume </h1>
   <span>  {{ portion.answer }} {{portion.units}} <br><br></span>

    <h1> Adjusted Values </h1>
  
    <h2> Measured Drip Rate </h2>
    <span>  {{ dripRate }} LTS/H <br><br></span>

    <h2> New Recharge Time </h2>
    <span>  {{ newTime }} day(s) <br><br> </span>

    <h2> New Chlorine Weight </h2>
    <span>  {{ newWeight.weight }} {{ newWeight.units }} </span>
    <span v-if="!isBleach"> or {{ newWeight.weight*1000 }} grams <br> <br></span>
    <span v-if="isBleach"> <br><br></span>

    <h2> Concentration </h2>
    <span>  {{ newConcentration }} <br><br></span>

    <div v-if="calibrationMode=='weight'">
      <h2> Solution Needed </h2>
      <span>  {{ finalWeight}} liters of mother solution necessary to chlorinate for this time period. <br><br></span>
    </div>

    <div v-if="calibrationMode=='volume'">
      <h2> Weight Needed </h2>
      <span>  {{ finalVolume }} </span>
      <span v-if="isBleach"> liters of bleach necessary to chlorinate for this time period. <br><br></span>
      <span v-else> kilograms of HTH necessary to chlorinate for this time period.<br><br></span>
    </div> 

  </div>
  <br>
    <div>
  <button class="p-2 border border-black m-2 rounded" @click="editChangeOn" v-if="!editOn"> Edit </button>
  <button class="p-2 border border-black m-2 rounded" @click="editChangeOff" v-else> Use Global </button>
  <button class="p-2 border border-black rounded" @click="editCal" v-if="calibrateOn == false"> Calibrate </button>
  <button class="p-2 border border-black rounded" @click="hideCal" v-else-if="calibrateOn == true"> Hide Calibration </button>
  </div>

  
  <template v-if="editOn && calibrateOn !== true" class="m-2">
    <div>
    <heading class="font-light"> EDIT PARAMETERS  </heading>
      <div class="space-y-1 mb-4">
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
            <span class="flex text-left"> Dosage </span>
            <input class="text-center border border-black w-full" type="number" v-model="Dosage"/>
          </div>
          <div>
            <span class="flex text-left"> Drip Rate </span>
            <input class="text-center border border-black w-full" type="number" v-model="Drip"/>
          </div>
      </div>
    </div>
  </template>

  <template v-if="calibrateOn==true">    

    <div><br>
          <heading class="font-light"> CALIBRATION MENU  </heading>
          <div>
            <span class="flex text-left"> Test Solution Volume - L</span>
            <input class="text-center border border-black w-full" type="number" v-model="testVolume"/>
          </div>

          <div>
            <span class="flex text-left"> Measured Drip Rate - ML / MIN </span>
            <input class="text-center border border-black w-full" type="number" v-model="realDrip"/>
          </div>

          <input type="radio" id="weight" value="weight" v-model="calibrationMode">
          <label for="weight"> Weight </label>

          <input type="radio" id="volume" value="volume" v-model="calibrationMode">
          <label for="volume"> Volume </label>
          <br>

          <div v-if="calibrationMode=='volume'">
            <span class="flex text-left"> Desired Volume - L</span>
            <input class="text-center border border-black w-full" type="number" v-model="calibratedTankVol"/>
          </div>
          <div v-else-if="calibrationMode=='weight'">
            <span class="flex text-left"> Desired Weight - KG </span>
            <input class="text-center border border-black w-full" type="number" v-model="calibratedChlorineWeight"/>
          </div>
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
      calibrationMode: 'weight',

      //in component calculation of weight, recharge weight, and concentration

      Inflow: null,
      Tank: null,
      Percentage: null,
      Dosage: null,
      Drip: null,

      //calibration

      testVolume: null,
      realDrip: null,

      calibratedTankVol: null,
      calibratedChlorineWeight: null,

    }
  },

  computed:{

    finalVolume(){
      const wei = this.newWeight.weight;
      const tan = this.Tank;
      const dtan = this.calibratedTankVol;

      const result = wei*(dtan/tan)

      return result.toFixed(2);
    },

    finalWeight(){
      const wei = this.newWeight.weight;
      const tan = this.Tank;
      const cwei = this.calibratedChlorineWeight;

      const result = tan*(cwei/wei)

      return result.toFixed(2);
    },

    newConcentration(){
      if (this.editOn ){
        const wei = this.newWeight.weight;
        const per = this.Percentage;
        const tan = this.Tank;

        const conc = 1000*10*wei*per/tan;
        return conc.toFixed(2);
      }
      else {
        const tank = this.$store.state.tank;
        const pWeight = this.newWeight.weight;
        const per = this.$store.state.per;

        //convert to grams, convert to percentage
        const conc = 1000*10*pWeight*per/tank;
        return conc.toFixed(2);
      }
    },

    newWeight(){

      const tan = this.$store.state.tank;
      const inf = this.$store.state.inflow;
      const per = this.$store.state.per;
      const dri = this.dripRate;
      const dos = this.$store.state.dos;

      let result;

      if (this.editOn){

      const tan = this.Tank;
      const inf = this.Inflow;
      const per = this.Percentage;
      const dri = this.dripRate;
      const dos = this.Dosage;
         
         result = .36*tan*inf*dos/(dri*per);
      }

      else {
        result = .36*tan*inf*dos/(dri*per);
      }

      if ( this.isBleach ){

                return { 
                  weight : result.toFixed(2),
                  units : 'liters'
                  }
      }

      else {
                
                return { 
                  weight : result.toFixed(2),
                  units : 'kilograms'
                  }
      }
    
    },

    newTime(){
      const tank = this.Tank;
      const drip = this.dripRate;

      const answer = tank/(drip*24);

      return answer.toFixed(2);
    },

    dripRate(){
        return this.realDrip*60/1000;
    },

    portion(){
      if ( this.isBleach == true){
        const testVolume = this.testVolume;
        const weight = this.Weight.weight;
        const overallVolume = this.$store.state.tank;

        const answer = testVolume*weight/overallVolume;
        return { 
          answer : answer.toFixed(2), 
          units : 'LITERS' 
          }
      }
      
        else if ( this.isBleach == false){
        const testVolume = this.testVolume;
        const weight = this.Weight.weight;
        const overallVolume = this.$store.state.tank;

        const answer = 1000*testVolume*weight/overallVolume;
        return { 
          answer : answer.toFixed(2), 
          units : 'GRAMS' 
          }
      }

      else {
        return 'hola';
      }
    },

    Concentration(){
      if (this.editOn){
        const wei = this.Weight.weight;
        const per = this.Percentage;
        const tan = this.Tank;

        const conc = 1000*10*wei*per/tan;
        return conc.toFixed(2);
      }
      else {
        const tank = this.$store.state.tank;
        const pWeight = this.Weight.weight;
        const per = this.$store.state.per;

        //convert to grams, convert to percentage
        const conc = 1000*10*pWeight*per/tank;
        return conc.toFixed(2);
      }
    },

    Weight(){
      const tan = this.$store.state.tank;
      const inf = this.$store.state.inflow;
      const per = this.$store.state.per;
      const dri = this.$store.state.drip;
      const dos = this.$store.state.dos;

      if ( this.isBleach ){
              if (this.editOn || this.calibrateOn) {

                const result = .36*this.Tank*this.Inflow*this.Dosage/(this.Drip*this.Percentage);
                
                return { 
                  weight : result.toFixed(2),
                  units : 'liters'
                  }
                }

              else {

                const result = .36*tan*inf*dos/(dri*per);

                return { 
                  weight : result.toFixed(2), 
                  units: 'liters' 
                  };
                }
      }

      else {

        if (this.editOn || this.calibrateOn ){
        
          const result = .36*this.Tank*this.Inflow*this.Dosage/(this.Drip*this.Percentage)
          
          return {
            weight: result.toFixed(2),
            units: 'kilograms'
            }
      }
      else {
        const result = .36*tan*inf*dos/(dri*per);

        return { 

                weight: result.toFixed(2),
                units: 'kilograms'

                };
        }
      }
      //answer in kg, need to multiply by 1000 to convert to grams
    },
    
    Recharge() {

        if (this.editOn ){
          const answer = this.Tank/(this.Drip*24)
          return answer.toFixed(2);
        }

      else {
        const tank = this.$store.state.tank;
        const drip = this.$store.state.drip;

        const answer = tank/(drip*24)
        return answer.toFixed(2);
      }
    },
    isBleach(){
      return this.$store.state.isBleach;
    }
  },
  methods:{

    editChangeOn(){
      this.editOn = true;

      this.Inflow = this.$store.state.inflow;
      this.Tank = this.$store.state.tank;
      this.Percentage = this.$store.state.per;
      this.Dosage = this.$store.state.dos;
      this.Drip = this.$store.state.drip;
    },

    editChangeOff(){
      this.editOn = false;

      this.Inflow = this.$store.state.inflow;
      this.Tank = this.$store.state.tank;
      this.Percentage = this.$store.state.per;
      this.Dosage = this.$store.state.dos;
      this.Drip = this.$store.state.drip;
    },

    editCal(){
      this.calibrateOn = true;

      if (this.editOn==false) {

      this.Inflow = this.$store.state.inflow;
      this.Tank = this.$store.state.tank;
      this.Percentage = this.$store.state.per;
      this.Dosage = this.$store.state.dos;
      this.Drip = this.$store.state.drip;

      }

    },

    hideCal(){
      this.calibrateOn = false;
    }
  }

}
</script>

<style>

</style>