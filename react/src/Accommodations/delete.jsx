import React from 'react';
import { Delete } from '../controllers/AccommodationController';
import { useLanguage } from "../LanguageContext";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const DeleteAccommodation = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();

    const checkId = (data) => {
        if (data.id === null || data.id === undefined) {
            navigate('../404', { replace: true });
        }
    }

    // Fetch Activity Function
    const fetchAccommodation = async () => {
        const url = `${import.meta.env.VITE_API_URL}/Accommodations/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
            checkId(response.json);
            throw new Error("Failed to fetch accommodation");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    };

    const { data, error, isLoading } = useQuery({
        queryKey: [`Accommodations/${id}`],
        queryFn: fetchAccommodation,
    });
    
    const { language } = useLanguage();

    const getAccommodationByLanguage = (data) => ({
        en: {
            id: data.id,
            title: data.titleENG,
            body: data.bodyENG,
            question: 'Are you shore, that you want to delete this Accommodation?'
        },
        et: {
            id: data.id,
            title: data.titleEST,
            body: data.bodyEST,
            question: 'Kas sa oled kindel, et sa tahad kustuta seda Accommodation?'
        },
        ru: {
            id: data.id,
            title: data.titleRUS,
            body: data.bodyRUS,
            question: 'Ты уверен, что хочешь удалить этот Accommodation?'
        },
        fin: {
            id: data.id,
            title: data.titleFIN,
            body: data.bodyFIN,
            question: 'Haluatko poistaa tämän Accommodation?'
        },
    });
    const onClick = async (event) => {
        event.preventDefault();
        const url = `${import.meta.env.VITE_API_URL}/Accommodations/${id}`;
        if(url != null)
        {
           const req = await Delete(url ,accommodation[language].id);
            navigate("../accommodations", { replace: true });
        }
    }
    // Wait for loading or handle errors
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No accommodation found.</p>;

    // Get the activity for the selected language
    const accommodation = getAccommodationByLanguage(data);

    return <div className='w-screen'>
        <div className=' grid w-80% m-auto justify-around text-center'>
            <div className='text-3xl text-red'>{accommodation[language].question}</div>
            <div className='mt-5'>
                <div><h3 className='text-2xl'>Title</h3></div>
                <div>{accommodation[language].title}</div>
            </div>
            <div className='mt-5'>
                <div><h3 className='text-2xl'>Body</h3></div>
                <div>{accommodation[language].body}</div>
            </div>
            <a onClick={onClick} className='btn border-red hover:bg-red hover:text-white mt-5'>Delete</a>
        </div>
    </div>
}

export default DeleteAccommodation;