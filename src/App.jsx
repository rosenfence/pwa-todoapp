import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyle';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Modal from './components/Modal';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState(0);
  const [localArr, setLocalArr] = useState([]);
  const [step, setStep] = useState(0);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { id: todoId, todo: todo };
    window.localStorage.setItem(todoId, JSON.stringify(obj));
    setTodos((prev) => [obj, ...prev]);
    setTodoId((prev) => prev + 1);
    handleShowModal();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleChangeStep = () => {
    setStep(step + 1);
  };

  const handleDelete = (e) => {
    console.log(e);
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

  useEffect(() => {
    getLocalArr();
    getTodoIds();
    getTodos();
  }, []);

  return (
    <>
      <GlobalStyles />
      {step === 0 ? <Landing onChangeStep={handleChangeStep} /> : null}
      {step === 1 ? (
        <Layout>
          {showModal ? <Modal onChange={handleChange} onClick={handleSubmit} onClose={handleShowModal} /> : null}
          <button onClick={handleShowModal}>할일 추가하기</button>

          <ul>
            {todos.length > 0
              ? todos.map((todo) => (
                  <li key={todo.id}>
                    <span>
                      {todo.todo}
                      <button>🖋️</button>
                      <button onClick={handleDelete}>❎</button>
                    </span>
                  </li>
                ))
              : null}
          </ul>
        </Layout>
      ) : null}
    </>
  );
};

export default App;
