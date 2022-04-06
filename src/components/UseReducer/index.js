import React, { useState, useReducer } from "react";
import { data } from "../../data";
import Modal from "./Modal";
import { reducer } from "./reducer";
// import {reducer}

const Index = () => {
  const [name, setName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  const defualtState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };

  const [state, dispatch] = useReducer(reducer, defualtState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName("");
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onSubmit="onSubmit">Submit</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h3>{person.name}</h3>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: person.id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
