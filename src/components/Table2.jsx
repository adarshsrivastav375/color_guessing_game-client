

const Table = ({ contasts, pagination, callback, currentPage }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Game Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            enrolled User
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Result
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contasts.map((item) => (
                        <tr className="bg-whit border-b-2 " key={item._id}>
                            <td className="px-6 py-2">
                                {item._id}
                            </td>
                            <td className="px-6 py-2">
                                {item.enrolledUser}
                            </td>
                            <td className="px-6 py-2">
                                {item.TotalAmount}
                            </td>
                            <td className="px-6 py-2">
                                {item.result ? (
                                    Object.keys(item.result).map((key) => (
                                        <div key={key} className={`w-5 h-5 bg-${item.result[key]}-600 rounded-xl`}></div>
                                    ))
                                ) : <div className="text-orange-700">On Going...</div>}

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-end pt-4 bottom-[10px] right-[10px] left-[10px]" aria-label="Table navigation po">
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    {pagination.map((item, index) => (
                        <li key={index} onClick={() => { callback(item) }}>
                            <a className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === item ? 'page-active' : ''} ${(index == 0 && currentPage > 1) ? 'rounded-s-lg' : (index == (pagination.length - 1) && currentPage != (pagination.length - 1)) ? 'rounded-e-lg' : ''}`}>{(index == 0 && currentPage > 1) ? 'Previous' : (index == (pagination.length - 1) && currentPage != pagination[(pagination.length - 1)] ? 'Next' : item)}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Table