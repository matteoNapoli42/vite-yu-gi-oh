<script>
import { state } from '../state'
export default {
    name: 'AppCards',
    data() {
        return {
            state
        }
    },
    methods: {

    },

    created() {
        state.fetchData()
    }
}
</script>

<template>
    <section id="cardBox">
        <div class="dropdown container py-4">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <div id="cardShowOuterFrame" class="container m-auto my-3">
            <div class="container py-5" id="cardShowInnerFrame">
                <div class="container">
                    <div class="w-75 bg-black m-auto">
                        <h3 style="color : white">Found X Cards</h3>
                    </div>
                    <div class="container w-75 flex-wrap px-0 d-flex gap-4">
                        <div class="col-2">
                            <div>
                                <img :src="state.cards" alt="">
                            </div>
                            <div style="background-color: orange;">
                                <h6>{{ state.cards }}</h6>
                                <span>Tipo Carta</span>
                            </div>

                        </div>
                        <div class="col-2">
                            <div>Immagine Carta</div>
                            <div style="background-color: orange;">
                                <h6>Nome Carta</h6>
                                <span>Tipo Carta</span>
                            </div>
                        </div>
                        <div class="col-2">
                            <div>Immagine Carta</div>
                            <div style="background-color: orange;">
                                <h6>Nome Carta</h6>
                                <span>Tipo Carta</span>
                            </div>
                        </div>
                        <div class="col-2">
                            <div>Immagine Carta</div>
                            <div style="background-color: orange;">
                                <h6>Nome Carta</h6>
                                <span>Tipo Carta</span>
                            </div>
                        </div>
                        <div class="col-2">
                            <div>Immagine Carta</div>
                            <div style="background-color: orange;">
                                <h6>Nome Carta</h6>
                                <span>Tipo Carta</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
#cardBox {
    background-color: orange;
    height: 1300px;
}

#cardShowOuterFrame {
    height: 100%;
}

#cardShowInnerFrame {
    background-color: white;
    height: 100%;
}
</style>