<template>
  <div class="cocktail-item" :id="name" @mouseover="loadDrinksVariants($event)">
    <div class="drink-img-wrp">
     <img :src="img" alt="Drink" />
    </div>
    <h5 class="cocktail-name">{{ name }}</h5>
    <div class="tooltip">
      <v-card>
        <v-tabs
        v-model="tab"
        background-color="primary"
        dark
        >
      <v-tab
        v-for="item in getIngredients" :key="item.idDrink"
      >
       {{item.strDrink}}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
     <v-tab-item v-for="item in getIngredients" :key="item.idDrink">
         <div>
        <div class="img-tooltip">
           <img :src="item.strDrinkThumb" alt="">          
        </div>
         <h5 style="font-size: 1.1em">Ingredients:</h5>
        <div flat v-for="(value, name, index) in item.ingredients" :key="index">
            <div style="margin-top: 10px">
            {{ name }} : {{ value }}
            </div>
        </div>   
        </div>      
     </v-tab-item>
    </v-tabs-items>
  </v-card>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingredientsArr: [],
      tab: null,
    };
  },
  props: {
    name: String,
    img: String,
    id: String,
  },
  methods: {
    checkIfArrayContainsArrays(array) {
      return !!array.filter(Array.isArray).length;
    },
    loadDrinksVariants(event) {
      let arr = [];
      if (this.checkIfArrayContainsArrays(this.drinksArr["drinksArr"])) {
        arr = this.drinksArr["drinksArr"].filter((elem) => {
          //get drink by id including all its variants
          return elem[0].strDrink === event.currentTarget.id;
        });
      } else {
        const result = this.drinksArr["drinksArr"].filter((elem) => {
          //get drink by id including all its variants
          return elem.strDrink === event.currentTarget.id;
        });
        arr.push(result);
      }

      const [drinkArr] = arr;
      const newArr = [];

      for (let i = 0; i < drinkArr.length; i++) {
        const drinkObj = {
          idDrink: drinkArr[i].idDrink,
          strDrink: drinkArr[i].strDrink,
          strDrinkThumb: drinkArr[i].strDrinkThumb,
          ingredients: {},
        };

        for (let y = 1; y <= 15; y++) {
          if (!drinkArr[i][`strIngredient${y}`]) {
            continue;
          }
          drinkObj.ingredients[drinkArr[i][`strIngredient${y}`]] =
            drinkArr[i][`strMeasure${y}`];
        }
        newArr.push(drinkObj);
        //console.log(drinkObj)
        this.ingredientsArr = newArr;
      }
    },
  },
  inject: ["drinksArr"],
  computed: {
    getIngredients() {
      return this.ingredientsArr;
    },
  },
};
</script>

<style scoped>
.cocktail-item {
  margin: 5px;
}

.drink-img-wrp {
 width: 150px;
}

/* .tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
} */

.tooltip {
  visibility: hidden;
  width: 500px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  /* Position the tooltip */
  position: absolute;
  left: 25%;
  right: 50%;
  z-index: 99;
}

.img-tooltip {
    width: 150px;
    float: left;
    display: flex;
}

.cocktail-item:hover .tooltip {
  visibility: visible;
}
</style>