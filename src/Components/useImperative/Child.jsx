import { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({ handleClick }));
  const handleClick = (e) => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Child Button</button>
    </>
  );
});

export default Child;
