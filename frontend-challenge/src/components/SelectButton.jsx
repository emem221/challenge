import { useState } from "react";

const SelectButton = ({ title, setShowModal, handleSelection }) => {
  const [openModal] = useState(false);

  const handleSelect = () => handleSelection(title);

  return (
    <button
      onClick={() => {
        handleSelect();
        setShowModal(!openModal);
      }}
    >
      {title}
    </button>
  );
};

export default SelectButton;
