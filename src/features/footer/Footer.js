import React from 'react'

import { StatusFilters } from '../filters/filtersSlice'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> items{suffix} left
    </div>
  )
}

const Footer = () => {
  const colors = []
  const status = StatusFilters.All
  const todosRemaining = 1

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
    </footer>
  )
}

export default Footer
