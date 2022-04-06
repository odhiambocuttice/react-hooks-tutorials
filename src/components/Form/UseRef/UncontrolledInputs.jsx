import React, { useRef } from "react";

const UncontrolledInputs = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer);
    console.log(refContainer.current.value);
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form">
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UncontrolledInputs;
