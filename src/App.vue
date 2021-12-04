<template>
  <div class="wrapper">
    <p>{{ this.$store.getters.fullName }}</p>
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" @click.native="$store.dispatch('addToFavorites',airport)"/>
    </div>
    <br>
    <h2 v-if="this.$store.state.favorites.length" class="fav-line">Favorites</h2>
    <br>
    <div v-for="(airport,index) in $store.state.favorites" :key="index">
      <airport-card :airport="airport" />
    </div>
  </div>
</template>

<script>
import allAirports from './data/airport.js'
import AirportCard from './components/AirportCard.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    'airport-card':AirportCard
  },
  data() {
    return {
      airports:allAirports
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

.fav-line::after {
  
}

p,
h3 {
  grid-column: span 3;
}

</style>