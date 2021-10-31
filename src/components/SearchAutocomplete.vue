<template>
 <div class="autocomplete">
  <input 
    autocomplete="off"
    type="text" 
    v-model="lookUpCocktail" 
    @input="onChange"
    @keydown.down="onArrowDown"
    @keydown.up="onArrowUp"       
    id="search-drink-input" 
  />
  <ul v-show="isOpen" class="autocomplete-results">
   <li
    v-for="(result, i) in searchResults"
    :key="i"
    @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
    >{{result}}</li>
  </ul>
 </div>
</template>

<script>
import fetchDrinks from "../mixins/fetchDrinks.js";
import storeSearchResult from "../mixins/storeSearchResult.js";

export default {
    name: 'SearchAutocomplete',
    emits: ['pass-Input'],
    mixins : [fetchDrinks, storeSearchResult],
    data() {
        return {
            lookUpCocktail: '',
            searchItems: [],
            searchResults: [],
            isOpen: false,
            arrowCounter: -1,
        }
    },
    methods: {
        setResult(result) {
            this.lookUpCocktail = result;
            this.$emit('pass-Input', this.lookUpCocktail)
            this.isOpen = false;
        },
        filterResults() {
            this.searchResults = this.searchItems.filter(item => item.toLowerCase().indexOf(this.lookUpCocktail.toLowerCase()) > -1);
        },
        onChange() {       
            if (this.searchItems) {
                this.filterResults();    
            }
            this.$emit('pass-Input', this.lookUpCocktail);
            this.searchItems = this.getInputsFromLocalStorage();
            this.isOpen = this.searchResults.length ? true : false;        
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.arrowCounter = -1;
                this.isOpen = false;
            }
        },
        onArrowDown() {
            if (this.arrowCounter < this.searchResults.length) {
                this.arrowCounter = this.arrowCounter + 1;
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter = this.arrowCounter - 1;
            }
        },
        // onEnter() {
        //   this.lookUpCocktail = this.results[this.arrowCounter];
        //   this.arrowCounter = -1;
        //   this.isOpen = false;
        // },
        },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        this.searchItems = this.getInputsFromLocalStorage();
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickOutside);
    },
}
</script>

<style scoped>
    #search-drink-input {
       border: solid 1px rgb(200, 204, 209);
       padding: 5px;
    }

    .autocomplete {
        position: relative;
    }

    .autocomplete-results {
        padding: 0;
        margin: 0;
        border: 1px solid #eeeeee;
        height: 120px;
        min-height: 1em;
        max-height: 6em;    
        overflow: auto;
        width: 100%;
        position: absolute;
        background-color: #ffffff;
    }

    .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
    }

    .autocomplete-result.is-active,
    .autocomplete-result:hover {
        background-color: #4AAE9B;
        color: white;
    }
    /****************-Responsive-*****************/
    @media (max-width: 600px) {
     .autocomplete {
        width: 100%;
     }
     #search-drink-input{
        width: 100%;
     }
    }
</style>