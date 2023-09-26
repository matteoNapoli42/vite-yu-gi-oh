import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1&offset=100',
    cards: null,
    fetchData() {
        axios(this.base_url)
            .then(response => {
                console.log(response.data.data);
                this.cards = response.data.data[0].name;
                console.log(this.cards);
            })
    }
})