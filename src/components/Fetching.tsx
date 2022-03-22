/* eslint-disable no-empty-pattern */
import React, { useState } from "react";



export default function Fetching() {
  const [state, setState] = useState<any>();
  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters/1"
      );
      const data = await response.json();
      setState(data);
    } catch (error) {
     
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>Breaking Bad</div>
      {state && state.map((item:any)=><li key={item.char_id}>{item.name}</li>)}
    </>
  );
}
