<template>
  <div id="app">
   <div class="content-wrp page-width">
    <div class="inner-content">
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

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .content-wrp {
    max-width: 1920px;
    padding: 0 10px;
  }

  .inner-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .search-drink-bar { 
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 22px 0;
    border-bottom: solid 1px #c8ccd1;;
  }

  .search-drink-bar form {
    display: flex;
  }

  #submit-btn {
    background-color: rgb(57, 190, 168);
    padding: 6px;
    color: #ffffff;
  }

  .drinks-title {
    margin: 33px 0 15px 0;
    font-size: 1.5em;
    color: #0b32bd;
  }

  .popular-cocktails {
    display: grid;
    grid-gap: 1rem;
  }

  .not-found-drink {
    margin: 50px;
    padding: 20px;
    font-size: 17px;
    font-weight: 500;
  }

/***************************-Responsive-*******************************/
  @media (min-width: 320px) {
   .popular-cocktails {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 600px) {
    .popular-cocktails { 
      grid-template-columns: repeat(3, 1fr); 
    }
  }
  @media (min-width: 900px) {
    .popular-cocktails { 
      grid-template-columns: repeat(4, 1fr); 
    }
  }

  @media (max-width: 600px) {
    .search-drink-bar {
      width: 100%;
      display: block;
    }
   .search-drink-bar form {
      display: block;
   }
   #submit-btn {
    width: 100%;
      margin-top: 10px;
   }
  }

</style>
