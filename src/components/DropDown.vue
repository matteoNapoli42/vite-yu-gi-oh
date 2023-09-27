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
    <option value="{{ elem.archetype_name }}"> {{ elem.archetype_name }}</option>
</template>

<style></style>