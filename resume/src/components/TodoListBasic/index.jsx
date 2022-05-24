import React,{useState} from "react";
import TodoItems from './TodoItem';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const TodoListBasic = () => {
    const [inputData, setInputData] = useState("");
    const [itemList, setItemList] = useState([]);
    const [IsEditItem, setIsEditItem] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const inputHandle = (e) => {
        setInputData(e.target.value);
    }

    const btnAddHandle = () =>{
        if(!inputData){
            alert('please enter your title');
        } else if(inputData && !toggleSubmit){
            setItemList(
                itemList.map((elem)=>{
                    if(elem.id === IsEditItem){
                        return {...elem, name:inputData}
                    }
                    return elem;
                })
            )    
            setInputData('');
            setIsEditItem(null);
            setToggleSubmit(false);
        } else {
            const newdata = {id: new Date().getTime().toString(), name:inputData}
            setItemList([...itemList, newdata]);
            setInputData("");
        }        
    }

    const btnDeleteHandle = (ind) => {
        let items = itemList.filter((elem, index)=>{ 
            return index !== ind;
        });
        setItemList(items);
    }

    const btnEditHandle = (id) => {
        let newItem = itemList.find((elem)=> {
            return elem.id===id;
        });
        setInputData(newItem.name);
        setIsEditItem(id);
        setToggleSubmit(false);
    }
    
    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Todo List Basic</h5>
                            <div className="row">
                                <div className="col-sm-10">
                                    <input type="text" 
                                            className="form-control"
                                            name="content" 
                                            value={inputData} 
                                            placeholder="Enter your list" 
                                            onChange={inputHandle} autoComplete="off"/>
                                </div>
                                <div className="col-sm-2">
                                    <button type="button" className="btn btn-primary mb-2" onClick={btnAddHandle}>{toggleSubmit ? '+' : '-' }</button>
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                itemList.map((item) => {
                                    return <TodoItems key={item.id} item={item.name} ind={item.id} btnDeleteHandle={btnDeleteHandle} btnEditHandle={btnEditHandle}/>
                                })
                            } 
                        </ul>
                    </div> 
                </div>  
            </div> 
        </div>
    )
}

export default TodoListBasic;