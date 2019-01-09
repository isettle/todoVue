<template>
    <div>
        <span class="helper">还剩下：{{ totalItem }}条</span>
        <span class="tabs"></span>
        <button
            v-for="(state, index) in states" :key="index"
            @click="toggleSpan(state)"
            :class="[state, filter === state ? 'active' : '']"
        >
            {{state}}
        </button>

        <button @click="clearAll"></button>
    </div>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        totalItem(){
            return this.todos.filter(todo => todo.completed === false).length
        }
    },
    data(){
        return {
            states: ['all', 'active', 'completed']
        }
    },
    methods: {
        toggleSpan(state){
            this.$emit('toggleSpan', state)
        },
        clearAll(){
            alert('clearAll')
        }
    },
}
</script>
