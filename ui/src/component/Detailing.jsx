import React from 'react'

export const Detailing = () => {
    return (
        <div className="flex justify-center items-center  w-[600px] p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> </p>
                <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> Task Title</h1>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, harum libero ducimus nesciunt laborum, deleniti similique dolores illo expedita nam tempora! Laborum aliquam quam sunt laboriosam ea odit reiciendis praesentium.
                </h5>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Status</p>
                <p className="inline-flex font-medium items-center text-blue-600 ">
                    Priority
                </p>
                <p>
                    date
                </p>
                <div className='mt-5 space-x-2'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">edit</button>
                    <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
                </div>

            </div>

        </div>

    )
}
