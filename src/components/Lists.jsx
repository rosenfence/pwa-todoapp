import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaPen } from 'react-icons/fa';

const StyledUl = styled.ul`
  width: 100%;
  padding: 0px 20px 0px 20px;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const StyledButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRad};

  box-shadow: inset 0 0 5px #333;
`;

const Lists = ({ lists, handleDelete }) => {
  return (
    <StyledUl>
      {lists.map((todo) => (
        <StyledLi key={todo.id}>
          <span>
            <input type='checkbox' />
            <label style={{ marginRight: '5px' }} />
            {todo.todo}
          </span>
          <span>
            <StyledButton backgroundColor='#01B7ED' borderRad='10px 0px 0px 10px'>
              <FaPen style={{ color: 'white' }} />
            </StyledButton>
            <StyledButton tbr backgroundColor='#D81C2F' borderRad='0px 10px 10px 0px' value={todo.id} onClick={handleDelete}>
              <FaTimes style={{ color: 'white' }} />
            </StyledButton>
          </span>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default Lists;
