import './App.css';
import { useRef } from 'react';
function App() {
      const userRef = useRef();
      const passwordRef = useRef();

      const submitHandler=(event)=>{
        event.preventDefault();
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;
        console.log('Username is : ', user);
        console.log('Password is : ', password);
      }

      const useRefHandler = (event)=> {
        event.preventDefault();
          const user = userRef.current.value;
          const password = passwordRef.current.value;
        console.log('Username is : ', user);
        console.log('Password is : ', password);
      }
  return (
    <>
         <h2>Uncontrolled Componets</h2>
         <form onSubmit={submitHandler}>
         <input type="text" id='user' placeholder='enter username' />
         <br /> <br />
         <input type="password" id="password" placeholder='enter password' />
         <br /><br />
         <button>Submit</button>
         </form>

         <hr />
         <h2>Uncontrolled Componets with useRef</h2>
         <form onSubmit={useRefHandler}>
         <input type="text" ref={userRef}  placeholder='enter username' />
         <br /> <br />
         <input type="password" ref={passwordRef} placeholder='enter password' />
         <br /><br />
         <button>Submit</button>
          </form>
    </>
  );
}
export default App;
