import React, { useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  useAddTodoMutation,
  useGetTodosQuery,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} from "../../Query/ExtendedTodoQuery";

import {
  FormContainer,
  Icons,
  LabelContainer,
  TodoList,
  TodosContainer,
} from "../../Styles/Todo.styles";
import { useSelector } from "react-redux";

export default function Todo() {
  const toggleModes = useSelector((state) => state.toggleMode.darkMode);

  const { data: todos, isLoading, error, isSuccess } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [removeTodo] = useRemoveTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const inputRef = useRef();

  function addTodoToList(e) {
    e.preventDefault();
    addTodo({ todo: inputRef.current.value });
    inputRef.current.value = "";
  }

  return (
    <div>
      <FormContainer>
        <form onSubmit={addTodoToList}>
          <LabelContainer>
            <label htmlFor="todo">Add Todo</label>
            <input type="text" name="todo" id="todo" ref={inputRef} />
            <button type="submit"> Add</button>
          </LabelContainer>
        </form>
      </FormContainer>
      <TodosContainer>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something Went Wrong</h1>}
        {isSuccess && (
          <>
            {todos.map((list) => {
              return (
                <TodoList key={list._id} $mode={toggleModes}>
                  <h3>{list.todo}</h3>
                  <Icons $red onClick={() => removeTodo(list._id)}>
                    <DeleteIcon />
                  </Icons>

                  <Icons
                    onClick={() => updateTodo({ id: list._id, todo: prompt() })}
                  >
                    <EditIcon />
                  </Icons>
                </TodoList>
              );
            })}
          </>
        )}
      </TodosContainer>
    </div>
  );
}
