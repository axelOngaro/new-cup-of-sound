import { useState } from "react";

export const useDarkMode = () => {
  const [value, setValue] = useState("light");

  return [value, setValue];
};
