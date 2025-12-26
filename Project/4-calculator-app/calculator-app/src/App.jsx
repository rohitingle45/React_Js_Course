 import styles from './App.module.css';
 import Display from './Components/Display';
 import DisplayContainer from './Components/DisplayContainer';
function App() {
  

  return (
    <>
        <div className={styles.calculator}>
            <Display/>
            <DisplayContainer/>
        </div>
    </>
  )
}

export default App
