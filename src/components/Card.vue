<script>
export default {
    name: "Card",
    props: {
        elem: Object,
    },

    created() {

    }
}

</script>
<template>
    <div class="col-2 cardDetails d-flex flex-column text-center" style="background-color: darkorange;">
        <img :src="elem.card_images[0].image_url_small" alt="">
        <h6 style="color : red">{{ elem.name }}</h6>
        <span>{{ elem.archetype }}</span>

    </div>
</template>


<style></style>