import axios from 'axios'

export default {
	namespaced: true,

	state: {
		user: null
	},

	getters: {
		loggedIn (state) {
			return !!state.user
		}
	},

	mutations: {
		SET_USER_DATA (state, userData) {
			state.user = userData
			localStorage.setItem('user', JSON.stringify(userData))
			axios.defaults.headers.common['Authorization'] = `Bearer ${userData.access_token}`
		},
    LOGOUT() {
      localStorage.removeItem('user')
			axios.defaults.headers.common['Authorization'] = ''
			location.reload()
    }
	},

	actions: {
		login ({ commit }, credentials) {
			return axios.post('token', credentials)
				.then(({ data }) => {
					commit('SET_USER_DATA', data)
				})
		},
	}
}