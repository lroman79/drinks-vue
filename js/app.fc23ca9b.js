(function(t){function e(e){for(var n,a,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/drinks-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0a03":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"content-wrp page-width"},[r("div",{staticClass:"inner-content"},[r("div",{staticClass:"search-drink-bar"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.findDrink.apply(null,arguments)}}},[r("SearchAutocomplete",{on:{"pass-Input":t.getInputFromChild}}),r("button",{attrs:{type:"submit",id:"submit-btn"}},[t._v("Search")])],1)]),t.hasDrinks?r("div",{staticClass:"popular-cocktails-wrp"},[r("h3",{ref:"drinks-title",staticClass:"drinks-title"},[t._v(t._s(t.drinkTitle))]),r("div",{staticClass:"popular-cocktails"},t._l(t.getDrinks,(function(t){return r("Cocktails",{key:t.idDrink,attrs:{name:t.strDrink,img:t.strDrinkThumb,id:t.idDrink}})})),1)]):r("div",{staticClass:"not-found-drink"},[t._v("Not any cocktails found!")])])])])},s=[],a=r("3835"),o=r("1da1"),c=(r("96cf"),r("d81d"),r("d3b7"),r("3ca3"),r("ddb0"),r("498a"),["margarita","mojito","Long Island Tea","Negroni","Whiskey Sour","Daiquiri","Old Fashioned","Dry Martini"]),u=(r("99af"),{data:function(){return{baseUrl:"https://www.thecocktaildb.com/api/json/v1/1/"}},methods:{fetchDrinks:function(t,e){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i="".concat(r.baseUrl,"search.php?").concat(e,"="),n.next=3,fetch("".concat(i).concat(t));case 3:if(s=n.sent,!s.ok){n.next=10;break}return n.next=7,s.json();case 7:return n.abrupt("return",n.sent);case 10:return console.log("Error HTTP: "+s.status),n.abrupt("return",{});case 12:case"end":return n.stop()}}),n)})))()}}}),l={data:function(){return{searchingStorageName:"searchingInputs"}},methods:{checkLocalStorageKeyExists:function(t){return!!localStorage.getItem(t)},createLocalStorage:function(t){var e=[];localStorage.setItem(t,JSON.stringify(e))},storeInLocalStorage:function(t){var e=t,r=this.searchingStorageName;this.checkLocalStorageKeyExists(r)||this.createLocalStorage(r);var n=JSON.parse(localStorage.getItem(r)),i=n.some((function(e){return e===t}));i||(n.push(e),localStorage.setItem(r,JSON.stringify(n)),this.isInStorage=!0)},getInputsFromLocalStorage:function(){if(!this.checkLocalStorageKeyExists(this.searchingStorageName))return"";var t=JSON.parse(localStorage.getItem(this.searchingStorageName));return t}}},d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cocktail-item",attrs:{id:t.name},on:{mouseover:function(e){return t.loadDrinksVariants(e)}}},[r("div",{staticClass:"drink-img-wrp"},[r("img",{attrs:{src:t.img,alt:"Drink"}})]),r("h5",{staticClass:"cocktail-name"},[t._v(t._s(t.name))]),r("div",{staticClass:"tooltip"},[r("v-card",[r("v-tabs",{attrs:{"background-color":"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.getIngredients,(function(e){return r("v-tab",{key:e.idDrink},[t._v(" "+t._s(e.strDrink)+" ")])})),1),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.getIngredients,(function(e){return r("v-tab-item",{key:e.idDrink},[r("div",[r("div",{staticClass:"img-tooltip"},[r("img",{attrs:{src:e.strDrinkThumb,alt:""}})]),r("h5",{staticStyle:{"font-size":"1.1em"}},[t._v("Ingredients:")]),t._l(e.ingredients,(function(e,n,i){return r("div",{key:i,attrs:{flat:""}},[r("div",{staticStyle:{"margin-top":"10px"}},[t._v(" "+t._s(n)+" : "+t._s(e)+" ")])])}))],2)])})),1)],1)],1)])},p=[],f=(r("4de4"),{data:function(){return{ingredientsArr:[],tab:null}},props:{name:String,img:String,id:String},methods:{checkIfArrayContainsArrays:function(t){return!!t.filter(Array.isArray).length},loadDrinksVariants:function(t){var e=[];if(this.checkIfArrayContainsArrays(this.drinksArr["drinksArr"]))e=this.drinksArr["drinksArr"].filter((function(e){return e[0].strDrink===t.currentTarget.id}));else{var r=this.drinksArr["drinksArr"].filter((function(e){return e.strDrink===t.currentTarget.id}));e.push(r)}for(var n=e,i=Object(a["a"])(n,1),s=i[0],o=[],c=0;c<s.length;c++){for(var u={idDrink:s[c].idDrink,strDrink:s[c].strDrink,strDrinkThumb:s[c].strDrinkThumb,ingredients:{}},l=1;l<=15;l++)s[c]["strIngredient".concat(l)]&&(u.ingredients[s[c]["strIngredient".concat(l)]]=s[c]["strMeasure".concat(l)]);o.push(u),this.ingredientsArr=o}}},inject:["drinksArr"],computed:{getIngredients:function(){return this.ingredientsArr}}}),h=f,k=(r("c530"),r("2877")),m=r("6544"),g=r.n(m),v=r("b0af"),b=r("71a3"),w=r("c671"),y=r("fe57"),C=r("aac8"),D=Object(k["a"])(h,d,p,!1,null,"c5ca7738",null),O=D.exports;g()(D,{VCard:v["a"],VTab:b["a"],VTabItem:w["a"],VTabs:y["a"],VTabsItems:C["a"]});var S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"autocomplete"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.lookUpCocktail,expression:"lookUpCocktail"}],attrs:{autocomplete:"off",type:"text",id:"search-drink-input"},domProps:{value:t.lookUpCocktail},on:{input:[function(e){e.target.composing||(t.lookUpCocktail=e.target.value)},t.onChange],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onArrowDown.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onArrowUp.apply(null,arguments)}]}}),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results"},t._l(t.searchResults,(function(e,n){return r("li",{key:n,staticClass:"autocomplete-result",class:{"is-active":n===t.arrowCounter},on:{click:function(r){return t.setResult(e)}}},[t._v(t._s(e))])})),0)])},x=[],I={name:"SearchAutocomplete",emits:["pass-Input"],mixins:[u,l],data:function(){return{lookUpCocktail:"",searchItems:[],searchResults:[],isOpen:!1,arrowCounter:-1}},methods:{setResult:function(t){this.lookUpCocktail=t,this.$emit("pass-Input",this.lookUpCocktail),this.isOpen=!1},filterResults:function(){var t=this;this.searchResults=this.searchItems.filter((function(e){return e.toLowerCase().indexOf(t.lookUpCocktail.toLowerCase())>-1}))},onChange:function(){this.searchItems&&this.filterResults(),this.$emit("pass-Input",this.lookUpCocktail),this.searchItems=this.getInputsFromLocalStorage(),this.isOpen=!!this.searchResults.length},handleClickOutside:function(t){this.$el.contains(t.target)||(this.arrowCounter=-1,this.isOpen=!1)},onArrowDown:function(){this.arrowCounter<this.searchResults.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside),this.searchItems=this.getInputsFromLocalStorage()},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},_=I,A=(r("7940"),Object(k["a"])(_,S,x,!1,null,"511e56c4",null)),j=A.exports,U={name:"App",mixins:[u,l],components:{Cocktails:O,SearchAutocomplete:j},data:function(){return{drinkTitle:"Popular Cocktails",defaultDrinksNames:c,drinksDetailsFull:[],drinksDetails:[],lookUpCocktail:""}},provide:function(){var t=this,e={};return Object.defineProperty(e,"drinksArr",{enumerable:!0,get:function(){return t.drinksDetailsFull}}),{drinksArr:e}},methods:{loadDefaultDrinks:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.defaultDrinksNames.map(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n,i,s,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="s",e.next=3,t.fetchDrinks(r,n);case 3:i=e.sent,s=i.drinks,o=Object(a["a"])(i.drinks,1),c=o[0],t.drinksDetailsFull.push(s),t.drinksDetails.push(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(r);case 3:case"end":return e.stop()}}),e)})))()},getInputFromChild:function(t){this.lookUpCocktail=t},findDrink:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.lookUpCocktail.trim().length){e.next=2;break}return e.abrupt("return");case 2:return r="f",n="s",i=r,t.lookUpCocktail.length>1&&(i=n),e.next=8,t.fetchDrinks(t.lookUpCocktail,i);case 8:s=e.sent,s.drinks&&s.drinks.length&&t.storeInLocalStorage(t.lookUpCocktail),t.drinksDetails=[],a=s.drinks,t.drinksDetailsFull=a,t.drinksDetails=a,t.drinkTitle="Founded Drinks";case 15:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadDefaultDrinks();case 2:document.addEventListener("click",t.handleClickOutside);case 3:case"end":return e.stop()}}),e)})))()},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)},computed:{getDrinks:function(){return this.drinksDetails},hasDrinks:function(){return this.drinksDetails&&this.drinksDetails.length}}},R=U,T=(r("034f"),Object(k["a"])(R,i,s,!1,null,null,null)),L=T.exports,N=r("f309");n["a"].use(N["a"]);var P=new N["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:P,render:function(t){return t(L)}}).$mount("#app")},7940:function(t,e,r){"use strict";r("0a03")},"84cc":function(t,e,r){},"85ec":function(t,e,r){},c530:function(t,e,r){"use strict";r("84cc")}});
//# sourceMappingURL=app.fc23ca9b.js.map