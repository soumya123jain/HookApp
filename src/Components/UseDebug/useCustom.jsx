import { useDebugValue, useState } from "react";

const useCustom = (a) => {
  const [value, setValue] = useState("abc");
  useDebugValue(value);
  let sum = a + 3;
  let mul = a * 3;
  useDebugValue(sum);

  return [sum, mul];
};

export default useCustom;
