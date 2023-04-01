<template>
  <div class="flex justify-between items-center py-2 px-2 rounded-lg" :class="{'bg-green-500': this.todo.done, 'bg-red-500': !this.todo.done}">
    <h1 class="cursor-pointer" @click="toggleTodo">{{ todo.todo }}</h1>
    <button class="bg-black py-1 px-1 rounded" @click="removeTodo">Delete Todo</button>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props:  ["todoprop", "todoindex"],
  data: function() {
    return {
      todo: this.todoprop,
    };
  },
  methods: {
    toggleTodo(){
      this.$emit("toggledone-index", this.todoindex);
    },
    removeTodo(){
      this.$emit("removetodo-index", this.todoindex)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
