import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        firstName: 'Atakan',
        lastName: 'Tekoğlu'
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        fullName: (state) => {
            return `${state.firstName} ${state.lastName}`
        }
    }
})