import React from 'react'


const Link = ({active, children, onClick}) =>{
 if (active){
  return <span>{children}</span>
 }

 return (
  <a href=" " onClick={ e =>{
   e.preventDefaultf() 
   onClick()
  }}>
   {children}
   </a>
 )
}