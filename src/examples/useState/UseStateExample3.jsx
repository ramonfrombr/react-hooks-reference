import React, { useState } from "react";

const UseStateExample3 = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Show Modal</button>

      {toggleModal && <Modal setToggleModal={setToggleModal} />}
    </div>
  );
};

const Modal = ({ setToggleModal }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "modalContainer") setToggleModal((prev) => !prev);
  };

  return (
    <div
      id="modalContainer"
      style={styles.modalContainer}
      onClick={handleCloseModal}
    >
      <div style={styles.modalContent}>
        <h1>Excepteur dolor nulla labore dolor veniam dolor non deserunt.</h1>
        <p>
          Tempor do ipsum aute non amet exercitation fugiat nostrud eu ad. Qui
          est cupidatat consequat ad dolor do dolore ea incididunt consequat
          excepteur laborum. Proident ad non dolore excepteur occaecat minim
          ipsum ex reprehenderit. Duis enim sint amet ea ad est commodo do
          commodo adipisicing.
        </p>
      </div>
    </div>
  );
};

export default UseStateExample3;

export const code = ``;

export const snippets = [{ fileName: "Modal.jsx", fileContent: code }];

const styles = {
  modalContainer: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modaContent: {
    backgroundColor: "white",
    width: "80%",
    padding: "10px",
  },
};
