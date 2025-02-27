import React, { useState } from 'react';
import { CreateNewAccommodation } from '../controllers/AccommodationController';
import { Link, useNavigate } from 'react-router-dom';

const inputFields = [
    { name: "titleENG", label: "English title", type: "text", placeholder: "House for four", span: "title-eng-desc", inputType: 'input' },
    { name: "titleEST", label: "Estonian title", type: "text", placeholder: "Maja neljale", span: "title-est-desc", inputType: 'input' },
    { name: "titleRUS", label: "Russian title", type: "text", placeholder: "Дом на четверых", span: "title-rus-desc", inputType: 'input' },
    { name: "titleFIN", label: "Finish title", type: "text", placeholder: "Koti nelja kauppa", span: "title-din-desc", inputType: 'input' },
    { name: "bodyENG", label: "English description", type: "text", placeholder: "Nice place to stay.", span: "body-eng-desc", inputType: 'textarea' },
    { name: "bodyEST", label: "Estonian description", type: "text", placeholder: "Hea majutus koht.", span: "body-est-desc", inputType: 'textarea' },
    { name: "bodyRUS", label: "Russian description", type: "text", placeholder: "Хорошее место, чтобы поспать.", span: "body-rus-desc", inputType: 'textarea' },
    { name: "bodyFIN", label: "Finish description", type: "text", placeholder: "Hyvä paika.", span: "body-fin-desc", inputType: 'textarea' },
]


const CreateAccommodations = () => {
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const url = `${import.meta.env.VITE_API_URL}/Accommodations`;
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
            if (req === 201) {
                navigate("../accommodations", { replace: true });
            }
        }
    };

    const handleImageChange = (event) => {
        const selectedImages = Array.from(event.target.files);
        setFiles((prevImages) => [...prevImages, ...selectedImages]);
    }

    const handleRemoveImage = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (files.length === 0) return;

        const formData = new FormData();
        files.forEach((file) => formData.append("files", file));

        // try {
        //     const response = await fetch("YOUR_BACKEND_URL/upload", {
        //         method: "POST",
        //         body: formData,
        //     });

        //     const result = await response.json();
        //     console.log("Upload success:", result);
        // } catch (error) {
        //     console.error("Upload error:", error);
        // }
    };

    return <div className='grid w-screen'>
        <form className='m-auto w-80%' onSubmit={onSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <form className='w-auto' onSubmit={handleSubmit}>
                    <input name='image' type="file" multiple onChange={handleImageChange} className="file-input file-input-bordered bg-white file-input-red w-full max-w-xs" />
                    <ul className='w-auto'>
                        {files.map((file, index) => (
                            <li key={index} className='w-auto'>
                                <span>{file.name} - {Math.round(file.size / 1024)} KB</span>
                                <button type="button" onClick={() => handleRemoveImage(index)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button type="submit">Upload</button>
                </form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {inputFields.map((inputField) => (
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
                                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                /> : <textarea
                                    type={inputField.type}
                                    id={inputField.name}
                                    name={inputField.name}
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

export default CreateAccommodations;