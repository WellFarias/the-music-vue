import Vue from 'vue'
import Vuex from 'vuex'

import { InstrumentsModule } from './modules/instrumentsModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  
  modules: {
    InstrumentsModule,
  }
})

export default store
