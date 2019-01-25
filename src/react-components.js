import React from 'react';
import ReactDOM from 'react-dom';

// React component - independent code block that has its own behaviour
// How to create component: create function that will return React element
// use component in jsx as html tag
// component must have name in uppercase

const ToDoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome app</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My to-do list</h1>;
};

const SearchPanel = () => {
    return <input type="text" placeholder="search"/>;
};

const App = () => {
    return (
        <div>
            {/* jsx component will be substituted with component's content */}
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));