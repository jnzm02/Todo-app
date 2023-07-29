<script lang="ts" setup>
import { type Todo } from '@/types/todo'
import TodoItem from '@/components/TodoItem.vue'

import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

const props = defineProps({
    items: <Todo[]>[],
    type: String
})
</script>

<template>
    <div v-for="(item, index) in items" :key="index" >
        <todo-item :item="item" style="margin-top: 20px;" :deleteActive="type === 'completed'"/>
    </div>
    <div class="bottom" v-if="type==='completed' && items.length">
        <span class="deleteButton" @click="todoStore.deleteCompletedTodos">
            <img src="../assets/icons/bin_small.svg" alt="bin">delete all
        </span>
    </div>
</template>

<style scoped lang="scss">
.deleteButton {
    display: flex;
    color: white;
    border-radius: 4px;
    text-align: right;
    padding: 12px 26px;
    background: #EB5757;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.bottom {
    margin-top: 34px;
    display: flex;
    align-items: center;
    justify-content: end;
}
</style>
