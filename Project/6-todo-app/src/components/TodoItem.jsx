import { MdDelete } from "react-icons/md";
function TodoItem({todoName, todoDate, onDeleteButton}) {

    return <div class="container">
       <div class="row todo-row">
         <div class="col-6">
           {todoName}
         </div>
         <div class="col-4">
            {todoDate}
         </div>
         <div class="col-2">
          <button class="btn btn-danger to-btn" onClick={()=> onDeleteButton(todoName)}><MdDelete /></button>
         </div>
      </div>
    </div>
}
export default TodoItem;