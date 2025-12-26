import { useActionState } from "react";

function UseActionState() {
    const handleSubmit= async(previousData,formData)=>{
         const name = formData.get('name');
         const pwd = formData.get('pwd');
         await new Promise(res=>setTimeout(res,2000));
         if(name && pwd) {
            return {msg:'Data Submitted....',name,pwd};
         }
         else {
            return {error:'Data not Enter....',name,pwd};
         }
    }
 
     const [data,action,pending] = useActionState(handleSubmit,undefined);
    return (
        <>
           <div>
              <h1>useActionState in React Js</h1>
              <form action={action}>
                 <input type="text" name="name" placeholder="enter name" defaultValue={data?.name}/> <br /> <br />
                 <input type="text" name="pwd" placeholder="enter password" defaultValue={data?.pwd}/> <br /> <br />
                 <button disabled={pending}>Submit Data</button>
              </form>
              <br /><br />
                {
                  data?.error && <span style={{color:'red'}}>{data?.error}</span>
                }
                {
                  data?.msg && <span style={{color:'green'}}>{data?.msg}</span>
                }
                <h2>Name : {data?.name}</h2>
                <h2>Password : {data?.pwd}</h2>
           </div>
        </>
    );
}
export default UseActionState;