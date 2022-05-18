import React,{useState} from "react";
import TodoItems from './TodoItem';

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
        <>
            <h1>Todo List Basic</h1>
            <input type="text" name="content" value={inputData} placeholder="Enter your list" onChange={inputHandle} autoComplete="off"/>
            <button type="button" onClick={btnAddHandle}>{toggleSubmit ? '+' : '-' }</button>
            <ul>
                {
                    itemList.map((item) => {
                        return <TodoItems key={item.id} item={item.name} ind={item.id} btnDeleteHandle={btnDeleteHandle} btnEditHandle={btnEditHandle}/>
                    })
                }    
            </ul>
            
        </>
    )
}

export default TodoListBasic;