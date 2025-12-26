
import './App.css'
function App() { 
  return (
    <>
    <h2>Simple List</h2>
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>  
      <li className="list-group-item">And a fifth one</li>
    </ul>


    <input type="text" onChange={(event)=>{
       console.log(event.target.value);
    }} />
    </>
  );
}

export default App
