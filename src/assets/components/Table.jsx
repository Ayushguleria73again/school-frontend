import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Table() {
    const [state, setstate] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api')
            .then(response => response.json())
            .then(json => setstate(json))
            .catch(err => console.log(err))
    }, [])
    console.log(state);


    const userdelete = async (id) => {
        await fetch(`http://localhost:8000/api/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                setstate((prevstate) => prevstate.filter((mac) => mac._id !== id));
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                image
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Last
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Age
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Gender
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {state.map((data) => {
                                            const { _id, name, last, age, gender, files } = data;
                                            return (
                                                <tr key={_id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td><img
                                                        src={`http://localhost:8000/${files}`}
                                                        alt={files}
                                                        width="50px"
                                                        onError={(e) => e.target.src = 'fallback-image-url.jpg'}
                                                    />
                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{last}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{age}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">{gender}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                        <button onClick={() => userdelete(_id)}>Delete</button>
                                                        <Link to={`/update/${_id}`}>Update</Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Table;
