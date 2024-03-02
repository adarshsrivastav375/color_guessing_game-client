
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { httpAuth } from "..";
const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    },
    content: {
        maxWidth: "400px",
        height: "300px",
        margin: "auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
};

const Bet = ({ game, callback }) => {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [color, setColor] = useState(null);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleConfirm = async () => {
        const payload = {
            amount, color, gameId: game._id,
        }
        await httpAuth.post('/api/v1/game', payload)
        callback()
        // Close the modal
        closeModal();
    };
    return (
        <div>
            <div>
                <div className=" flex flex-row items-center justify-around m-6">
                    <div onClick={() => { openModal(); setColor("green") }} className=" bg-green-100 px-4 py-2 text-green-700 rounded-lg  border-4 border-green-700 cursor-pointer hover:border-green-400 hover:bg-green-600 hover:text-white">join green</div>
                    <div onClick={() => { openModal(); setColor("blue") }} className=" bg-blue-100 px-4 py-2 text-blue-700 rounded-lg  border-4 border-blue-700 cursor-pointer hover:border-blue-400 hover:bg-blue-600 hover:text-white"> join Blue</div>
                    <div onClick={() => { openModal(); setColor("red") }} className=" bg-red-100 px-4 py-2 text-red-700 rounded-lg  border-4 border-red-700 cursor-pointer hover:border-red-400 hover:bg-red-600 hover:text-white"> join red</div>
                </div>
            </div>
            <div className="flex justify-between p-10">
                <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">0</div>
                <div className="bg-red-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">1</div>
                <div className="bg-blue-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">2</div>
                <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">3</div>
                <div className="bg-red-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">4</div>
                <div className="bg-blue-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">5</div>
                <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">6</div>
                <div className="bg-red-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">7</div>
                <div className="bg-blue-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">8</div>
                <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">9</div>

            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Amount Modal"
                    style={customStyles}
                >
                    <h2>{color}</h2>
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
        </div>
    )
}

export default Bet