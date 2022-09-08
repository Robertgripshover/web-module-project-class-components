import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
 