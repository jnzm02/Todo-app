<script lang="ts" setup>
const props = defineProps({
    new_todo: String
})
defineEmits(['update:modelValue'])
</script>

<template>
    <input type="text" placeholder="add details" @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped lang="scss">
input {
    font-family: "Montserrat", sans-serif;
    border: 1px solid #E5E5E5;
    border-radius: 12px;
    font-weight: 400;
    padding: 20px 12px;
    width: calc(100% - 24px);
    &:focus {
        outline: none;
    }
    ::placeholder {
        color: #828282;
    }
}
</style>