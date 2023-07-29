<script lang="ts" setup>
import { computed, ref } from 'vue'

import CustomInput from '@/components/CustomInput.vue'
import CustomButton from '@/components/CustomButton.vue'
import TodoList from '@/components/TodoList.vue'

import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const props = defineProps({
    type: String
})

const items = computed(() => {
    switch (props.type) {
        case 'active':
            return todoStore.activeTodos
        case 'completed':
            return todoStore.completedTodos
        default:
            return todoStore.allTodos
    }
});

const new_todo = ref('')
const addTodo = () => {
    todoStore.addTodo(new_todo.value);
    new_todo.value = '';
}
</script>

<template>
    <div>
        <div v-if="type!=='completed'" class="add">
            <custom-input v-model="new_todo" />
            <custom-button @click="addTodo" />
        </div>
        <div v-if="!items" class="notFound">
            No todos yet
        </div>
        <TodoList :items="items" :type="type"/>
    </div>
</template>

<style scoped lang="scss">
.add {
    margin-top: 18px;
    display: flex;
    gap: 25px;
    margin-bottom: 32px;
}
.notFound {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>
