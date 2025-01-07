/* eslint-disable react/prop-types */
import { useState } from "react";

export const CreateCard = ({ addCard }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currentOption, setCurrentOption] = useState("");
  const [options, setOptions] = useState([]);

  const handleAddOption = () => {
    if (currentOption.trim() !== "") {
      setOptions((prevOptions) => [...prevOptions, currentOption]);
      setCurrentOption("");
    }
  };

  const handleCreateButton = () => {
    if (!name.trim() || !description.trim()) {
      alert("Name and Description cannot be empty");
      return;
    }

    const cardData = {
      name,
      description,
      options,
    };

    addCard(cardData);
    setName("");
    setDescription("");
    setOptions([]);
    alert("Card created Successfully!");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={description}
        type="text"
        placeholder="Enter Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div>
        <input
          value={currentOption}
          type="text"
          placeholder="Add Interest"
          onChange={(e) => {
            setCurrentOption(e.target.value);
          }}
        />
        <button onClick={handleAddOption}>Add Option</button>
      </div>

      <button onClick={handleCreateButton}>Create Card</button>
    </div>
  );
};
