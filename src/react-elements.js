// main dependency for React
// is using by Babel to create native element from jsx element
import React from 'react';
// allows React to work with DOM
import ReactDOM from 'react-dom';

// react element - lightweight object.
// React uses react elements to build Virtual DOM.
// Virtual DOM requires less memory and cpu comparing to browser DOM

// use JSX to create React element
// it will be transpiled with Babel to JavaScript code
const jsxElement = <h1>I'm JSX element</h1>;
// create element using React class
const nativeElement = React.createElement('h1', null, "I'm native element");
// create multiline jsx element
// use braces to wrap element's content
const multilineElement = (
    <div>
        <h1>My to-do list</h1>
        <input type="text" placeholder="search"/>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome app</li>
        </ul>
    </div>
);

// use ReactDOM to convert React element to html element and add it to parent element as child
// first argument is React element
ReactDOM.render(jsxElement, document.getElementById('jsx-element'));
ReactDOM.render(nativeElement, document.getElementById('native-element'));
ReactDOM.render(multilineElement, document.getElementById('multi-line-element'));