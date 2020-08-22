import React from "react";

const SearchBar = (props) => {


    const searchSpace = (event) => {
        let keyword = event.target.value;
        props.searchDirectory(keyword)
    }

    const sortByName = (event) => {
        event.preventDefault();
        props.sortDirectory()
    }

    const elementStyle = {
        border: 'solid',
        borderRadius: '10px',
        position: 'relative',
        left: '10vh',
        height: '3vh',
        width: '20vh',
        marginTop: '5vh',
        marginBottom: '10vh'
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Enter name to be searched" style={elementStyle} onChange={(e) => searchSpace(e)} value={props.searchTerm} />
            </div>

            <div>
                <button onClick={(e) => sortByName(e)}>Sort By Name</button>
            </div>
        </>
    )
}


export default SearchBar;