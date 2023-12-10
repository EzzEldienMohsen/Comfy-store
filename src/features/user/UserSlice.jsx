/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

var themes = {
  winter: 'winter',
  dracula: 'dracula',
}
var getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}

var getThemeFromStorage = () => {
  var theme = localStorage.getItem('theme') || themes.winter
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}
var initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromStorage(),
}
var userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload)
      var user = { ...action.payload.user, token: action.payload.jwt }
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      toast.success('logged out successfully')
    },
    toggleTheme: (state) => {
      var { dracula, winter } = themes
      state.theme = state.theme === dracula ? winter : dracula
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})
export var { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
