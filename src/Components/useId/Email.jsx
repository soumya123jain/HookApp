import { useId } from "react";

const Email = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
};
export default Email;
