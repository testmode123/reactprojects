import React from "react";

const TodoItems = (props) => {
        
    return (
        <>
            <li className="list-group-item">
                {props.item}
                <button type="button" className="btn btn-primary" onClick={()=>{props.btnEditHandle(props.ind)}}>Edit</button>
                <button type="button" className="btn btn-primary" onClick={()=>{props.btnDeleteHandle(props.ind)}}>Delete</button>
            </li>   
        </>
    )
}

export default TodoItems;