import { createSelector, createSlice } from "@reduxjs/toolkit"

// Slice
const name = "reducer"
const initialState = {}
const reducers = {}
const slice = createSlice({ name, initialState, reducers })

// Selector
const allSelector = createSelector(
  state => state,
  state => state,
)
const selector = { all: state => allSelector(state[name]) }
const reducer = slice.reducer
const actions = slice.actions

export { name, selector, reducer, actions }
