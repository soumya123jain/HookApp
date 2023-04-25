export const useEffect = `import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [fruit, setFruit] = useState();
  const ref=useRef()

  // Defining useEffect, input box will be focues after first render. 

  useEffect(()=>{
    ref.current.focus()
  },[])
  return (
    <div className="App">
      <p>State fruit is getting changes and printed</p>
      <input
      ref={ref}
        type="text"
        value={fruit}
        placeholder="type fruit name"
        onChange={(e) => setFruit(e.target.value)}
      />
      {fruit && <h4>Typed fruit is: {fruit}</h4>}
    </div>
  );
}

`;
export const useDebug = `
import { useDebugValue, useState } from "react";
// use React toool  too debug the output
const useCustom = (a) => {
  const [value, setValue] = useState("abc");
  useDebugValue(value);
  let sum = a + 3;
  let mul = a * 3;
  useDebugValue(sum);

  return [sum, mul];
};

export default useCustom;
`;
export const useContext = `
import "./styles.css";
import { createContext, useContext, useState } from "react";

// creating Context
const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("user");

  return (

    // Wrapping the components with provider's value so that the compoent and its child will have access to this value 
    <UserContext.Provider value={user}>
      <div className="App">
        <h3>Type user Name</h3>
        <input value={user} onChange={(e) => setUser(e.target.value)} />
        <Consumer />
      </div>
    </UserContext.Provider>
  );
}

const Consumer = () => {

  // initialising useContext for UserContext
  const user = useContext(UserContext);

  return (
    <>
    <div style={{ backgroundColor: "gray" }}>
      <h4>Hello {user}</h4>
      <p>This is consumer component1</p>
    </div>

    // Calling Child component but props is not passed.
    <Child/>
    </>
  );
};

const Child = () => {

  // initialising useContext for UserContext
  const user = useContext(UserContext);

  return (
    <div style={{ backgroundColor: "gray" }}>

      // value of user passed from super parent componet directly without getting as props from consumer
      <h4>Hello {user}</h4>
      <p>This is Child component of component1</p>
    </div>
  );
};

`;
export const useDeffered = `
import { useDeferredValue, useEffect, useMemo } from "react";

const InputBox = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

const List = ({ input }) => {
  const list_size = 2000;

  // Initalising UseDefferedValue, which will be updated if there is some delay in key press.
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < list_size; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(input deferredInput);
  }, [input, deferredInput]);
  return list;
};

export default List;
`;
export const useReducer = `
import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;

// Reducer Method, that takes 2 parameter, state and Action(from dispatch function)
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const Reducer = () => {

  // initalising useReducer, it takes reducer function and inital state.
  // dispatch method will trigger reducer method and return updated state 

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{count}</h2>
      // defining action to be dispatched
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("subtract")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Reducer;
`;

export const useTransition = `
import { useState, useTransition } from "react";
// allows to make 2 diff state chnges at the same time
// and rank them the order in which wanted to be
// it makes app>more renders due to delay in excution low Priority state
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

`;

export const useInsertionEffect = `
useInsertionEffect(() => {
  const { color, bgColor } = getsColorsFor(theme);
  let styleRule = null;
  if (color !== buttonColor || bgColor !== buttonBgColor) {
    buttonColor = color;
    buttonBgColor = bgColor;
    styleRule = getStyleRule();
    document.head.appendChild(styleRule);
  }
`;

export const useID = `
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
`;
export const useImperative = `
import { useRef, useState } from "react";

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
})
`;

export const useSyncExternalStore = `
import { useSyncExternalStore } from "react";

const Store = () => {
  const width = useSyncExternalStore(
    (listner) => {
      window.addEventListener("resize", listner);
      return () => {
        window.removeEventListener("resize", listner);
      };
    },

    () => window.innerWidth
  );
  // (subcribe,getsnapshot,[getServer SS])
  // subscribe:-fun to register callback, called to store chnges.
  // getSS-fn returns current val of store,
  // get Sercer SS:-return ss during server rendering....optional
  return (
    <>
      <h3>size:{width}</h3>
    </>
  );
};

export default Store;

`;

export const useCallback = `export default function App() {
  const [count, setCount] = useState(0);

  // const addAvocado = () => {
  //   setCount(count + 1);
  // };

  const memoizedAddvocado = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  // ren-render each time.
  return (
    <React.Fragment>
      <Addvocado add={memoizedAddvocado} />
      <div>{Array(count).fill("🥑").join(",")}</div>
    </React.Fragment>
  );
}
`;
export const useMemo = `import React from "react";

export default React.memo(({ add }) => {
  console.log("component re-rendered");

  return <button onClick={add}>Add avocado</button>;
});
`;
export const useState = `import "./styles.css";
import {useState} from 'react';

export default function App() {

  // initalising state fruit
  const [fruit,setFruit]=useState();

  return (
    <div className="App">
      <p>State fruit is getting changes and printed</p>
     <input type="text" value={fruit} 
     placeholder="type fruit name"

    // on Event trigger state fruit will be updated using setState method
     onChange={(e)=>setFruit(e.target.value)}/>
     {fruit &&
    <h4>Typed fruit is: {fruit}</h4>}
     
    </div>
  );
}
`;
export const useRef = `import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [fruit, setFruit] = useState();
  const ref=useRef()
  useEffect(()=>{
    ref.current.focus()

  },[])
  return (
    <div className="App">
      <p>State fruit is getting changes and printed</p>
      <input
      ref={ref}
        type="text"
        value={fruit}
        placeholder="type fruit name"
        onChange={(e) => setFruit(e.target.value)}
      />
      {fruit && <h4>Typed fruit is: {fruit}</h4>}
    </div>
  );
}
`;
