import React from 'react';
import TodoListItem from './todo-list-item';

const ToDoList = () => {
    return (
        <ul>
            <TodoListItem/>
            <TodoListItem/>
        </ul>
    );
};

export default ToDoList;