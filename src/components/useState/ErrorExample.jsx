import React, { useState } from "react";
import { data } from "../../data";

const ErrorExample = () => {
  const text = "Simps";
  const [title, setTitle] = useState(text);
  const [people, setPeople] = useState(data);
  const [persondetail, setPersonDetail] = useState({
    name: "Kenya",
    age: 22,
    nationality: "Kenyan",
  });

  const handleClick = () => {
    if (title === "Simps") {
      setTitle("Girl");
    } else {
      setTitle(text);
    }
  };

  const deletePeople = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const deleteNationality = () => {
    if (persondetail.nationality === "Kenyan") {
      setPersonDetail({ ...persondetail, nationality: "Ugandan" });
    } else {
      setPersonDetail({ ...persondetail, nationality: "Kenyan" });
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>

      {/* array */}
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => deletePeople(id)}>remove</button>
          </div>
        );
      })}

      {/* object */}
      <div>
        <h3>{persondetail.name}</h3>
        <h3>{persondetail.age}</h3>
        <h3>{persondetail.nationality}</h3>
        <button onClick={() => deleteNationality()}>nationality</button>
      </div>
    </React.Fragment>
  );
};

export default ErrorExample;
