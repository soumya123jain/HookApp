import React, { useEffect, useRef, useState } from "react";

const Form = () => {
  const [value, setValue] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Insert a new value</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" onChange={onChange} value={value} />

        <button>Save new value</button>
      </form>
    </>
  );
};
export default Form;
