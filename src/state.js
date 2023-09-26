import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    cards: null,
    fetchData() {
        axios(this.base_url)
            .then(response => {
                console.log(response.data.data);
                this.cards = response.data.data;
                console.log("STATE", this.cards);
            })
    }
})