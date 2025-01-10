import React from "react";
import { Link } from "react-router-dom";
import { GetActivityById } from "../controllers/ActivityController";
import { useLanguage } from "../LanguageContext";
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const ShowActivity = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

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
        },
        et: {
            id: data.id,
            title: data.titleEST,
            body: data.bodyEST,
        },
        ru: {
            id: data.id,
            title: data.titleRUS,
            body: data.bodyRUS,
        },
        fin: {
            id: data.id,
            title: data.titleFIN,
            body: data.bodyFIN,
        },
    });

    // Wait for loading or handle errors
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No activity found.</p>;

    // Get the activity for the selected language
    const activity = getActivityByLanguage(data);

    return (
        <div
            className="hero min-h-screen w-100"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{activity[language].title}</h1>
                    <p className="mb-5">
                        {activity[language].body}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ShowActivity;

