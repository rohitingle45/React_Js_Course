import {Button} from 'react-bootstrap';
function User({greet,name,btnColor}) {
    return (
        <>
              <Button onClick={()=>greet(name)} variant={btnColor}>{name}</Button>
              <br /><br />
        </>
    );
}
export default User;