import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Edit } from '../controllers/ActivityController';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


const EditActivity = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const id = searchParams.get("id");
    // Fetch Activity Function
    const checkId = (data) => {
        if (data.id === null || data.id === undefined) {
            navigate('../404', { replace: true });
        }
    }
    const fetchActivity = async () => {
        const url = `${import.meta.env.VITE_API_URL}/Activities/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
            checkId(response.json);
            throw new Error("Failed to fetch activity");
        }
        const data = await response.json();

        console.log("Fetched data:", data); // Log the API response
        return data;
    };

    // React Query to fetch data
    const { data, error, isLoading } = useQuery({
        queryKey: [`Activities/${id}`],
        queryFn: fetchActivity,
    });

    const inputFields = async (data) => {
        return [
            { name: "titleENG", label: "English title", type: "text", placeholder: "Restaurant", span: "title-eng-desc", inputType: 'input', value: data.titleENG },
            { name: "titleEST", label: "Estonian title", type: "text", placeholder: "Restoran", span: "title-est-desc", inputType: 'input', value: data.titleEST },
            { name: "titleRUS", label: "Russian title", type: "text", placeholder: "Ресторан", span: "title-rus-desc", inputType: 'input', value: data.titleRUS },
            { name: "titleFIN", label: "Finish title", type: "text", placeholder: "Ruokala", span: "title-din-desc", inputType: 'input', value: data.titleFIN },
            { name: "bodyENG", label: "English description", type: "text", placeholder: "Nice place to eat.", span: "body-eng-desc", inputType: 'textarea', value: data.bodyENG },
            { name: "bodyEST", label: "Estonian description", type: "text", placeholder: "Hea söögi koht.", span: "body-est-desc", inputType: 'textarea', value: data.bodyEST },
            { name: "bodyRUS", label: "Russian description", type: "text", placeholder: "Хорошее место, чтобы поесть.", span: "body-rus-desc", inputType: 'textarea', value: data.bodyRUS },
            { name: "bodyFIN", label: "Finish description", type: "text", placeholder: "Hyvä ruokala.", span: "body-fin-desc", inputType: 'textarea', value: data.bodyFIN },
        ];
    }
    useEffect(() => {
        const fields = async () => {
            const inputFieldsAr = await inputFields(data);
            setResults(inputFieldsAr);
        } 
        fields();
    }, []);
    // // Access language from context
    // const { language } = useLanguage();


    
    const onSubmit = async (event) => {
        const url = `${import.meta.env.VITE_API_URL}/Activities/${id}`;
        const formData = new FormData(event.target);
        event.preventDefault();
        const activity = {
            Id: id,
            titleENG: formData.get('titleENG'),
            titleEST: formData.get('titleEST'),
            titleRUS: formData.get('titleRUS'),
            titleFIN: formData.get('titleFIN'),
            bodyENG: formData.get('bodyENG'),
            bodyEST: formData.get('bodyEST'),
            bodyRUS: formData.get('bodyRUS'),
            bodyFIN: formData.get('bodyFIN'),
        }
        if (activity != null) {
            const req = await Edit(url, activity)
            console.log(req.status);
            if (req.status === 204) {
                navigate("../activities", { replace: true });
            }
        }

    };
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
                                    defaultValue={inputField.value}
                                    placeholder={inputField.placeholder}
                                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 mr-5">
                <Link
                    to="/activities"
                    className="btn text-sm/6 font-semibold text-gray-900"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-black font-semibold hover:text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    </div>
}

export default EditActivity;