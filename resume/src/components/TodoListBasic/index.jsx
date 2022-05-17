import React,{useState} from "react";
import TodoItems from './TodoItem';

const TodoListBasic = () => {
    const [inputValue, setInputValue] = useState("");
    const [itemList, setItemList] = useState([]);
    const [editItem, setEditItem] = useState(null);
    const [toggleBtn, setToggleBtn] = useState(true);
    const inputHandle = (e) => {
        setInputValue(e.target.value);
    }

    const btnAddHandle = () =>{
        if(!inputValue){
            alert('please enter your title');
        } else if(inputValue && !toggleBtn){
            // setItemList()
            itemList.map((elem) => {
                console.log(elem)
                // if(index === editItem){
                //     console.log(index, editItem, ...itemList, inputValue);
                // }
                // return elem;
            })
        } else {
            const newdata = {id: new Date().getTime().toString(), name:inputValue}
            setItemList([...itemList, newdata]);
        }
        setInputValue("");
    }

    const btnDeleteHandle = (ind) => {
        let items = itemList.filter((elem, index)=>{ 
            return index !== ind;
        });
        setItemList(items);
    }

    const btnEditHandle = (id) => {
        let newItem = itemList.find((elem, ind)=> {
            return ind===id;
        });
        setInputValue(newItem);
        setEditItem(id);
        setToggleBtn(false);
    }
    
    return (
        <>
            <h1>Todo List Basic</h1>
            <input type="text" name="content" value={inputValue} placeholder="Enter your list" onChange={inputHandle}/>
            <button type="button" onClick={btnAddHandle}>+</button>
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