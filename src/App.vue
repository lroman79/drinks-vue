<template>
  <div id="app">
    <div class="content-wrp page-width">
     <div class="search-drink-bar">
      <form @submit.prevent="findDrink">
        <SearchAutocomplete @pass-Input="getInputFromChild"></SearchAutocomplete>
        <button type="submit" id="submit-btn">Search</button>
      </form>
    </div>
    
    <div class="popular-cocktails-wrp" v-if="hasDrinks">
      <h3 class="drinks-title" ref="drinks-title">{{drinkTitle}}</h3>
      <div class="popular-cocktails">
        <Cocktails
          v-for="drink in getDrinks"
          :key="drink.idDrink"
          :name="drink.strDrink"
          :img="drink.strDrinkThumb"
          :id="drink.idDrink"
        ></Cocktails>
      </div>
    </div>
    <div class="not-found-drink" v-else>Not any cocktails found!</div>
  
  </div>
 </div>
</template>

<script>
import { defaultDrinksNames } from "./utils/defaultDrinks.js";

import fetchDrinks from "./mixins/fetchDrinks.js";
import storeSearchResult from "./mixins/storeSearchResult.js";

import Cocktails from "./components/Cocktails";
import SearchAutocomplete from "./components/SearchAutocomplete";

export default {
  name: 'App',
  mixins: [fetchDrinks, storeSearchResult],
  components: {
    Cocktails,
    SearchAutocomplete
  },
  data() {
    return {
      drinkTitle: 'Popular Cocktails',
      defaultDrinksNames: defaultDrinksNames,
      drinksDetailsFull: [],
      drinksDetails: [],
      lookUpCocktail: '',
    };
  },
  provide() {
    const drinksArr = {};
    Object.defineProperty(drinksArr, "drinksArr", {
      enumerable: true,
      get: () => this.drinksDetailsFull,
    });
    return { drinksArr };
  },
  methods: {
    async loadDefaultDrinks() {
      const promises = this.defaultDrinksNames.map(async (drinkName) => {
        const queryParam = "s";
        const result = await this.fetchDrinks(drinkName, queryParam);
        const fullArr = result.drinks; // get only one drink
        const [ singleObj ] = result.drinks;

        this.drinksDetailsFull.push(fullArr);
        this.drinksDetails.push(singleObj);
      });
      await Promise.all(promises);
    },
    getInputFromChild(inputData) {
     this.lookUpCocktail = inputData;
    },
    async findDrink() { 
      if (!this.lookUpCocktail.trim().length) {
        return;
      }
      let queryByFirsLetter = "f";
      let queryByName = "s";
      let queryParam = queryByFirsLetter;
      if (this.lookUpCocktail.length > 1) {
        queryParam = queryByName;
      }
      const result = await this.fetchDrinks(this.lookUpCocktail, queryParam);
      if (result.drinks && result.drinks.length) {
        //Store input string in localStorage
        this.storeInLocalStorage(this.lookUpCocktail);
      }
      this.drinksDetails = [];
      const fullArr = result.drinks;

      this.drinksDetailsFull = fullArr;
      this.drinksDetails = fullArr;
      this.drinkTitle = 'Founded Drinks'
    },
  },
  async mounted() {
    await this.loadDefaultDrinks();
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  computed: {
    getDrinks() {
      return this.drinksDetails;
    },
    hasDrinks() {
      return this.drinksDetails && this.drinksDetails.length;
    },
  },
};
</script>

<style>
body, html {
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0px;
  padding: 0px;
}

.content-wrp {
 padding: 0 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.popular-cocktails-wrp {
  /* width: 880px; */
  margin: 0 auto;
}

.drinks-title {
  margin: 33px 0 15px 0;
  font-size: 1.5em;
  color: #0b32bd;
}

.popular-cocktails {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.search-drink-bar {
  width: 350px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 22px 0;
  border-bottom: solid 1px;
}

.search-drink-bar form {
  display: flex;
}

#submit-btn {
 background-color: rgb(57, 190, 168);
 padding: 6px;
 color: #ffffff;
}

.not-found-drink {
  margin: 50px;
  padding: 20px;
  font-size: 17px;
  font-weight: 500;
}

</style>
