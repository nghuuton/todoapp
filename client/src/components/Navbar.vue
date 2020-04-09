<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rouded">
    <button
      class="navbar-toggle"
      type="button"
      data-toggle="colllapse"
      data-target="#navbar1"
      aria-controls="navbar1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggle-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-success" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-link text-success" to="/list">List</router-link>
        </li>
        <li v-if="auth=='' && (token==null || token==undefined)" class="nav-item">
          <router-link class="nav-link text-success" to="/Login">Login</router-link>
        </li>
        <li v-if="auth=='' && (token==null || token==undefined)" class="nav-item">
          <router-link class="nav-link text-success" to="/Register">Register</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item">
          <router-link class="nav-link text-success" to="/Profile">Profile</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item">
          <a class="nav-link text-success" href @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import EventBus from "./EventBus";
export default {
  data() {
    return {
      auth: "",
      token: localStorage.usertoken
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken");
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
};
</script>

<style>
</style>