import { useEffect, useState } from "react";
import { httpAuth } from "../..";
import { useSelector } from "react-redux";



const Transactions = () => {
    const userData = useSelector(state => state.user.userData);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [transactions, setTransactions] = useState([])
    console.log(userData)

    useEffect(() => {
        setUser(userData);
        console.log(user.bankDetails)
        setLoading(false);
    }, [user.bankDetails, userData]);

    useEffect(() => {
        const fetchTransData = async () => {
            try {
                const response = await httpAuth.get("/api/v1/users/transactions");

                setTransactions(response.data.data)
                setLoading(false);
            } catch (error) {
                alert(error.response.data.message);

            }
        };

        fetchTransData();

    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div>
                <h1>Bank Details</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Bank Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                A/c Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                IFSC Code
                            </th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        <tr className="bg-whit border-b-2 ">
                            <td className="px-6 py-2">
                                {user.bankDetails.bankName}
                            </td>
                            <td className="px-6 py-2">
                                {user.bankDetails.acNumber}
                            </td>
                            <td className="px-6 py-2">
                                {user.bankDetails.ifsc}
                            </td>

                        </tr>

                    </tbody> */}
                </table>

            </div>
            <div>
                <h1>Transactions</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Transaction ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                transaction type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ammount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((item) => (
                            <tr className="bg-whit border-b-2 " key={item._id}>
                                <td className="px-6 py-2">
                                    {item._id}
                                </td>
                                <td className="px-6 py-2">
                                    {item.amount}
                                </td>
                                <td className="px-6 py-2">
                                    {item.type}
                                </td>
                                <td className="px-6 py-2">
                                    {item.status}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>




        </div>
    )
}

export default Transactions