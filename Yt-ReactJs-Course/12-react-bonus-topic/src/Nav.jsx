import React from 'react'

const Nav = ({theme,setTheme}) => {
  return (
    <div>
       <button onClick={()=>{
        if(theme == 'Light') {
            setTheme('Dark');
        }
        else {
            setTheme('Light')
        }
       }} className='py-2 px-4  bg-cyan-600 rounded m-1 active:scale-95'>Change Theme</button>
    </div>
  )
}

export default Nav
