<script  >
import axios from "axios";
export default {
  name: "home",
  mounted() {
    this.getUser();
    console.log("My name is Dai Cat");
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUser() {
      await axios
        .get("http://localhost:3000/api/contacts")
        .then((res) => {
          console.log(res);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(">> err", err);
        });
    },
  },
};
</script>

<template>
  <div>
    <table class="table w-75 mx-auto my-5 border text-center">
      <thead>
        <tr>
          <th scope="col"># ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user._id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button class="btn btn-primary mx-1">View</button>
            <button class="btn btn-warning mx-1">Update</button>
            <button class="btn btn-danger mx-1">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
