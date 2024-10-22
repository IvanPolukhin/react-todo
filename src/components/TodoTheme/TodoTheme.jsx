import React from 'react';

const TodoTheme = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {isDarkMode ? 'Ligth' : 'Dark'}
    </button>
  );
};

export default TodoTheme;
