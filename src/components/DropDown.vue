<script>
export default {
    name: 'DropDown',
    props: {
        elem: Object
    },

    data() {
        return {
        }
    },

    methods: {
    },
}
</script>

<template>
    <option :value="elem.archetype_name"> {{ elem.archetype_name }}</option>
</template>

<style></style>