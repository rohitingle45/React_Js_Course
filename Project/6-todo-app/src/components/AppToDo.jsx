import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AppToDO({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueData, setDueDate] = useState();
  const handleNameChange = (event)=> {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event)=> {
    setDueDate(event.target.value);
  }
  const handleAddButton = ()=> {
    onNewItem(todoName,dueData);
    setTodoName("");
    setDueDate("");
  }
   return <div class="container">
        <div class="row todo-row">
            <div class="col-6">
            <input type="text" placeholder="Enter ToDO" value={todoName} onChange={handleNameChange}/>
            </div>
            <div class="col-4">
            <input type="date" value={dueData} onChange={handleDateChange} />
            </div>
            <div class="col-2">
            <button class="btn btn-success to-btn" onClick={handleAddButton}>
             <IoAddCircleSharp />
            </button>
            </div>
        </div>
        </div>
}
export default AppToDO;