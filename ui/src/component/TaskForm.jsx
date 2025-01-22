import React, { useState } from 'react';

const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(title, description, priority);



        const formData = { title, description, priority };
        console.log("form", formData);

        try {
            const resp = await fetch("/api/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            console.log(resp.status);
            if (resp.status == 201) {
                alert('uploaded')
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className='flex justify-center items-center  px-14 py-5'>

                <form className=' w-96 shadow-lg p-5' onSubmit={handleSubmit}>
                    <h1 className='text-center text-xl font-semibold mb-5'>ADD Task</h1>
                    <div className="mb-5">
                        <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task title</label>
                        <input
                            type="text"
                            id="id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea
                            id="address"
                            rows={4}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Address"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required />
                    </div>
                    <div className="mb-5">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                        <select id="countries"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Level</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>

                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>


            </div>


        </>
    )
}

export default TaskForm