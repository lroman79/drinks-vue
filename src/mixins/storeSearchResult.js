export default {
    data() {
        return {
            searchingStorageName: 'searchingInputs'
        }
    },
    methods: {
        checkLocalStorageKeyExists(key){
            return !!localStorage.getItem(key);
        },
        createLocalStorage(storage){
        const itemsArr = [];
        localStorage.setItem(storage, JSON.stringify(itemsArr));
        },
        storeInLocalStorage(string) {
            const item = string;
            const storageName = this.searchingStorageName;

            if (!this.checkLocalStorageKeyExists(storageName)) {
               this.createLocalStorage(storageName); 
            }

            const storedInputs = JSON.parse(localStorage.getItem(storageName));

            const isInLocalStorage = storedInputs.some(item => {
              return item === string;
            });

            if (!isInLocalStorage) {
                storedInputs.push(item);
                localStorage.setItem(storageName, JSON.stringify(storedInputs));
                this.isInStorage = true;
            }
        },
        getInputsFromLocalStorage() {
            if (!this.checkLocalStorageKeyExists(this.searchingStorageName)) {
                return '';
            }                
            const storedInputs = JSON.parse(localStorage.getItem(this.searchingStorageName));                  
            return storedInputs;
        },
    }
}