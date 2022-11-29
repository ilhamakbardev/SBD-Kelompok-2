<template>
    <div class="container">
        <h1>---Users list---</h1>
        <div style="margin-bottom: 20px;" v-for="user, i in users" :key="i">
            <div class="profile">
                <div>
                    <div class="profile-data-row">
                        <p style="margin-right: 10px;">Name:</p>
                        <p>{{ user.name }}</p>
                    </div>
                    <div class="profile-data-row">
                        <p style="margin-right: 10px;">Address:</p>
                        <p>{{ user.address }}</p>
                    </div>
                </div>
                <div class="button-profile">
                    <button class="button-element" style="margin-bottom: 10px;"
                    @click="detailUser(user.id)">Detail</button>
                    <button class="button-element" style="background-color: red;"
                    @click="deleteUser(user.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isProxy, toRaw } from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
    detailUser (id) {
      this.$router.push(`/users/${id}`)
    },
    deleteUser (id) {
      // Delete API
      axios.delete(`http://localhost:5055/users/${id}`)
        .then(_ => {
          console.log(`Delete Feature for user id = ${id}`)
        })
        .catch(_ => {
          console.log('error happened')
        })
      // Delete client data
      let rawData = this.users

      if (isProxy(rawData)) {
        rawData = toRaw(rawData)
      }
      const finalData = rawData.filter(user => user.id !== id)
      this.users = [...finalData]
    }
  },
  created () {
    axios.get('http://localhost:5055/users')
      .then(({ data }) => {
        this.users = data
      })
      .catch(_ => {
        console.log('error happened')
      })
  }
}
</script>
<style scoped>
.container {
    margin: 100px;
    border: 1px solid black;
    height: 800px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profile {
    display: flex;
    align-items: center;
}
.button-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button-element {
    padding: 10px 30px;
    background-color: #80BDE3;
    color: white;
}
.profile-data-row {
    width: 300px;
    display: flex;
    font-size: 20px;
}
</style>
