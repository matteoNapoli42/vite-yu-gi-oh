<script>
export default {
    name: 'DropDown',
    props: {
        elem: Object
    },

    created() {
        console.log(this.elem);

    }
}
</script>

<template>
    <li class="overflow-hidden"><a class="dropdown-item overflow-hidden" href="#">{{ elem.archetype_name }}</a></li>
</template>

<style></style>