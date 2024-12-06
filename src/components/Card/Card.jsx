import React from 'react'

function Card({children}) {
  return (
    <div style={{border:"1px solid #ddd", padding:"16px", borderRadius:"8px"}}>
        {children}; 
    </div>
  )
}

export default Card