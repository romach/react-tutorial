import React from 'react';
import TodoListItem from './todo-list-item';

const ToDoList = ({todos}) => {
    const todoElements = todos.map(
        todoItem => {
            return <li>
                <TodoListItem {...todoItem}/>
                {/* same as
                <TodoListItem
                    important={todoItem.important}
                    label={todoItem.label}
                />
                */}
            </li>
        }
    );
    return (
        <ul>
            {todoElements}
        </ul>
    );
};

export default ToDoList;