<template>
  <div class="container fluid">
    <div class="row">
      <div class="col-xs-12 col-md-6 mt-5 mx-auto">
        <form @submit.prevent="login">
          <h1 class="h2 mb-3 font-weight-normal">Please sign in</h1>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              v-model="email"
              name="email"
              class="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              name="password"
              class="form-control"
              placeholder="Enter Your Password"
            />
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./EventBus";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/user/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data);
          this.email = "",
          this.password = "",
            this.$router.push("/Profile");
        })
        .catch(err => {
          console.log(err);
        });
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  }
};
</script>

<style>
</style>