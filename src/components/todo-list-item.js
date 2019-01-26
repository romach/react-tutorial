import React from "react";

// use object destructurisation for argument
// second option: props, props. label
const ToDoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };
    return <span style={style}>{label}</span>;
};

export default ToDoListItem;