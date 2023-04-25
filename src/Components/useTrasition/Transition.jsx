import { useState, useTransition } from "react";
// allows to make 2 diff state chnges at the samee tym
// and rank them the order in which wanted to be
// it makes app>more renders due to delay in excution low P state
const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const ListSize = 2000;

  const handleChange = (e) => {
    setInput(e.target.value); // high priority, render out imidiatly
    const l = [];
    startTransition(() => {
      for (let i = 0; i < ListSize; i++) {
        l.push(e.target.value);
      }
      setList(l); //low priority
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading...."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
};
export default Transition;
