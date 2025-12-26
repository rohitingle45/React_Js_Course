import React from 'react'
import { memo } from 'react';

const ChildA = ({greet}) => {
    console.log('Child Component');
    
  return (
    <div>
        
    </div>
  )
}

export default memo(ChildA)
