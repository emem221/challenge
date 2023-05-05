/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { ReactComponent as MobileMenu } from "../assets/images/kebab.svg";
import SelectButton from "./SelectButton";
import Modal from "./Modal";

const User = ({ data }) => {
  const { firstName, lastName, walletBalance } = data;
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

  const handleSelection = (string) => setAction(string);

  return (
    <>
      <div
        className="relative box justify-between h-full items-center"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="flex items-center h-full">
          <div className="">
            <img
              src="https://i.ibb.co/wdkxM83/image.png"
              width="40px"
              alt="image"
              border="0"
            />
          </div>
          <div className="user mx-3 flex">
            <p> {firstName}</p>
            <p className="ml-1">{lastName}</p>
          </div>
        </div>
        <div className="flex items-center">
          <h4 className="walletBalance mx-3">{walletBalance}</h4>
          <span>
            <MobileMenu />
            {showDropDown ? (
              <div className="absolute dropdown">
                <SelectButton
                  setShowModal={setShowModal}
                  title="Deposit"
                  userBalance={walletBalance}
                  handleSelection={handleSelection}
                />
                <SelectButton
                  setShowModal={setShowModal}
                  title="Withdraw"
                  userBalance={walletBalance}
                  handleSelection={handleSelection}
                />
              </div>
            ) : null}
          </span>
        </div>
      </div>

      {showModal ? (
        <Modal userData={data} action={action} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default User;
