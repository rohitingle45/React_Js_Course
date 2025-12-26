function AddUser({setUser}) {
    return (
        <>  
             <h2>Add User</h2>
            <input type="text" onChange={(event)=>setUser(event.target.value)} />
            <hr />
        </>
    );
}
export default AddUser;