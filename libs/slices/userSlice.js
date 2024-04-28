import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        updateUserInfo: (state, action) => {
            state.isLoggedIn = action.payload.value
        }
    }
})
export default userSlice.reducer
export const { updateUserInfo } = userSlice.actions