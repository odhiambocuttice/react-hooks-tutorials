import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });

  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        CLICK ME!
      </button>
    </>
  );
};

export default UseEffectBasics;
