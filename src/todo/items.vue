<template>
    <div :class="['todo-item', todo.completed ? 'completed' : '']">
        <input 
            type="checkbox"
            v-model="todo.completed"
        >
        <label for="">{{todo.content}}</label>
        <button
            class='destory'
            @click="deleteTo"
        >aaaaa</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTo(){
            this.$emit('del', this.todo.id)
        }
    },
}
</script>
