import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Todo } from '@/types/todo'

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        todos: ref<Todo[]>([
            { name: 'test1', completed: false }, 
            { name: 'test2', completed: false },
            { name: 'test3', completed: true }
        ]),
    }),
    getters: {
        allTodos(): Todo[] {
            return this.todos
        },
        activeTodos(): Todo[] {
            return this.todos.filter((todo) => !todo.completed)
        },
        completedTodos(): Todo[] {
            return this.todos.filter((todo) => todo.completed)
        },
    },
    actions: {
        addTodo(name: string) {
            if (!name) return
            this.todos.push({ name, completed: false } as Todo)
        },
        completeTodo(todo: Todo) {
            todo.completed = true;
        },
        toggleTodo(todo: Todo) {
            todo.completed = !todo.completed;
        },
        removeTodo(todo: Todo) {
            this.todos = this.todos.filter((t) => t !== todo)
        },
        deleteCompletedTodos() {
            this.todos = this.todos.filter((todo) => !todo.completed)
        }
    }
});