import './App.css';
import UseTransitionHook from './UseTransitionHook';
import DrivedState from './DrivedState';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';
import UpdateObject from './UpdateObject';
import UpdateArray from './UpdateArray';
import UseActionState from './UseActionState';
import UseId from './UseId';
import { useState } from 'react';
function App() {
    const [user,setUser] = useState();
   return (
       <>
          {/* <UseTransitionHook/> */}
          {/* <DrivedState/> */}
          {/* <AddUser setUser={setUser}/> */}
          {/* <DisplayUser user={user}/> */}
          {/* <UpdateObject/> */}
          {/* <UpdateArray/> */}
          {/* <UseActionState/> */}
          <UseId/>
       </>
   );
}
export default App;
