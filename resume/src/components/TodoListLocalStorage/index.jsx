import React,{useState, useEffect} from "react";
import TodoItems from './TodoItem';

const TodoListLocalStorage = () => {
    const [inputData, setInputData] = useState("");
    // const [itemList, setItemList] = useState([]);
    const [IsEditItem, setIsEditItem] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const inputHandle = (e) => {
        setInputData(e.target.value);
    }

    const btnAddHandle = () =>{
        if(!inputData){
            alert('please enter your title');
        } else if(inputData && !toggleSubmit){
            const itemList = JSON.parse(localStorage.getItem('itemList'));
            const update_data = itemList.map((elem)=>{
                                    if(elem.id === IsEditItem){
                                        return {...elem, name:inputData}
                                    }
                                    return elem;
                                })

            localStorage.setItem('itemList', JSON.stringify(update_data));
            // setItemList(update_data)    
            setInputData('');
            setIsEditItem(null);
            setToggleSubmit(true);
        } else {
            const newdata = {id: new Date().getTime().toString(), name:inputData}
            const itemList = (localStorage.getItem('itemList')) ? JSON.parse(localStorage.getItem('itemList')) : [];
            localStorage.setItem('itemList', JSON.stringify([...itemList, newdata]));
            // setItemList([...itemList, newdata]);
            setInputData(""); 
        }        
    }
    
    const btnDeleteHandle = (ind) => {
        const itemList = JSON.parse(localStorage.getItem('itemList'));
        let items = itemList.filter((elem)=>{
            return elem.id !== ind;
        });
        localStorage.setItem('itemList', JSON.stringify(items));
        // setItemList(items);
    }

    const btnEditHandle = (id) => {
        const itemList = JSON.parse(localStorage.getItem('itemList'));
        let newItem = itemList.find((elem)=> {
            return elem.id===id;
        });
        setInputData(newItem.name);
        setIsEditItem(id);
        setToggleSubmit(false);
    }
    
    return (
        <>
            <h1>Todo List LocalStorage</h1>
            <input type="text" name="content" value={inputData} placeholder="Enter your list" onChange={inputHandle} autoComplete="off"/>
            <button type="button" onClick={btnAddHandle}>{toggleSubmit ? '+' : '-' }</button>
            <ul>
                {
                    localStorage.getItem('itemList') && JSON.parse(localStorage.getItem('itemList')).map((item) => {
                        return <TodoItems key={item.id} item={item.name} ind={item.id} btnDeleteHandle={btnDeleteHandle} btnEditHandle={btnEditHandle}/>
                    })
                }    
            </ul>
        </>
    )
}

export default TodoListLocalStorage;