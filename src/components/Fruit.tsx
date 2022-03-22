import React from 'react'

interface Props {
    idx: number;
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    name: string;
  }

export default function Fruit({idx,setState,name}: Props) {
  
  return (
    <div>
      <p>{name}</p>
    <button onClick={()=>setState(prev=>prev.map((element,index)=> idx===index?element+1:element) )}>
      Increment</button><button onClick={()=>setState(prev=>prev.map((element,index)=> idx===index?element-1:element) )}>Decrement</button>
    </div>
  )
}