<template>
  <div class="item">
    <ul>
      <li v-for="(item, i) in collections" :key="i">
        <span>Created: {{ item.date }}</span>
        <span>Title: {{ item.title }}</span>
        <span>Description: {{ item.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState('collections', ['collections'])
    },
  }
</script>

<style lang="scss">
.item {

  ul {
    margin: 0;

    li {
      display: flex;
      flex-direction: column;
      border: 1px solid #ddd;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
  }

}
</style>