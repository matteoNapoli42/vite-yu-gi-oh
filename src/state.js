import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: null,
    fetchData() {
        axios(this.base_url)
            .then(response => {
                console.log(response);
                this.cards = response.data.results
            })
    }
})