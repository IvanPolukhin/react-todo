import React, { useState } from 'react';
import MyButtons from '../UI/buttons/MyButtons';
import MyInputs from '../UI/inputs/MyInputs';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && text) {
      onAdd(title, text);
      setTitle('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <MyInputs
        type="text"
        placeholder="Add task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <MyInputs
        type="text"
        placeholder="Add task description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <MyButtons type="add">Add</MyButtons>
    </form>
  );
};

export default TodoForm;
