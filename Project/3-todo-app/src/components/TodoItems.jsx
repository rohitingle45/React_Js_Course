import TodoItem from "./TodoItem";
function TodoItems({todoItems}) {
    return (
        <>
            {todoItems.map((item)=>{
             return <div className="css-TodoItem">
            <TodoItem todoName={item.name} todoDate={item.dueDate} />
             </div>
            })}
        </>
    );
}
export default TodoItems;