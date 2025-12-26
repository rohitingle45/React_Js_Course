import './App.css'
import FoodItems from './Componets/foodItem';
import ErrorMessage from './Componets/errorMessage';
function App() {
  // let myArray = [];
    let myArray = ["Rohit","Divya","Yogesh","xyz"];

  return (
    <>
    <h2>Simple List</h2>
    <ErrorMessage items = {myArray} />
    <FoodItems items = {myArray} />
    </>
  );
}

export default App;

 /* {myArray.map((name)=>{
       <li key={name} className="list-group-item">{name}</li>  
      })}
       */
