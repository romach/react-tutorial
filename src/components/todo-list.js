import React from 'react';
import TodoListItem from './todo-list-item';

const ToDoList = () => {
    return (
        <ul>
            <li><TodoListItem important label="Learn React"/></li>
            <li><TodoListItem label="Drink coffee"/></li>
        </ul>
    );
};

export default ToDoList;