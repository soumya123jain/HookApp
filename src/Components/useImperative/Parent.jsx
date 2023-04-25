import { useRef, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();

  return (
    <>
      <h3>useImperativeHandle</h3>
      <Child ref={ref} />
      <button onClick={() => ref.current.handleClick()}>Parent Button</button>
    </>
  );
};
export default Parent;
