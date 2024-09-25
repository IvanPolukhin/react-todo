import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index + 1}
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
