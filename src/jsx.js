import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
    const todos = ['Learn React', 'Build Awesome app'];
    return (
        <ul>
            <li>{todos[0]}</li>
            <li>{todos[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My to-do list</h1>;
};

const SearchPanel = () => {
    const searchText = "Type text here...";
    const searchStyle = {
        fontSize: '25px'
    };
    return <input disabled style={searchStyle} type="text" placeholder={searchText}/>;
};

const innerElement = <div>Inner element</div>;
const loginLabel = <div>Login please</div>;
const nullElement = null;
const userIsLoggedIn = false;

const App = () => {
    const scriptElement = '<script>alert(123)</script>';
    return (
        <div>
            {innerElement}
            <span>{new Date().toString()}</span>
            {nullElement}
            {userIsLoggedIn ? null : loginLabel}
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
            {scriptElement}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));