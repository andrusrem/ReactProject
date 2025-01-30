import React from 'react';
import { Activity } from '../models/Activity';
import { CreateNewActivity } from '../controllers/ActivityController';

const CreateActivity = () => {



    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return <div className='grid w-screen'
    ><form className='' onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className='sm:col-span-3'>
                        <label htmlFor="title-eng" className='block text-sm/6 font-medium text-gray-900'>
                            English title
                        </label>
                        <div className="mt-2"><input
                            type="text"
                            id='title-eng'

                            placeholder='Restaurant'
                            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                        /></div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="title-est" className="block text-sm/6 font-medium text-gray-900">
                            Estonian title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title-est"
                                name="title-est"
                                type="text"
                                placeholder='Restoran'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="title-rus" className="block text-sm/6 font-medium text-gray-900">
                            Russian title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title-rus"
                                name="title-rus"
                                type="text"
                                placeholder='Ресторан'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="title-fin" className="block text-sm/6 font-medium text-gray-900">
                            Finish title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title-fin"
                                name="title-fin"
                                type="text"
                                placeholder='Ravintola'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="body-eng" className="block text-sm/6 font-medium text-gray-900">
                            English description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="body-eng"
                                name="body-eng"
                                type="text"
                                placeholder='Nice place to eat'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="body-est" className="block text-sm/6 font-medium text-gray-900">
                            Estonian description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="body-est"
                                name="body-est"
                                type="text"
                                placeholder='Hea söögi koht'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="body-eng" className="block text-sm/6 font-medium text-gray-900">
                            Russian description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="body-eng"
                                name="body-eng"
                                type="text"
                                placeholder='Nice place to eat'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="body-eng" className="block text-sm/6 font-medium text-gray-900">
                            English description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="body-eng"
                                name="body-eng"
                                type="text"
                                placeholder='Nice place to eat'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default CreateActivity;