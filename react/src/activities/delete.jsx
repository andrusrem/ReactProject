import React from 'react';
import { Delete } from '../controllers/ActivityController';
import { useLanguage } from "../LanguageContext";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const DeleteActivity = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();

    // Fetch Activity Function
    const fetchActivity = async () => {
        const url = `${import.meta.env.VITE_API_URL}/Activities/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
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
    
    // Access language from context
    const { language } = useLanguage();

    // Transform data into language-specific format
    const getActivityByLanguage = (data) => ({
        en: {
            id: data.id,
            title: data.titleENG,
            body: data.bodyENG,
            question: 'Are you shore, that you want to delete this Activity?'
        },
        et: {
            id: data.id,
            title: data.titleEST,
            body: data.bodyEST,
            question: 'Kas sa oled kindel, et sa tahad kustuta seda Activity?'
        },
        ru: {
            id: data.id,
            title: data.titleRUS,
            body: data.bodyRUS,
            question: 'Ты уверен, что хочешь удалить этот Activity?'
        },
        fin: {
            id: data.id,
            title: data.titleFIN,
            body: data.bodyFIN,
            question: 'Haluatko poistaa tämän Activity?'
        },
    });
    const onClick = async (event) => {
        event.preventDefault();
        const url = `${import.meta.env.VITE_API_URL}/Activities/${id}`;
        if(url != null)
        {
           const req = await Delete(url ,activity[language].id);
            navigate("../activities", { replace: true });
        }
    }
    // Wait for loading or handle errors
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No activity found.</p>;

    // Get the activity for the selected language
    const activity = getActivityByLanguage(data);

    return <div className='w-screen'>
        <div className=' grid w-80% m-auto justify-around text-center'>
            <div className='text-3xl text-red'>{activity[language].question}</div>
            <div className='mt-5'>
                <div><h3 className='text-2xl'>Title</h3></div>
                <div>{activity[language].title}</div>
            </div>
            <div className='mt-5'>
                <div><h3 className='text-2xl'>Body</h3></div>
                <div>{activity[language].body}</div>
            </div>
            <a onClick={onClick} className='btn border-red hover:bg-red hover:text-white mt-5'>Delete</a>
        </div>
    </div>
}

export default DeleteActivity;