import React from 'react';
import styled from 'styled-components';

const Lists = ({ lists, handleDelete }) => {
  return (
    <ul>
      {lists.map((todo) => (
        <li key={todo.id}>
          <span>
            {todo.todo}
            <button>☑️</button>
            <button value={todo.id} onClick={handleDelete}>
              ❎
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Lists;
