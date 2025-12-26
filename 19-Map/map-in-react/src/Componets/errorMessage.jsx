function ErrorMessage({ items }) {
    
    return (
        <>
        {items.length === 0 && <h4>Empty list</h4>}
        </>
    );
}
export default ErrorMessage;


/* 
  ErrorMess(props){
   props.length === 0 -----

  ErrorMess(props){
  const { items } = props;

  }
*/