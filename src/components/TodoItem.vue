<script lang="ts" setup>
import type { Todo } from '@/types/todo';
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    item: { 
        type: Object as () => Todo,
        required: true
    },
    deleteActive: Boolean
})

const toggleCheckbox = (item: Todo) => {
    todoStore.toggleTodo(item)
};
</script>

<template>
    <div class="item">
        <input type="checkbox" :checked="item.completed" @click="toggleCheckbox(item)">
        <div :class="{ done: item.completed }">{{ item.name }}</div>
        <img v-if="deleteActive" src="../assets/icons/bin.svg" alt="bin" @click="todoStore.removeTodo(item)">
    </div>
</template>

<style scoped lang="scss">
.item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 10px;
    input {
        width: 20px;
        height: 20px;
    }
    h4 {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #4F4F4F;
    }
}

.done {
    text-decoration: line-through;
}
</style>
