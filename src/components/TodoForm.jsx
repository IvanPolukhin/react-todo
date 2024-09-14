import React, { useState } from 'react';
import MyButtons from '../UI/buttons/MyButtons';
import MyInputs from '../UI/inputs/MyInputs';

const TodoForm = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <MyInputs
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <MyButtons type="add">Add</MyButtons>
    </form>
  );
};

export default TodoForm;
