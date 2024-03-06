

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { httpAuth } from "..";
import { useSelector } from "react-redux";
const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        maxWidth: "400px",
        height: "300px",
        margin: "auto",
        background: "#fff",
        padding: "20px",
        border: "red 2px solid",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
};

const Bet = ({ game, callback }) => {

    const userState = useSelector(state => state.user);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [amount, setAmount] = useState(5);
    const [color, setColor] = useState(null);
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        setBalance(userState.userData.walletBalance)
    }, [userState])

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setAmount(5)
        setModalIsOpen(false);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };
    const increament = () => {
        setAmount(amount + 5)
    }
    const decreament = () => {
        if (amount >= 5) {
            setAmount(Number(amount) - 5)
        }

    }

    const handleConfirm = async () => {
        if (amount > balance) {
            alert(" Wallet balance is low")
            closeModal();
            setAmount(5)
            return;
        }
        const payload = {
            amount, color, gameId: game._id,
        }
        await httpAuth.post('/api/v1/game', payload)
        callback()
        closeModal();
        setAmount(5)
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
                    className=""
                >
                    <div className="flex flex-col items-center p-10">
                        <h2 className={`text-orange-700`}>{color}</h2>
                        <h2>Enter Amount</h2>

                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 border border-red-600">
                            <button className="bg-orange-700 text-white hover:bg-orange-400 h-full w-20 rounded-l cursor-pointer" onClick={decreament}>
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input type="number" className="outline-none text-center w-full bg-white font-semibold text-md  md:text-basecursor-default flex items-center text-orange-700 " name="amount" value={amount} onChange={handleAmountChange} />
                            <button className="bg-orange-700 text-white hover:bg-orange-400 h-full w-20 rounded-r cursor-pointer" onClick={increament}>
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                        <div className="flex flex-row gap-10 m-10">
                            <button onClick={handleConfirm} className="px-5  rounded p-2 bg-orange-700 text-white hover:bg-orange-600">Confirm</button>
                            <button onClick={closeModal} className="rounded hover:text-orange-700 p-2">Cancel</button>

                        </div>

                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Bet