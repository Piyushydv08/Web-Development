import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//Steps : 
// Create store
// wrap app component under Providercreate
// create Slice
// register reducer in store