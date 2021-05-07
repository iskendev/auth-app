<template>
  <div class="collections">

    <form class="collections__form" @submit.prevent="createItem">
      <div class="collections__form--title">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title">
      </div>

      <div class="collections__form--description">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" rows="5" />
      </div>

      <div class="collections__form--btn">
        <button :disabled="isDisabled">Create</button>
      </div>
    </form>

    <Item />
  </div>
</template>

<script>
  import Item from '../components/Item'
  export default {
    components: { Item },
    data: () => ({
      title: '',
      description: '',
      isDisabled: false
    }),
    methods: {
      createItem() {
        if (this.title && this.description) {

          this.isDisabled = true

          const item = {
            title: this.title,
            description: this.description,
          }

          this.$store.dispatch('collections/createItem', item)
            .then(() => {
              this.title = ''
              this.description = ''
              this.isDisabled = false
            })
        } else {
          alert("Введите данные");
        }
      }
    }
  }
</script>

<style lang="scss">
.collections {
  display: flex;
  margin: 50px;

  &__form {
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 500px;
    padding: 10px 30px;

    &--title,
    &--description {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin: 20px 0;
    }

    &--description {
      textarea {
        outline: none;
        border: 1px solid #bbb;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
      }
     }

    &--btn {
      width: 100%;
      text-align: center;
    }
  }
}

</style>