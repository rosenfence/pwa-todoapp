import React, { useState } from 'react';
import GlobalStyles from './GlobalStyle';
import Layout from './components/Layout';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 3,
      todo: '할일3',
    },
    {
      id: 2,
      todo: '할일2',
    },
    {
      id: 1,
      todo: '할일1',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState(4);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [{ id: todoId, todo: todo }, ...prev]);
    setTodoId((prev) => prev + 1);
    handleShowModal();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        {showModal ? (
          <div>
            <form>
              <p>
                <label>
                  할 일을 추가해주세요!
                  <input onChange={handleChange} type='text' placeholder='입력해주세요' required />
                </label>
              </p>
              <button onClick={handleSubmit}>확인</button>
              <button
                onClick={() => {
                  handleShowModal();
                }}
              >
                취소
              </button>
            </form>
          </div>
        ) : null}

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div>
                {todo.id} : {todo.todo}
              </div>
            </li>
          ))}
        </ul>

        <button onClick={handleShowModal}>할일 추가하기</button>
      </Layout>
    </>
  );
};

export default App;
