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
