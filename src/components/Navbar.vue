<template>
  <div class="navbar">
    <h1>No name LLC</h1>
    <span @click="logout" v-if="loggedIn">Logout</span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    methods: {
      logout() {
        this.$router.push('/')
        this.$store.commit('auth/LOGOUT')
      }
    },
    computed: {
      ...mapGetters('auth', ['loggedIn'])
    }
  }
</script>

<style lang="scss">
.navbar {
  width: 100%;
  background-color: salmon;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0 50px;
    font-size: 20px;
    color: white;
  }

  span {
    margin: 0 50px;
    color: white;
    cursor: pointer;
  }
}
</style>