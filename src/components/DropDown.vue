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
    <li><a class="dropdown-item" href="#">{{ elem.archetype_name }}</a></li>
</template>

<style></style>