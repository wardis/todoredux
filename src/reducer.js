const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build a todo App', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
