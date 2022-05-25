import React from "react";

const Margin = {
    margin: "0px 5px 0px 5px"
}

const TodoItems = (props) => {
        
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-8">
                        {props.item}
                    </div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-warning btn-sm" style={Margin} onClick={()=>{props.btnEditHandle(props.ind)}}>Edit</button>
                        <button type="button" className="btn btn-danger btn-sm" style={Margin} onClick={()=>{props.btnDeleteHandle(props.ind)}}>Delete</button>
                    </div>
                </div>    
            </li>    
        </>
    )
}

export default TodoItems;