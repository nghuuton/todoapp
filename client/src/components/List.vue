<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">To Do List App</h1>
          <form @submit.prevent="addNewTask">
            <label for="tasknameinput">Task Name</label>
            <input type="text" id="tasknameinput" class="form-control" placeholder="Add New Task" v-model="taskname"/>
            <button
              v-if="this.isEdit === false "
              type="submit"
              class="btn btn-success btn-block mt-3"  
            >Add</button>
            <button v-else type="button" class="btn btn-success btn-block mt-3" @click="updateTask()">Save</button>
          </form>
          <table class="table"> 
            <tr v-for="todo in todos" :key="todo.id" :title="todo.task_name">
              <td class="text-left">{{todo.task_name}}</td>
              <td class="text-right">
                <button class="btn btn-info mr-2" @click="editTask(todo.task_name, todo.id)">Edit</button>
                <button class="btn btn-danger" @click="deleteTask(todo.id)">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
      id: '',
      taskname: '',
      isEdit: false
    };
  },
  mounted() {
    this.getTask()
  },
  methods: {
    getTask() {
      axios
        .get("http://localhost:3000/api/tasks")
        .then(result => {
          console.log(result.data)
          this.todos = result.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    addNewTask() {
      axios
        .post("http://localhost:3000/api/task", { task_name: this.taskname })
        .then(res => {
          this.taskname = '' 
          this.getTask()
        })
        .catch(err => {
          console.log(err)
        })
    },
    editTask(title, id) {
      this.id = id
      this.taskname = title 
      this.isEdit = true
    },
    updateTask() {
      axios
        .put(`http://localhost:3000/api/task/${this.id}`, { task_name: this.taskname })
        .then(res => {
          this.taskname = '' 
          this.isEdit = false 
          this.getTask()
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTask(id) {
      this.id = id;
      axios.delete(`http://localhost:3000/api/task/${this.id}`).then(res => {
          this.task_name = '' 
          this.getTask()
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>