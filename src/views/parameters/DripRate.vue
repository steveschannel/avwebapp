<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Drip Rate</b>
        <div class="m-4 grid grid-cols-1">
            <div>
          <span class="flex text-center"> Based on the values of Dosage:({{dosage}}) and Inflow Rate: ({{inflow}}), the recommended drip regulator rate is : <br> {{dripCalculated}} L/S or {{mlOutput.toFixed(2)}} ML/MIN<br></span>
          </div>
           <button class="p-2 border border-black m-2 rounded" @click="setDrip"> Use Recommended Rate </button>
          <hr class="m-4">
          <div class="space-y-4">
          <div>
          <span class="flex text-left"> Custom Drip Rate </span>
          <input class="text-center border border-black w-full" type="number" v-model="drip"/>
          </div>
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Table </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
      <button class="p-2 border border-black m-2 rounded" @click="custom"> Set Custom Rate </button>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            drip: null,
        }
    },

    methods:{
        setDrip(){
            this.$store.state.drip = this.dripCalculated
        },

        custom(){
            this.$store.state.drip = this.drip;
        }
    },



    computed:{

        mlOutput(){
            return this.dripCalculated*1000/60
        },
        inflow() {
            return this.$store.state.inflow;
        },
        dosage() {
            return this.$store.state.dos;
        },

        dripCalculated() {
            if (this.dosage === null){
                return " ";
            }
            else if ( this.dosage < .8 || this.dosage > 2.5) {
                return "Outside of Calculable Range. Manual Selection Required";
            }
            else if (this.dosage == .8 ) {
                if (this.inflow > 13.88 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 13.88 && this.inflow > 12.15){
                    return 8; 
                }
                else if ( this.inflow <= 12.15 && this.inflow > 10.41){
                    return 7 
                }
                else if ( this.inflow <= 10.41 && this.inflow > 8.68){
                    return 6 
                }
                else if ( this.inflow <= 8.68 && this.inflow > 6.94){
                    return 5 
                }
                else if ( this.inflow <= 6.94 && this.inflow > 5.20){
                    return 4 
                }
                else if ( this.inflow <= 5.20 && this.inflow > 3.47){
                    return 3 
                }
                else if ( this.inflow <= 3.47 && this.inflow > 1.73){
                    return 2 
                }
                else if ( this.inflow <= 1.73){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == .9 ) {
                  if (this.inflow > 12.34 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 12.34 && this.inflow > 10.80){
                    return 8
                }
                else if ( this.inflow <= 10.80 && this.inflow > 9.25){
                    return 7
                }
                else if ( this.inflow <= 9.25 && this.inflow > 7.71){
                    return 6
                }
                else if ( this.inflow <= 7.71 && this.inflow > 6.17){
                    return 5
                }
                else if ( this.inflow <= 6.17 && this.inflow > 4.62){
                    return 4
                }
                else if ( this.inflow <= 4.62 && this.inflow > 3.08){
                    return 3
                }
                else if ( this.inflow <= 3.08 && this.inflow > 1.54){
                    return 2
                }
                else if ( this.inflow <= 1.54){
                    return 1
                }
                return "n/a"
            }
            else if (this.dosage == 1.0 ) {
                  if (this.inflow > 11.10 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 11.10 && this.inflow > 9.72){
                    return 8
                }
                else if ( this.inflow <= 9.72 && this.inflow > 8.33){
                    return 7
                }
                else if ( this.inflow <= 8.33 && this.inflow > 6.94){
                    return 6
                }
                else if ( this.inflow <= 6.94 && this.inflow > 5.50){
                    return 5
                }
                else if ( this.inflow <= 5.50 && this.inflow > 4.16){
                    return 4
                }
                else if ( this.inflow <= 4.16 && this.inflow > 2.75){
                    return 3
                }
                else if ( this.inflow <= 2.75 && this.inflow > 1.38){
                    return 2
                }
                else if ( this.inflow <= 1.38){
                    return 1
                }
                return "n/a"
            }
            else if (this.dosage == 1.1 ) {
                  if (this.inflow > 10.10 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 10.10 && this.inflow > 8.83){
                    return 8 
                }
                else if ( this.inflow <= 8.83 && this.inflow > 7.57){
                    return 7 
                }
                else if ( this.inflow <= 7.57 && this.inflow > 6.31){
                    return 6 
                }
                else if ( this.inflow <= 6.31 && this.inflow > 5.05){
                    return 5 
                }
                else if ( this.inflow <= 5.05 && this.inflow > 3.78){
                    return 4 
                }
                else if ( this.inflow <= 3.78 && this.inflow > 2.52){
                    return 3 
                }
                else if ( this.inflow <= 2.52 && this.inflow > 1.26){
                    return 2 
                }
                else if ( this.inflow <= 1.26){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 1.2 ) {
                  if (this.inflow > 9.25 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 9.25 && this.inflow > 8.10){
                    return 8 
                }
                else if ( this.inflow <= 8.10 && this.inflow > 6.94){
                    return 7 
                }
                else if ( this.inflow <= 6.94 && this.inflow > 5.78){
                    return 6 
                }
                else if ( this.inflow <= 5.78 && this.inflow > 4.62){
                    return 5 
                }
                else if ( this.inflow <= 4.62 && this.inflow > 3.47){
                    return 4 
                }
                else if ( this.inflow <= 3.47 && this.inflow > 2.31){
                    return 3 
                }
                else if ( this.inflow <= 2.31 && this.inflow > 1.15){
                    return 2 
                }
                else if ( this.inflow <= 1.15){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 1.3 ) {
                  if (this.inflow > 8.54 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 8.54 && this.inflow > 7.47){
                    return 8
                }
                else if ( this.inflow <= 7.47 && this.inflow > 6.41){
                    return 7
                }
                else if ( this.inflow <= 6.41 && this.inflow > 5.34){
                    return 6
                }
                else if ( this.inflow <= 5.34 && this.inflow > 4.27){
                    return 5
                }
                else if ( this.inflow <= 4.27 && this.inflow > 3.20){
                    return 4 
                }
                else if ( this.inflow <= 3.20 && this.inflow > 2.13){
                    return 3
                }
                else if ( this.inflow <= 2.13 && this.inflow > 1.06){
                    return 2
                }
                else if ( this.inflow <= 1.06){
                    return 1
                }
                return "n/a"
            }
            else if (this.dosage == 1.4 ) {
                  if (this.inflow > 7.93 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 7.93 && this.inflow > 6.94){
                    return 8
                }
                else if ( this.inflow <= 6.94 && this.inflow > 5.95){
                    return 7
                }
                else if ( this.inflow <= 5.95 && this.inflow > 4.96){
                    return 6 
                }
                else if ( this.inflow <= 4.96 && this.inflow > 3.96){
                    return 5
                }
                else if ( this.inflow <= 3.96 && this.inflow > 2.97){
                    return 4 
                }
                else if ( this.inflow <= 2.97 && this.inflow > 1.98){
                    return 3
                }
                else if ( this.inflow <= 1.98 && this.inflow > .99){
                    return 2
                }
                else if ( this.inflow <= .99){
                    return 1
                }
                return "n/a"
            }
            else if (this.dosage == 1.5 ) {
                  if (this.inflow > 7.40 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 7.40 && this.inflow > 6.48){
                    return 8 
                }
                else if ( this.inflow <= 6.48 && this.inflow > 5.55){
                    return 7 
                }
                else if ( this.inflow <= 5.55 && this.inflow > 4.62){
                    return 6 
                }
                else if ( this.inflow <= 4.62 && this.inflow > 3.70){
                    return 5 
                }
                else if ( this.inflow <= 3.70 && this.inflow > 2.77){
                    return 4 
                }
                else if ( this.inflow <= 2.77 && this.inflow > 1.85){
                    return 3 
                }
                else if ( this.inflow <= 1.85 && this.inflow > 0.92){
                    return 2 
                }
                else if ( this.inflow <= 0.92){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 1.6 ) {
                  if (this.inflow > 6.94 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 6.94 && this.inflow > 6.07 ){
                    return 8
                }
                else if ( this.inflow <= 6.07 && this.inflow > 5.20 ){
                    return 7
                }
                else if ( this.inflow <= 5.20 && this.inflow > 4.34){
                    return 6 
                }
                else if ( this.inflow <= 4.34 && this.inflow > 3.47){
                    return 5 
                }
                else if ( this.inflow <= 3.47 && this.inflow > 2.60){
                    return 4
                }
                else if ( this.inflow <= 2.60 && this.inflow > 1.73){
                    return 3 
                }
                else if ( this.inflow <= 1.73 && this.inflow > 0.86){
                    return 2 
                }
                else if ( this.inflow <= 0.86){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 1.7 ) {
                  if (this.inflow > 6.53 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 6.53 && this.inflow > 5.71){
                    return 8 
                }
                else if ( this.inflow <= 5.71 && this.inflow > 4.90){
                    return 7 
                }
                else if ( this.inflow <= 4.90 && this.inflow > 4.08){
                    return 6 
                }
                else if ( this.inflow <= 4.08 && this.inflow > 3.26){
                    return 5 
                }
                else if ( this.inflow <= 3.26 && this.inflow > 2.45){
                    return 4 
                }
                else if ( this.inflow <= 2.45 && this.inflow > 1.63){
                    return 3 
                }
                else if ( this.inflow <= 1.63 && this.inflow > 0.81){
                    return 2 
                }
                else if ( this.inflow <= 0.81){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 1.8 ) {
                  if (this.inflow > 6.17 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 6.17 && this.inflow > 5.40){
                    return 8
                }
                else if ( this.inflow <= 5.40 && this.inflow > 4.62){
                    return 7
                }
                else if ( this.inflow <= 4.62 && this.inflow > 3.85){
                    return 6
                }
                else if ( this.inflow <= 3.85 && this.inflow > 3.08){
                    return 5
                }
                else if ( this.inflow <= 3.08 && this.inflow > 2.31){
                    return 4
                }
                else if ( this.inflow <= 2.31 && this.inflow > 1.54){
                    return 3 
                }
                else if ( this.inflow <= 1.54 && this.inflow > 0.77){
                    return 2
                }
                else if ( this.inflow <= 0.77){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 1.9 ) {
                  if (this.inflow > 5.84 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 5.84 && this.inflow > 5.11){
                    return 8 
                }
                else if ( this.inflow <= 5.11 && this.inflow > 4.38){
                    return 7 
                }
                else if ( this.inflow <= 4.38 && this.inflow > 3.65){
                    return 6 
                }
                else if ( this.inflow <= 3.65 && this.inflow > 2.92){
                    return 5 
                }
                else if ( this.inflow <= 2.92 && this.inflow > 2.19){
                    return 4 
                }
                else if ( this.inflow <= 2.19 && this.inflow > 1.46){
                    return 3 
                }
                else if ( this.inflow <= 1.46 && this.inflow > 0.73){
                    return 2 
                }
                else if ( this.inflow <= 0.73){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 2.0 ) {
                  if (this.inflow > 5.55 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 5.55 && this.inflow > 4.86){
                    return 8 
                }
                else if ( this.inflow <= 4.86 && this.inflow > 4.16){
                    return 7 
                }
                else if ( this.inflow <= 4.16 && this.inflow > 3.47){
                    return 6 
                }
                else if ( this.inflow <= 3.47 && this.inflow > 2.77){
                    return 5 
                }
                else if ( this.inflow <= 2.77 && this.inflow > 2.08){
                    return 4 
                }
                else if ( this.inflow <= 2.08 && this.inflow > 1.38){
                    return 3
                }
                else if ( this.inflow <= 1.38 && this.inflow > 0.69){
                    return 2 
                }
                else if ( this.inflow <= 0.69){
                    return 1 
                }
                return "n/a"
            }
            else if (this.dosage == 2.5 ) {
                  if (this.inflow > 4.44 ) {
                    return "High inflow. Manual Selection Required.";
                }
                else if ( this.inflow <= 4.44 && this.inflow > 3.88){
                    return 8 
                }
                else if ( this.inflow <= 3.88 && this.inflow > 3.33){
                    return 7 
                }
                else if ( this.inflow <= 3.33 && this.inflow > 2.77){
                    return 6
                }
                else if ( this.inflow <= 2.77 && this.inflow > 2.22){
                    return 5
                }
                else if ( this.inflow <= 2.22 && this.inflow > 1.66){
                    return 4 
                }
                else if ( this.inflow <= 1.66 && this.inflow > 1.11){
                    return 3
                }
                else if ( this.inflow <= 1.11 && this.inflow > 0.55){
                    return 2 
                }
                else if ( this.inflow <= 0.55){
                    return 1
                }
                return "n/a"
            }

            return null;
        }
    },

}
</script>

<style>

</style>