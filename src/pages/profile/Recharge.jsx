
import { useState } from "react";
import { httpAuth } from "../../index"
import QR from "../../assets/QR.jpg"
const Recharge = () => {
    const [transId, setTransId] = useState("")
    const [amount, setAmount] = useState("")
    const data = {
        transId,
        amount,
        type: "deposit"
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await httpAuth.post("/api/v1/transaction/", data);
            alert(response.data.message);
            setTransId("")
            setAmount("")
        } catch (error) {
            alert(error.response.data.message);
            console.error("Error fetching data:", error);
        }

    }
    return (
        <div className="flex w-[70%] flex-col items-center justify-center">
            <div className="flex w-[70%] flex-col items-center justify-center">
                <div className="w-1/2">
                    <img
                        className="mx-auto w-auto"
                        src={QR}
                        alt="Your Company"
                    />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter the transaction id
                            </label>
                            <div className="mt-2">
                                <input

                                    name="transactionId"
                                    type="text"
                                    value={transId}
                                    onChange={(e) => setTransId(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter Amount
                            </label>
                            <div className="mt-2">
                                <input

                                    name=""
                                    type="Number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                onClick={submitHandler}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600"
                            >
                                submit
                            </button>
                        </div>
                    </form>


                </div>
            </div >
        </div>

    )
}

export default Recharge