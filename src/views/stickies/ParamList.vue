<template>
  <div class="mb-8 w-auto on inline-block element bg-gray-200 rounded-full py-4 px-8 shadow-md space-x-6">
      <span v-if="inflow != null">
          Inflow Rate: {{ inflow }} L/S
      </span> 
      <span>|</span>
    <span v-if="tank != null">
        Tank: {{ tank }} L
    </span> 
    <span>|</span>
        <span v-if="percentage != null">
        Percentage: {{ bleach }} {{ percentage }}% 
    </span>
<span>|</span>

    <span v-if="dosage != null">
        Dosage: {{ dosage }} MG/L
    </span> 
    <span>|</span>
    <span v-if="drip != null">
        Drip Rate: {{drip}} L/H : {{dripML.toFixed(2)}} ML/MIN
    </span> 
    
  </div>
</template>

<script>
export default {
    computed: {
        bleach(){
            return this.$store.state.isBleach ? "Bleach" : "HTH"
        },
        inflow() {
            return this.$store.state.inflow;
        },
         tank() {
            return this.$store.state.tank;
        },
         dosage() {
            return this.$store.state.dos;
        },
         drip() {
            return this.$store.state.drip;
        },
         percentage() {
            return this.$store.state.per;
        },

        dripML() {
            return this.$store.state.drip*1000/60
        }
    },
    

}
</script>

<style>

</style>