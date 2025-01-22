import React from 'react'

const Cards = ({data}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> {data._id} </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Status</p>
            <p className="inline-flex font-medium items-center text-blue-600 ">
                Priority
            </p>
            <div className='mt-5 space-x-2'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</button>
            </div>

        </div>

    )
}

export default Cards