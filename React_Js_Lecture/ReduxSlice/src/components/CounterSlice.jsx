import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
  value: 0
}

console.log(initialState.value);

const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment : (state) => {
      state.value += 1
    },
    decrement : (state) => {
      state.value -= 1
    },
    reset : (state) => {
      state.value = initialState.value
    },
    incrementByAmount: (state , action) => {
      state.value += action.payload
    }
  }
})

export const {increment , decrement , reset , incrementByAmount} = counterSlice.actions

export default counterSlice.reducer

export const store = configureStore({
  reducer:counterSlice.reducer,
  middleware:(getDefualtMiddleware) => getDefualtMiddleware().concat(logger)
})