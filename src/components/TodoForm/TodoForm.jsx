import React from 'react';
import MyButtons from '../../UI/buttons/MyButtons';
import MyInputs from '../../UI/inputs/MyInputs';
import useTodoForm from '../../hooks/useTodoForm';
import '../TodoForm/TodoForm.css';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle, text, setText, handleSubmit, handleOnChange] =
    useTodoForm(onAdd);

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <MyInputs
        type="text"
        placeholder="Add task title"
        value={title}
        onChange={handleOnChange(setTitle)}
      />
      <MyInputs
        type="text"
        placeholder="Add task description"
        value={text}
        onChange={handleOnChange(setText)}
      />
      <MyButtons type="add">Add</MyButtons>
    </form>
  );
};

export default TodoForm;
