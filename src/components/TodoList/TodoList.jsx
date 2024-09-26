import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({
  todos,
  currentPage,
  itemsPage,
  onToggle,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={(currentPage - 1) * itemsPage + index + 1}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
