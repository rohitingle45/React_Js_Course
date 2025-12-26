import TodoItem from "./TodoItem";
function TodoItems({todoItems, onDeleteButton}) {
    return (
        <>
            {todoItems.map((item)=>{
             return <div class="css-TodoItem">
            <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteButton = {onDeleteButton}/>
             </div>
            })}
        </>
    );
}
export default TodoItems;