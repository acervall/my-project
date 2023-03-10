import { createStore } from 'vuex'

const mutations = {
  saveToken(state, result) {
    console.log('saveToken from store')
    state.token = result
    localStorage.setItem('token', result)
  },
  resetToken(state) {
    console.log('resetToken from store')
    state.token = null
    localStorage.removeItem('token')
    //this.$router.push('/home')
  },
  clearDeparture(state) {
    state.Departure = []
  },
  searchDepartures(state, result) {
    state.DepartureBoard = result.DepartureBoard
    state.Departure = result.DepartureBoard.Departure
    state.StopLocation = []
  },
  updateLocation(state, result) {
    state.StopLocation = []
    state.LocationList = result.LocationList

    for (let n = 0; n < 5; n++) {
      const element = result.LocationList.StopLocation[n]
      state.StopLocation.push(element)
    }
  },
  clearUser(state) {
    state.username = null
    state.avatar = null
  },
  createUser(state, user) {
    state.username = user
    localStorage.setItem('username', user)
  },
  changeAvatar(state, n) {
    const newAv = `../../assets/avatar/avatar${n}.jpg`
    state.avatar = newAv
    localStorage.setItem('avatar', newAv)
  }
}

const state = {
  token: localStorage.getItem('token'),
  LocationList: null,
  StopLocation: [],
  DepartureBoard: null,
  Departure: null,
  username: localStorage.getItem('username'),
  avatar: localStorage.getItem('avatar')
}

export default createStore({
  mutations,
  state,
  strict: true
})
