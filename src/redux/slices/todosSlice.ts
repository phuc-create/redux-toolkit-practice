import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../types'

interface InitialState {
  todos: Array<Todo>
}

const initialState: InitialState = {
  todos: [],
}
const todosSlice = createSlice({
  name: 'todos',
  initialState,
reducers: {
  addTodo: (state, action: PayloadAction<string>) => state,
},
})
export const { addTodo } = todosSlice.actions

export default todosSlice.reducer
