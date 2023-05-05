import { ReactComponent as CloseButton } from "../assets/images/close-button.svg";
import axios from "axios";
import { useState } from "react";

const Modal = ({ action, setShowModal, userData }) => {
  const [inputValue, setInputValue] = useState(0);
  const [openModal] = useState(true);
  const handleUpdateBalance = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...userData,
      walletBalance:
        action === "Deposit"
          ? Number(userData?.walletBalance) + Number(inputValue)
          : Number(userData?.walletBalance) - Number(inputValue),
    };

    axios
      .put(`http://localhost:3000/users/${userData?.id}`, updatedUser)
      .then((response) => {
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="blur">
      <div className="modal">
        <form onSubmit={handleUpdateBalance} className="w-95 mx-auto my-6">
          <div className="flex justify-between items-center w-full  ">
            <h4 className="text-2xl font-semibold">
              {action}
              <span className="ml-1">
                {action === "Deposit" ? "to" : "from"}
              </span>{" "}
              wallet
            </h4>
            <CloseButton onClick={() => setShowModal(!openModal)} />
          </div>
          <div className="input-box">
            <div>
              <h5 className="my-3 font-semibold text-base">Amount</h5>
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Enter deposit amount"
                className="text-box text-lato text-base border-gray"
              />
            </div>
          </div>
          <div className="modal-button">
            <button className="bg-deyork text-white text-base p-3 border-none rounded-sm">
              {action}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
