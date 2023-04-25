export const useReducer = `
You can add a reducer to your component using the useReducer hook.
The useReducer method gives you a state variable and a dispatch method to make state changes.
const [state, dispatch] = useReducer(reducerMethod, initialValue).


The reducer method contains your state logic. You can choose which state logic to call using the dispatch method.
The method takes two arguments, the current state value and an action object. The action object contains the type of the action and additional data needed to perform the update.

Let's take a simple example where , We'll perform three types of updates – for  addition, substraction, and reset. 
initital sate is keept as 0,
By defining reducer function,we'll use switch-case to select the type of operation to be performed based on the action dispatched.

`;

export const useEffect = `
The function passed to useEffect is a callback function. This will be called after the component renders.

In this function, we can perform our side effects or multiple side effects if we want.

The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon.
[]->callback function will be called only after first rendered .
[dependencies]-> callback function will be called only if the value of dependencies changes .
if nothing passed-> callback will be called on every render.

In our example , the input box is focused when first rendered .
`;

export const useState = `
    consider the below example, initally fruit sate is defined using useState and updated based on the Input feild by setFruit method.
`;
export const useDebug = `
In the below example, custom hook "useCustom " is created, which will take any number,
 return  [sum, multiply] addition and mutiplication by 3.
using useDebugValue hook, can debug the cutom hooks from the react dev tool.
here the value i.e the number passed and the returned sum, will be shown in debug component. 
`;

export const useContext = `
  Consider the Example below, 
  Created context "UserContext". Now providing the value from Parent component.
  having "Consumer" component as child  and "Child" component as grandChild.
  (parent -->>consumer-->> Child).
  Now the value provided by context-provider can be directly accessed by "child" Component.
  without prop Drilling.

`;

export const useDeffered = `
Consider the below example,We have maily two compoenet "InputBox" and "List".
 From "InputBox" compenent, input is being passed as prop to the "List", 
 "List" Compenent is printing the prop recived 200 times by for loop.
 So On each KeyStrock the loop will be iterated 200 times, making app to render multiple times.
 So by using the "useDeffered" Hook, this can be solved. As useDefferd will add delay and will be updated if there is a time differnce between the event.
 const deferredInput = useDeferredValue(input);
 check the console for the value of Input and the value of deferredInput.
`;

export const useTransition = `
const [isPending, startTransition] = useTransition();


useTransition returns an array with exactly two items:
The isPending flag that tells you whether there is a pending transition.
The startTransition function that lets you mark a state update as a transition.

The startTransition function returned by useTransition lets you mark a state update as a transition.

Consider the below example, here the value of input box is being updadated on keypress as Input state.
This value will be printed 200 times and update List state.But using startTransition setList has been set on lower prioprity.

Is Pending will update the Transition State. Once the Transition has been completed then isPending will become true.
`;

export const useCallback = `
consider the below example,
"memoizedAddvocado" is being called on button click,it increment the count of addcocado.
by wrapping with useCalllback, this functions defination will remain same until the dependency changes.
since "memoizedAddvocado" is passed as prop ,so it will prevent re-rendering for the same value of dependency.
`;

export const useRef = `
 consider the below example, 
 ref= useRef();
 ref is created, attached to the input.
 Now, ref.cuurent has been used to  focus  on the input box,
 ref.current.focus()
`;

export const useImperative = `
Consider the below example, We have 2 Components-Parent and Child.
Child Component has State which will be incremented by child button click.
Now we want to implement the same increment functionality from parent component.
For that Passed ref to child componend using forward ref using useImperativeHandle , attached handleClick  function to ref , which can be acces from parent Component
`;

export const useMemo = `
consider the below example, here "Addvocado" is child component.
which recieves add function from the parent component, 
Idealy "Addvocado" will be rerendered on each call, but As useMemo will memorize the value of the props,this compnent 
will be renrendered only if the value of the prop i.e add function changes.
`;

export const useInsertionEffect = `
In the below example the theme of the button is being toggled.
Since useInsertionEffect will be called in parallel to other DOM update.
style is applied to button by calling the function "getStyleRule" from useInsertionEffect hook
`;

export const useID = `
Consider the below example, here Email component will have email feild , email feild will have id.
but calling the same Email Component again and again will have the same it.
With useId hook ,each time the component is called uniuque id will be tagged`;

export const useSyncExternalStore = `
  In the Below Example "Store" component will print the window size.
  Here useSyncExternalStore has 2 call back function , subcribtion function that will stoe the window size change and 
  getsnapshot function which will return the value of the window.
`;
