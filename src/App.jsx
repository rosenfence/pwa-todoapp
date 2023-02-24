import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyle';
import Layout from './components/Layout';
import Landing from './components/Landing';

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
          {showModal ? (
            <div>
              <form>
                <label>
                  할 일을 추가해주세요!
                  <input onChange={handleChange} type='text' placeholder='입력해주세요' required />
                </label>
                <button onClick={handleSubmit}>확인</button>
                <button onClick={handleShowModal}>취소</button>
              </form>
            </div>
          ) : null}

          <ul>
            {todos.length > 0
              ? todos.map((todo) => (
                  <li key={todo.id}>
                    <div>{todo.todo}</div>
                  </li>
                ))
              : null}
          </ul>

          <button onClick={handleShowModal}>{showModal ? '입력창 닫기' : '할일 추가하기'}</button>
        </Layout>
      ) : null}
    </>
  );
};

export default App;
