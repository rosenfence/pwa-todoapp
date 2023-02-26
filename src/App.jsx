import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyle';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Modal from './components/Modal';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #485ec6;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState(0);
  const [localArr, setLocalArr] = useState([]);
  const [step, setStep] = useState(1);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length >= 2) {
      let obj = { id: todoId, todo: todo };
      window.localStorage.setItem(todoId, JSON.stringify(obj));
      setTodos((prev) => [obj, ...prev]);
      setTodoId((prev) => prev + 1);
      handleShowModal();
    } else {
      alert('2글자 이상 적어주세요!');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleChangeStep = () => {
    setStep(step + 1);
  };

  const handleDelete = (e) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== Number(e.target.value)));
    setTodos((prev) => {
      const nextState = prev;
      window.localStorage.clear();
      for (let i = 1; i < prev.length + 1; i++) {
        window.localStorage.setItem(i, JSON.stringify({ id: i, todo: prev[prev.length - i].todo }));
      }
      return nextState;
    });
  };

  //useEffect 함수
  const getLocalArr = () => {
    let i = 0;
    do {
      setLocalArr(localArr.push(i));
      i = i + 1;
    } while (window.localStorage.getItem(i) !== null);
  };

  const getTodoIds = () => {
    setTodoId(localArr.length);
  };

  const getTodos = () => {
    if (window.localStorage.getItem(1) !== null) {
      for (let i = 1; i < localArr.length; i++) {
        setTodos((prev) => [JSON.parse(window.localStorage.getItem(i)), ...prev]);
      }
    } else return;
  };

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    getLocalArr();
    getTodoIds();
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GlobalStyles />
      {step === 0 ? <Landing onChangeStep={handleChangeStep} /> : null}
      {step === 1 ? (
        <Layout>
          {showModal ? <Modal onChange={handleChange} onClick={handleSubmit} onClose={handleShowModal} /> : null}
          <StyledButton onClick={handleShowModal}>할일 추가하기</StyledButton>

          <ul>
            {todos.map((todo) => (
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
        </Layout>
      ) : null}
    </>
  );
};

export default App;
