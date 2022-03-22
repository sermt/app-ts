/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import Clock from './Clock'
type Props = {}
    

export default function Timer({}: Props) {
    
  const [time, setTime] = useState<number>(1000);
  
return(<>
<button onClick={()=>setTime(1000)}>1</button><button onClick={()=>setTime(2000)}>2</button>
<Clock time={time} />
    </>)

  
}
