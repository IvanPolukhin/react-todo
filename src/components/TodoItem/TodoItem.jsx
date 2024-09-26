import React from 'react';
import MyButtons from '../../UI/buttons/MyButtons';
import useTodoItem from '../../hooks/useTodoItem';
import '../TodoItem/TodoItem.css';

const TodoItem = ({ todo, index, onToggle, onDelete, onEdit }) => {
  const [
    isEditing,
    newTitle,
    setNewTitle,
    newText,
    setNewText,
    handleEdit,
    handleSave,
    handleCancel,
  ] = useTodoItem(todo, onEdit);

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
      <div className={isEditing ? 'edit-container' : 'todo-details'}>
        {isEditing ? (
          <>
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
          </>
        ) : (
          <>
            <h4>{todo.title}</h4>
            <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
          </>
        )}
      </div>

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
