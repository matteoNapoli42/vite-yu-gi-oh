<script>
export default {
    name: 'DropDown',
    props: {
        elem: Object
    },

    data() {
        return {
            selectedValue: "",
        }
    },

    methods: {
        getValue() {
            console.log(this.value);
        }

    },
}
</script>

<template>
    <option :value="elem.archetype_name"> {{ elem.archetype_name }}
    </option>
</template>

<style></style>