import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <div>
        <h1>My to-do list</h1>
        <input type="text" placeholder="search"/>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome app</li>
        </ul>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));