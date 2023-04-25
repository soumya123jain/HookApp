import useCustom from "./useCustom";

const Main = () => {
  const [sum, mul] = useCustom(5);
  return (
    <>
      <h3>
        custom sum={sum}, multipl={mul}
      </h3>
    </>
  );
};

export default Main;
