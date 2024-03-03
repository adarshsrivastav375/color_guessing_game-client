import { useState } from "react"
import { httpAuth } from "../..";

function BankDetails() {
  const [bankName, setBankName] = useState('');
  const [acNumber, setAcNumber] = useState('');
  const [ifsc, setIfsc] = useState('');

  const updateHandler = async (e) => {
    e.preventDefault();
    const data = {
      bankName,
      acNumber,
      ifsc
    }
    try {
      const response = await httpAuth.post("/api/v1/users/add-bank-details", data);
     
      alert(response.data.message);
      setBankName("")
      setAcNumber("")
      setIfsc("")
    } catch (error) {
      console.error("Error fetching data:", error);
      alert(error.response.data.message);
    }
  }


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              bank Name
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setBankName(e.target.value)}
                name="bankName"
                type="text"
                value={bankName}
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Account Number
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setAcNumber(e.target.value)}
                value={acNumber}
                name="acNumber"
                type="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
              IFSC
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setIfsc(e.target.value)}
                value={ifsc}
                name="ifsc"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              onClick={updateHandler}
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BankDetails