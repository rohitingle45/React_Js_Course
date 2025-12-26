import styles from './DisplayContainer.module.css';
function DisplayContainer() {
let buttonNames = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','C','='];

    return (
        <>
           <div className={styles.buttonContainer}>
             {buttonNames.map((buttonName)=>{
               return <button>{buttonName}</button>
             })}
              
            </div>
        </>
    );
}
export default DisplayContainer;