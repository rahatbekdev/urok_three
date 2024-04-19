import { useState } from "react";
import { Button } from "../UI/button/Button";
import { Text } from "../text/Text";

export const Work1 = () => {
  const [close, setClose] = useState("");
 

  const handleName = () => {
    setClose((prev)=>!prev);
  };
 
  return (
    <div>
      <div>
        <Text text="Биринчи уй тапшырма" />
        <Button text={close ? "OPEN" : "Close"} onClick={handleName} />
      </div>
    </div>
  );
};
