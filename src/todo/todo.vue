<template>
    <section>
        <input type="text" 
            placeholder="请填写相关信息"
            @keyup.enter="addTo"
        >
        <Item 
            :todo="todo"
            v-for="todo in todoDataFilter" :key="todo.id"
            @del="deleteTodo"
            >
        </Item>
        <Tab 
            :filter="filter"
            :todos="todos"
            @toggleSpan="toggleSpan"
        ></Tab>
    </section>
</template>

<script>

import Item from './items.vue'
import Tab from './tabs.vue'

let id = 0

export default {
    data() {
        return {
            todos: [],
            filter: "all",
        }
    },
    components: {
        Item, Tab
    },
    computed: {
        todoDataFilter(){
            switch (this.filter) {
                case "active":
                    return this.todos.filter(todo => todo.completed === false)

                case "completed":
                    return this.todos.filter(todo => todo.completed === true)

                default:
                    return this.todos
            }
        }
    },
    methods: {
        addTo(e){
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            })

            e.target.value = ''
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        toggleSpan(state){
            this.filter = state
        }
    },
}
</script>