import React from "react";

const SearchPanel = () => {
    const searchText = "Type text here...";
    const searchStyle = {
        fontSize: '25px'
    };
    return <input disabled style={searchStyle} type="text" placeholder={searchText}/>;
};

export default SearchPanel;