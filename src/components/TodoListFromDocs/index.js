import React from 'react';
import './todo-list-from-docs.css';

import {
  atom,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const todoListState = atom({
  key: 'todoListState',
  default: [{"value":42},{"value":41}],
})


const TodoListFromDocs = () => {
  const todoList = useRecoilValue(todoListState);
  /*
    notice that useRecoilValue just gets binded to a const..
    instead of giving us destructured vals like a useState hook
    or..more specifically, the useRecoilState hook
   */
  return (
    <div className="todo-list-from-docs">
      <h3>todo list from doks</h3>
      {
        todoList.map((todo,i) => {
          return (
            <span key={i} >{todo.value}</span>
          )
        })
      }
    </div>
  )
    }

export default TodoListFromDocs;
