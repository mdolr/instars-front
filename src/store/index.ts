import { createStore } from 'vuex';
import router from '@/router/index';
import axios from '@/plugins/axios';

export default createStore({
  state: {
    credentials: null,
    user: null,
  },
  mutations: {
    setCredentials(state, credentials) {
      state.credentials = credentials;
    },
    removeCredentials(state) {
      state.credentials = null;
    },
    setUser(state, user) {
      state.user = user;
    },
    removeUser(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit, state }, credentials) {
      // Firstly check if we have access to the Google JWT Token
      if (credentials?.credential) {
        // Set the global axios Authorization header to our bearer JWT token
        axios.defaults.headers.common = {
          Authorization: `Bearer ${credentials.credential}`,
        };

        try {
          // Then retrieve user data from our API
          const user = await axios.get('/users/me');

          // Commit the credentials and user data to the store
          commit('setCredentials', credentials);
          commit('setUser', user.data);

          router.push('/home');

          // Save the token to keep the session going through refreshes
          localStorage.setItem('token', JSON.stringify(credentials.credential));
        } catch (error) {
          axios.defaults.headers.common = {
            Authorization: '',
          };

          console.error(error);
        }
      }
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
    getUser(state) {
      return (state as any).user;
    },
  },
  modules: {},
});
