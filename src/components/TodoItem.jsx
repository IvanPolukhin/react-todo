import React, { useState } from 'react';
import MyButtons from '../UI/buttons/MyButtons';

const TodoItem = ({ todo, index, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
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
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <div className="button-group">
            <MyButtons type="save" onClick={handleSave}>
              Save
            </MyButtons>
            <MyButtons type="cancel" onClick={handleCancel}>
              Cancel
            </MyButtons>
          </div>
        </div>
      ) : (
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      )}
      {!isEditing && (
        <div className="button-group">
          <MyButtons type="edit" onClick={handleEdit}>
            Edit
          </MyButtons>
          <MyButtons type="delete" onClick={() => onDelete(todo.id)}>
            Delete
          </MyButtons>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
