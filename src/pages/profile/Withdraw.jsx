import { useState, useEffect } from "react";
import { httpAuth } from "../../index"
import { useSelector } from "react-redux";

function Withdraw() {
  const userData = useSelector(state => state.user.userData);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(userData);
  }, [userData]);
  console.log(user)
  const [amount, setAmount] = useState("")
  const data = {
    amount,
    type: "withdraw"
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (amount >= user.walletBalance) {

        return alert(" wallet balance is low")
      }
      const response = await httpAuth.post("/api/v1/transaction/", data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  }
  return (
    <div className="flex w-[70%] flex-col items-center justify-center">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form >
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
  )
}

export default Withdraw