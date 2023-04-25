import { useDeferredValue, useEffect, useMemo } from "react";

const List = ({ input }) => {
  const list_size = 2000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < list_size; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeffered:${deferredInput}`);
  }, [input, deferredInput]);
  return list;
};

export default List;
