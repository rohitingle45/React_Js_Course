import AppName from "./components/AppName";
import AppToDO from "./components/AppToDo";
import TodoItems from "./components/TodoItems";
function App() {
   let todoItems = [
        {
            name : 'Learn React js',
            dueDate : '04/10/25'
        },
        {
            name : 'Learn Node js',
            dueDate : '04/11/25'
      },
      {
            name : 'Learn Express js',
          dueDate : '04/12/25'
      }];
  return <center>
     <div className="css-ToDoAPP-container">
        <AppName/>
       <AppToDO/>
       <TodoItems todoItems={todoItems}/>
     </div>
  </center>
}

export default App;
