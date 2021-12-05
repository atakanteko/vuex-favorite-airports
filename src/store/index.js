import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        firstName: 'Atakan',
        lastName: 'Tekoğlu',
        favorites:[],
    },
    mutations: {
        UPDATE_FAVORITES:(state,payload) => {
            state.favorites = payload
        }
    },
    actions: {
        addToFavorites(context,payload){
            const favorites = context.state.favorites
            favorites.push(payload)
            context.commit('UPDATE_FAVORITES',favorites)
        }
    },
    getters: {
        fullName: (state) => {
            return `${state.firstName} ${state.lastName}`
        }
    }
})