import React, { useEffect, useState,useRef } from "react";

type Props = {
  time: number;
};

export default function Clock({ time }: Props) {
   const [state,setState]=useState(0);
    const ref=useRef<NodeJS.Timer>();
  useEffect(()=>{
    ref.current && clearInterval(ref.current);
    ref.current= setInterval(()=>{
      setState(s=>s+(time/1000));
    },time)
  },[time])
  return <div>{state}</div>;
}
