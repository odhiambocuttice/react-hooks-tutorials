import React, { useState } from "react";
import UseEffectBasics from "../useEffect/UseEffectBasics";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <UseEffectBasics />}
    </>
  );
};

export default ShowHide;
