<script>
import { state } from '../state'
import Card from '../components/Card.vue'
export default {
    name: 'AppCards',
    components: {
        Card,
    },
    data() {
        return {
            state,
        }
    },

    methods: {

    },

    created() {
        state.fetchData();
    }
}
</script>

<template>
    <section id="cardBox">
        <div class="dropdown container py-4">
            <button class="btn  bg-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Alien
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <div id="cardShowOuterFrame" class="container m-auto my-3">
            <div class="container py-5" id="cardShowInnerFrame">
                <div class="w-75 bg-black m-auto">
                    <h3 style="color : white">Found {{ state.length }} Cards</h3>
                </div>
                <div class="container">
                    <Card />


                </div>
            </div>
        </div>

    </section>
</template>

<style>
#cardBox {
    background-color: darkorange;
    min-height: 1000px;
}

#cardShowOuterFrame {
    height: 100%;
}

#cardShowInnerFrame {
    background-color: white;
    height: 100%;
}
</style>