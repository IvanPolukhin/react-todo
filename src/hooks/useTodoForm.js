import { useState } from 'react';

export const useTodoForm = (onAdd) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleOnChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && text.trim()) {
      onAdd(title, text);
      setTitle('');
      setText('');
    }
  };

  return [title, setTitle, text, setText, handleSubmit, handleOnChange];
};

export default useTodoForm;
