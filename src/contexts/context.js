import { createContext } from "react";

const ColorContext = createContext({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

export default ColorContext;
