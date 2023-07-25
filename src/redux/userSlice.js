import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
      console.log(state.user)
    },
    logout:(state)=>{
        state.user=null
        console.log(state.user)
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser,logout } = userSlice.actions

export default userSlice.reducer