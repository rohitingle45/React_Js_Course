function Map() {
     const users = [
            {
                id : 1,
                name : 'Rohit Ingle',
                age : 23
            },
            {
                id : 2,
                name : 'Divya Ingle',
                age : 22
            },
            {
                id : 3,
                name : 'Yogesh Ingle',
                age : 20
            }];

      return (
        <>
           <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
              </thead>
              <tbody>
                   {
                     users.map((user)=>{
                    return <tr key = {user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                   </tr>       
                    })
                   }   
              </tbody>
           </table>
        </>
      );
}
export default Map;