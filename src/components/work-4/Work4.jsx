import { useState } from "react";
import { Button } from "../UI/button/Button";
import { Text } from "../text/Text";

export const Work4 = () => {
  const [ups, setUps] = useState(false);

  const upsFunc =()=>{
    setUps((prev)=>!prev)
  }
  return (
    <div>
      <Text text="Тортунчу уй тапшырма" />
      <p>{ups ? "UUPS" : ""}</p>
      <Button text="CLOSE" onClick={upsFunc}/>
    </div>
  );
};
