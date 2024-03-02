import React, { useState } from "react";
import Modal from "react-modal";

const App = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [amount, setAmount] = useState(0);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleConfirm = () => {
        // Handle the amount (e.g., send it to the server or perform some action)
        console.log("Amount entered:", amount);

        // Close the modal
        closeModal();
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Amount Modal"
            >
                <h2>Enter Amount</h2>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                />
                <button onClick={handleConfirm}>Confirm</button>
                <button onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    );
};

export default App;
