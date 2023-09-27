import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    archetype_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: null,
    cardsArchetype: null,
    fetchData() {
        axios(this.base_url)
            .then(response => {
                console.log(response.data.data);
                this.cards = response.data.data;
                console.log("STATE", this.cards);
            })
    },

    fetchArchetype() {
        axios(this.archetype_url)
            .then(response => {
                console.log(response.data);
                this.cardsArchetype = response.data;
                console.log("STATE ARCHETYPES", this.cardsArchetype);
            })
    }
})