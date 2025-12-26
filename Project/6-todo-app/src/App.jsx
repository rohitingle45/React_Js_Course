import AppName from "./components/AppName";
import AppToDO from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
import './App.css';
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
   let initialtodoItems = [];
 
      const [todoItems , setTodoItems] = useState(initialtodoItems);

      const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New Item Added : ${itemName} and ${itemDueDate}`);
        const newTodoItems = [...todoItems,{ name :itemName,
          dueDate : itemDueDate}];
          setTodoItems(newTodoItems);
      }

      const handleDeleteButton = (todoName)=>{
         const newTodoItems = todoItems.filter((item)=> item.name !== todoName);
         setTodoItems(newTodoItems);
      }
      return<center>
      <div class="css-ToDoAPP-container">
          <AppName/>
        <AppToDO onNewItem = {handleNewItem} />
         {todoItems.length ===0 && <WelcomeMessage/> }
        <TodoItems todoItems={todoItems} onDeleteButton = {handleDeleteButton}/>
      </div>
      </center>
      
}

export default App;
