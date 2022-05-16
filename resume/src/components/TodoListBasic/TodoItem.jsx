import React from "react";

const TodoItems = (props) => {
        
    return (
        <>
            <li>
                {props.item}
                <button type="button" onClick={()=>{props.btnEditHandle(props.ind)}}>Edit</button>
                <button type="button" onClick={()=>{props.btnDeleteHandle(props.ind)}}>Delete</button>
            </li>   
        </>
    )
}

export default TodoItems;