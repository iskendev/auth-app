import axios from 'axios'

export default {
	namespaced: true,

	state: {
		collections: []
	},

	mutations: {
		SET_ITEM (state, item) {
      state.collections.push(item)
		}
	},

	actions: {
		createItem ({ commit }, item) {
			return axios.post('userarea/movies/collections', item)
				.then(({ data }) => {
					commit('SET_ITEM', data.collection)
				})
        .catch(e => console.log(e))
		}
	}
}