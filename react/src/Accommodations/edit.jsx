import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Edit } from '../controllers/AccommodationController';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const EditAccommodations = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const url = `${import.meta.env.VITE_API_URL}/Accommodations`;
    const id = searchParams.get("id");
    // Fetch Activity Function
    const checkId = (data) => {
        if (data.id === null || data.id === undefined) {
            navigate('../404', { replace: true });
        }
    }
    const fetchAccommodations = async () => {
        const url = `${import.meta.env.VITE_API_URL}/Accommodations/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
            checkId(response.json);
            throw new Error("Failed to fetch accommodation");
        }
        const data = await response.json();

        console.log("Fetched data:", data); // Log the API response
        return data;
    };

    // React Query to fetch data
    const { data, error, isLoading } = useQuery({
        queryKey: [`Accommodations/${id}`],
        queryFn: fetchAccommodations,
    });
    const inputFields = async (data) => {
        return ([
            { name: "titleENG", label: "English title", type: "text", placeholder: "House for four", span: "title-eng-desc", inputType: 'input', value: data.titleENG },
            { name: "titleEST", label: "Estonian title", type: "text", placeholder: "Maja neljale", span: "title-est-desc", inputType: 'input', value: data.titleEST },
            { name: "titleRUS", label: "Russian title", type: "text", placeholder: "Дом на четверых", span: "title-rus-desc", inputType: 'input', value: data.titleRUS },
            { name: "titleFIN", label: "Finish title", type: "text", placeholder: "Koti nelja kauppa", span: "title-din-desc", inputType: 'input', value: data.titleFIN },
            { name: "bodyENG", label: "English description", type: "text", placeholder: "Nice place to stay.", span: "body-eng-desc", inputType: 'textarea', value: data.bodyENG },
            { name: "bodyEST", label: "Estonian description", type: "text", placeholder: "Hea majutus koht.", span: "body-est-desc", inputType: 'textarea', value: data.bodyEST },
            { name: "bodyRUS", label: "Russian description", type: "text", placeholder: "Хорошее место, чтобы поспать.", span: "body-rus-desc", inputType: 'textarea', value: data.bodyRUS },
            { name: "bodyFIN", label: "Finish description", type: "text", placeholder: "Hyvä paika.", span: "body-fin-desc", inputType: 'textarea', value: data.bodyFIN },
        ]);
    }

    const onSubmit = async (event) => {
        const data = new FormData(event.target);
        event.preventDefault();
        const accommodation = {
            titleENG: data.get('titleENG'),
            titleEST: data.get('titleEST'),
            titleRUS: data.get('titleRUS'),
            titleFIN: data.get('titleFIN'),
            bodyENG: data.get('bodyENG'),
            bodyEST: data.get('bodyEST'),
            bodyRUS: data.get('bodyRUS'),
            bodyFIN: data.get('bodyFIN'),
        }
        if (accommodation != null) {
            const req = await CreateNewAccommodation(url, accommodation)
            if (req === 204) {
                navigate("../accommodations", { replace: true });
            }
        }
    };

    useEffect(() => {
        const fields = async () => {
            const inputFieldsAr = await inputFields(data);
            setResults(inputFieldsAr);
        }
        fields();
    }, []);

    return <div className='grid w-screen'>
        <form className='m-auto w-80%' onSubmit={onSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {results.map((inputField) => (
                        <div className='sm:col-span-3'>
                            <label htmlFor={inputField.name} className='block text-sm/6 font-medium text-gray-900' aria-describedby={inputField.span}>
                                {inputField.label}
                            </label>
                            <span id={inputField.span} hidden>{inputField.label}</span>
                            <div className="mt-2">
                                {inputField.inputType == 'input' ? <input
                                    type={inputField.type}
                                    id={inputField.name}
                                    name={inputField.name}
                                    placeholder={inputField.placeholder}
                                    defaultValue={inputField.value}
                                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                /> : <textarea
                                    type={inputField.type}
                                    id={inputField.name}
                                    name={inputField.name}
                                    placeholder={inputField.placeholder}
                                    defaultValue={inputField.value}
                                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 mr-5">
                <Link
                    to="/accommodations"
                    className="btn text-sm/6 font-semibold text-gray-900"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black hover:text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    </div>
}

export default EditAccommodations;