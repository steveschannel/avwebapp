import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      inflow: {
        value: null,
        check: false,
      },

    drip: {
      value: null,
      check: false,
    },

    per: {
      value: null,
      check: false,

      isBleach: false,
    },
    
    dos: {
      value: null,
      check: false,
    },
    tank: {
      value: null,
      check: false,
    },    

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
