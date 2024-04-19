import { useState } from "react";
import { Input } from "../UI/input/Input";
import { Text } from "../text/Text";
import css from "./Work3.module.css";

export const Work3 = () => {
  const [color, setColor] = useState(false);

  const handleColor = () => {
    setColor((prev) => !prev);
  };
  return (
    <div className={color ? css.app : css.dark}>
      <Text text="Учинчу уй тапшырма" />
      <Input onChange={handleColor} type="checkbox" />
    </div>
  );
};
