<template>
  <div class="animate-wiggle selection:cursor-pointer flex justify-between items-center py-2 px-2 rounded-lg" :class="{'bg-green-500': this.todo.done, 'bg-red-500 line-through': !this.todo.done}"
              @click="toggleTodo(); wiggle($event.target);"
              >
    <h1 class="cursor-pointer" >{{ todo.todo }}</h1>
    <button class="bg-black py-1 px-1 rounded" @click="removeTodo">
    <svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
  </button>
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
    },
     wiggle(target) {
      target.classList.add('animate-wiggle');
      setTimeout(() => {
        target.classList.remove('animate-wiggle');
      }, 100);
    },

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
<style>
.animate-wiggle {
  animation: wiggle 0.1s ease-in-out;
}

@keyframes wiggle {
  0% {
    transform: rotateZ(-2deg);
  }

  50% {
    transform: rotateZ(2deg);
  }

  100% {
    transform: rotateZ(-2deg);
  }
}
</style>
