import React, { useState } from 'react';
import MyButtons from '../UI/buttons/MyButtons';

const TodoItem = ({ todo, index, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, newTitle, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(todo.title);
    setNewText(todo.text);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox-container">
        <div>{index}. </div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Edit title"
          />
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Edit description"
          />
        </div>
      ) : (
        <div className="todo-details">
          <h4>{todo.title}</h4>
          <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
        </div>
      )}
      <div className="button-group">
        {isEditing ? (
          <>
            <MyButtons type="save" onClick={handleSave}>
              Save
            </MyButtons>
            <MyButtons type="cancel" onClick={handleCancel}>
              Cancel
            </MyButtons>
          </>
        ) : (
          <>
            <MyButtons type="edit" onClick={handleEdit}>
              Edit
            </MyButtons>
            <MyButtons type="delete" onClick={() => onDelete(todo.id)}>
              Delete
            </MyButtons>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
