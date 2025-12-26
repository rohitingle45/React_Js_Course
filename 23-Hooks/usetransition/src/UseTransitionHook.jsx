import { useTransition } from "react";

function UseTransitionHook() {
    const [pending,setTransition] = useTransition(false);
    const handleBtn =  ()=>{
          setTransition(async ()=>{
            await new Promise(res=> setTimeout(res,2000));
          })
    }
    return (
        <>
             <button disabled = {pending} onClick={handleBtn}>Click</button>
        </>
    );
}
export default UseTransitionHook;