export default {
    data() {
        return {
            baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
        }
    },
    methods: {
        async fetchDrinks(drinkName, queryParam) {
            const url = `${this.baseUrl}search.php?${queryParam}=`;
            const response = await fetch(`${url}${drinkName}`);
            if (response.ok) {
                return await response.json();
            } else {
              console.log("Error HTTP: " + response.status);
              return {};
            }
        },
    }
}