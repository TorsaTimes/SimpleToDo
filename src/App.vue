<template>
  <div class="bg-gray-600">
        <div>
          <nav
      class="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
      data-te-navbar-ref>
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        <button
          class="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <div
          class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent4"
          data-te-collapse-item>
          <a class="pr-2 text-xl font-semibold text-white" href="#">Ad Como</a> 
          <!-- Left links -->
        <ul
            class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref>
            <li class="p-2" data-te-nav-item-ref>
              <a
                class="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                data-te-nav-link-ref
                >Dashboard</a
              >
            </li>
            <li class="p-2" data-te-nav-item-ref>
              <a
                class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                data-te-nav-link-ref
                >Today</a
              >
            </li>
             <li class="p-2" data-te-nav-item-ref>
                <a
                  class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                  >Next</a
                >
              </li>
            <li class="p-2" data-te-nav-item-ref>
              <a
                class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                data-te-nav-link-ref
                >Projects</a
              >
            </li>
          </ul>
          <!-- Left links -->
       </div>
      </div>
    </nav> 
    
    

    
    </div>



    
    
    <div >
     <div class="bg-gray-600 text-white w-1/2 m-auto mt-12 border-x-1 border-b-1 border-black rounded-lg">
        <div class="text-center py-4"> 
          <p class="text-xl" v-if="openTodos.length > 0"> Open ToDos: {{ openTodos.length }}</p>
          <p class="text-xl" v-else> No Todos, Congratulation </p>
          
          <div class="mt-2 py-1 px-1 space-y-4">
            <div
                class="mb-3 hidden w-full items-center rounded-lg bg-warning-100 text-xl mt-4 py-2 text-warning-800 data-[te-alert-show]:inline-flex bg-red-500"
                role="alert"
                data-te-alert-init
                data-te-alert-show 
                v-if="errorVis">
                  {{ error }}
                <button
                  type="button"
                  class="ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-alert-dismiss
                  aria-label="Close"
                  @click="closeMsg">
                  <span
                    class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-6 w-6">
                      <path
                        fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
            </div>

            <input type="text" class="py-2 w-2/3 text-black  border-black rounded-l-lg" v-model="newTodo"/>
            <button 
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light" 
            class="bg-black py-2 w-1/3  border-black rounded-r-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg" @click="addToDo">Add Todo</button>
          </div>  
        </div>
        <div v-for="(todo, index) in todos" :key="todo.todo" class="py-0.5 px-0.5"> 
          <ToDo 
          :todoprop="todo" 
          :todoindex="index" 
          @toggledone-index="toggleDone" 
          @removetodo-index="deleteTodo"/>
        </div>  
      </div>

    </div>
   
  </div>
</template>

<script>
import ToDo from './components/Todo.vue'

export default {
  name: 'App',
  data: function(){
    return {
      errorVis: false,
      error: "",
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
      this.storeTodos();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.storeTodos();
    },
    addToDo() {
      if(!(this.newTodo.trim() === "")){
        this.errorVis =  false;
        this.todos.push({todo: this.newTodo, done: false});
        this.newTodo = "";
        this.storeTodos();
      }else{
          this.errorVis = true;
          this.error = 'Todo required';
          this.newTodo = "";
          return;
      }
    },
    closeMsg() {
      this.errorVis = false;
    },
    storeTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  mounted() {
    let data = localStorage.getItem("todos");
    if(data !== "" && data !== null){
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
    
  },
  computed: {
    openTodos() {
      const openTodos = this.todos.filter( (todo) => {
        return !todo.done;
      })
      return openTodos
    }
  },
  components: {
    ToDo,
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
