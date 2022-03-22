import React,{useState} from 'react'
import Fruit from './Fruit'
type Props = {
  fruits:string[],
}

export default function Fruits({fruits}: Props) {
    const [state,setState]=useState<number[]>(Array(fruits.length).fill(0));
    const total=state.reduce((a,b)=>a+b);
  return (
   <>
   <h1>Fruits</h1>
    {fruits.map((item,index)=><Fruit key={item} idx={index} setState={setState} name={item}/> )}
    <p>Total: {total || "0"}</p>
   </>

  )
}