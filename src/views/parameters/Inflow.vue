<template>
    <div class="bg-white items-center justify-center p-8">
        <b>Inflow Rate</b>
        <div class="m-4 grid grid-cols-1">
            <div>
          <span class="flex text-left"> Volume of Recipient</span>
          <input class="text-center border border-black w-full" type="number" v-model="recipient"/>
          </div>
          <hr class="m-4">
          <div class="space-y-4">
          <div>
          <span class="flex text-left"> Timing 1 </span>
          <input class="text-center border border-black w-full" type="number" v-model="t1"/>
          </div>
          <div>
          <span class="flex text-left"> Timing 2 </span>
          <input class="text-center border border-black w-full" type="number" v-model="t2"/>
          </div>
          <div>
          <span class="flex text-left"> Timing 3 </span>
          <input class="text-center border border-black w-full" type="number" v-model="t3"/>
          </div>
          </div>
      </div>
      <button class="p-2 border border-black m-2 rounded"> Formula </button>
      <button class="p-2 border border-black m-2 rounded"> Guide </button>
      <button class="p-2 border border-black m-2 rounded" @click="calculate"> Calculate </button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            recipient: null,
            t1: null,
            t2: null,
            t3: null,
        }

    },

    computed: {
        inflowRate(){
            const rec = parseInt(this.recipient);
            const t1 = parseInt(this.t1);
            const t2 = parseInt(this.t2);
            const t3 = parseInt(this.t3)

            const result = rec / ((t1 + t2 + t3)/3);

            return result.toFixed(2);
        }
    },
    methods:{
        calculate() {
            const inf = this.inflowRate;

            this.$store.state.inflow.value =  inf;
            this.$store.state.inflow.check = true;
        }
    }

}
</script>

<style>

</style>