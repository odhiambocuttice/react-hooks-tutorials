//Set up UseReducer
export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }

  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Add a name" };
  }

  if (action.type === "CLOSE") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("DO SOMETHING");
};
