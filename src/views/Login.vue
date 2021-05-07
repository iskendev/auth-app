<template>
  <div class="login">

    <form class="login__form" @submit.prevent="login">
      <div class="login__form--username">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username">
      </div>

      <div class="login__form--password">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
      </div>

      <div class="login__form--btn">
        <button :disabled="isDisabled">Login</button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    data: () => ({
      username: '',
      password: '',
      isDisabled: false
    }),
    methods: {
      login() {
        if (this.username && this.password) {

          this.isDisabled = true

          const credentials = {
            username: this.username,
            password: this.password,
            client_id: "frontend_app",
            client_secret: "secret",
            grant_type: "password"
          }

          this.$store.dispatch('auth/login', credentials)
            .then(() => {
              this.$router.push('/collections')
              this.isDisabled = false
            })
            .catch(e => console.log(e))
        } else {
          alert("Введите данные");
        }
      }
    }
  }
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 60px);

  &__form {
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 300px;
    padding: 10px 30px;

    &--username,
    &--password {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin: 20px 0;
    }

    &--btn {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
