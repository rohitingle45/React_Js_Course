import React from 'react'
import { useParams } from 'react-router-dom'

const OtherDetails = () => {
    const  urlValue = useParams();
  return (
    <div>
        
         <h1>{urlValue.id} Page</h1>
    </div>
  )
}

export default OtherDetails
