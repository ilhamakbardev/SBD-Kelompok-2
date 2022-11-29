<template>
    <div class="container">
        <button class="button-home" @click="goBackHome">Home</button>
        <h1>Profile data user {{ userId }}</h1>
        <div class="profile-data-row">
            <p style="margin-right: 10px;">Name:</p>
            <p>{{ user.name }}</p>
        </div>
        <div class="profile-data-row">
            <p style="margin-right: 10px;">Address:</p>
            <p>{{ user.address }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {}
    }
  },
  computed: {
    userId () {
      return this.$route.params.id
    }
  },
  methods: {
    goBackHome () {
      this.$router.push('/users')
    }
  },
  created () {
    axios.get(`http://localhost:5055/users/${this.userId}`)
      .then(({ data }) => {
        this.user = data
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
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button-home {
    padding: 10px 30px;
    background-color: #80BDE3;
    color: white;
    margin-bottom: 20px;
}
.profile-data-row {
    width: 300px;
    display: flex;
    font-size: 20px;
}
</style>
