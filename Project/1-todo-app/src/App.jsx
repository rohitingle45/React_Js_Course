import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import AppToDO from "./components/AppToDo";
function App() {
  return <center>
     <div className="css-ToDoAPP-container">
        <AppName/>
       <AppToDO/>
      <div className="css-TodoItem">
       <TodoItem1/>
        <TodoItem2/>
      </div>
     </div>
  </center>
}

export default App;
