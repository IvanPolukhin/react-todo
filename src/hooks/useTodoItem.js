import { useState } from 'react';

const useTodoItem = (todo, onEdit) => {
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

  return [
    isEditing,
    newTitle,
    setNewTitle,
    newText,
    setNewText,
    handleEdit,
    handleSave,
    handleCancel,
  ];
};

export default useTodoItem;
