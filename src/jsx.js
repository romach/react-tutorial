import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
    // can use JavaScript expressions in {}
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
    // it is possible to inline attribute values
    // in react inlines attributes are called properties
    // use camel-case for attributes
    const searchText = "Type text here...";
    // to assign style to element you need to pass object with style values
    const searchStyle = {
        fontSize: '25px'
    };
    // by default properties have 'true' value
    return <input disabled style={searchStyle} type="text" placeholder={searchText}/>;
};

const innerElement = <div>Inner element</div>;
const loginLabel = <div>Login please</div>;
const nullElement = null;
const userIsLoggedIn = false;

const App = () => {
    const scriptElement = '<script>alert(123)</script>';
    return (
        // react element must have one root element
        <div>
            {/* it is possible to include one element to another */}
            {innerElement}
            {/* react element can use results of function invocation */}
            <span>{new Date().toString()}</span>
            {/* null element an be included without errors */}
            {nullElement}
            {/* it is possible to use conditions */}
            {userIsLoggedIn ? null : loginLabel}
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
            {/* by default html becomes escaped */}
            {scriptElement}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));