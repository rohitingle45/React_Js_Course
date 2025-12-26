import './App.css';
import User from './User';
function App() {
function greet(name) {
   alert("Hello "+name);
}
   return(
    <>
         <User greet={greet} name='Divya' btnColor='primary' />
         <User greet={greet} name='Rohit' btnColor='success' />
         <User greet={greet} name='Yogesh' btnColor='danger' />
    </>
  );
}
export default App;
