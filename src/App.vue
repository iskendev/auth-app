<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>


<script>
  import Navbar from './components/Navbar'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
    height: 100vh;
    font-family: 'Noto Sans JP', sans-serif;

    input {
      font-size: 16px;
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 5px;
      font-family: 'Noto Sans JP', sans-serif;

      &:focus {
        outline: none;
      }
    }

    button {
      display: inline-block;
      width: 50%;
      margin: 20px 0 10px 0;
      padding: 10px 15px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: #89CFF0;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background-color: #61c4f1;
      }
    }
  }
</style>
