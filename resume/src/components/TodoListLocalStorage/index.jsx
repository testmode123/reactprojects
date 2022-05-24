import React,{useState, useEffect} from "react";
import TodoItems from './TodoItem';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const getItems = JSON.parse(localStorage.getItem('itemList') ||'[]');
 
const TodoListLocalStorage = () => {
    const [inputData, setInputData] = useState("");
    const [itemList, setItemList] = useState(getItems);
    const [IsEditItem, setIsEditItem] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const inputHandle = (e) => {
        setInputData(e.target.value);
    }

    const btnAddHandle = () =>{
        console.log(itemList, inputData, toggleSubmit); 
        if(!inputData){
            alert('please enter your title');
        } else if(inputData && !toggleSubmit){
            // const itemList = JSON.parse(localStorage.getItem('itemList'));
            
            const update_data = itemList.map((elem)=>{
                                    if(elem.id === IsEditItem){
                                        return {...elem, name:inputData}
                                    }
                                    return elem;
                                })

            // localStorage.setItem('itemList', JSON.stringify(update_data));
            setItemList(update_data)    
            setInputData('');
            setIsEditItem(null);
            setToggleSubmit(true);
        } else {
            const newdata = {id: new Date().getTime().toString(), name:inputData}
            // const itemList = (localStorage.getItem('itemList')) ? JSON.parse(localStorage.getItem('itemList')) : [];
            // localStorage.setItem('itemList', JSON.stringify([...itemList, newdata]));
            setItemList([...itemList, newdata]);
            setInputData(""); 
        }        
    }
    
    const btnDeleteHandle = (ind) => {
        // const itemList = JSON.parse(localStorage.getItem('itemList'));
        console.log("deleted==>", itemList);
        let items = itemList.filter((elem)=>{
            return elem.id !== ind;
        });
        console.log("after deelte", items);
        // localStorage.setItem('itemList', JSON.stringify(items));
        setItemList(items);
    }

    const btnEditHandle = (id) => {
        // const itemList = JSON.parse(localStorage.getItem('itemList'));
        console.log("Edit==> ",itemList)
        let newItem = itemList.find((elem)=> {
            return elem.id===id;
        });
        setInputData(newItem.name);
        setIsEditItem(id);
        setToggleSubmit(false);
    }

    useEffect(()=>{
        localStorage.setItem('itemList', JSON.stringify(itemList));
    },[itemList])
    
    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Todo List LocalStorage</h5>
                            <div className="row">
                                <div className="col-sm-10">
                                <input type="text" className="form-control" name="content" value={inputData} placeholder="Enter your list" onChange={inputHandle} autoComplete="off"/>
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

export default TodoListLocalStorage;