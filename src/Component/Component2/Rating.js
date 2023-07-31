import React from 'react'

export default function Rating(props) {
 
  const arr=[];
  for(let i=1;i<=5;i++){
    if (i<=props.value){
      arr.push(<span class = "checked" style={{color : "green"}}>&#10031;</span>)

    }
    else{
      arr.push(<span class = "checked">&#10031;</span>)
    }
  }
  return (
    <div class="mt-5 pt-5">{arr}</div>
  )
}
