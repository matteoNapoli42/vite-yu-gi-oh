<script>
import { state } from '../state'
import Card from '../components/Card.vue'
import DropDown from '../components/DropDown.vue'
export default {
    name: 'AppCards',
    components: {
        Card,
        DropDown
    },
    data() {
        return {
            state,
            selectedValue: "",
        }
    },

    methods: {
        getValue(elem) {
            console.log(elem);
        }
    },

    created() {
        state.fetchData();
        state.fetchArchetype();
    }
}
</script>

<template>
    <section id="cardBox">
        <div class="dropdown container py-4">
            <select class="form-select w-25" aria-label="Default select example" v-model="selectedValue"
                @change="getValue(selectedValue)">
                <option selected>Open this select menu</option>
                <DropDown v-for="archetype in state.cardsArchetype" :elem="archetype" />
            </select>
        </div>


        <div id="cardShowOuterFrame" class="container m-auto my-3">
            <div class="container py-5" id="cardShowInnerFrame">
                <div class="w-75 bg-black m-auto">
                    <h3 style="color : white">Found {{ state.length }} Cards</h3>
                </div>
                <div class="container">
                    <div class="container w-75 flex-wrap px-0 d-flex gap-4">
                        <Card v-for="card in state.cards" :elem="card" />
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style>
#cardBox {
    background-color: darkorange;
    min-height: 1080px;
}

#cardShowOuterFrame {
    height: 100%;
}

#cardShowInnerFrame {
    background-color: white;
    height: 100%;
}
</style>