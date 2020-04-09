<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 mx-auto">
        <form @submit.prevent="register">
          <h1 class="h2 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input
              type="text"
              v-model="first_name"
              name="first_name"
              class="form-control"
              placeholder="Enter Fist Name"
            />
          </div>
          <div class="form-group">
            <label for="first_name">Last Name</label>
            <input
              type="text"
              v-model="last_name"
              name="last_name"
              class="form-control"
              placeholder="Enter Last Name"
            />
          </div>
          <div class="form-group">
            <label for="first_name">Email</label>
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
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:3000/user/register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        })
        .then(res => {
            this.first_name = "",
            this.last_name = "",
            this.email = "",
            this.password = "",
            this.$router.push("/Login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>