import { useState } from "react";
import ColorContext from "./context";

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
