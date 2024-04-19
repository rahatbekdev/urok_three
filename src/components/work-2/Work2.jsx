import { useState } from "react";
import { Button } from "../UI/button/Button";
import { Text } from "../text/Text";

export const Work2 = () => {
  const [counter,setCounter]=useState(0)

  const plusBtn =()=>{
    setCounter((prev)=>prev +1)
  }

  const minusBtn =()=>{
    setCounter((prev)=>prev -1)
  }
  return (
    <div>
      <Text text="Эккинчи уй тапшырма" />
      <Button onClick={plusBtn} text="Increment"/>
      <span>{counter}</span>
      <Button onClick={minusBtn} text="Decrement"/>
    </div>
  );
};
