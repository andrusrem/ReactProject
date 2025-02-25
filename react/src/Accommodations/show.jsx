import React from "react";
import { useLanguage } from "../LanguageContext";
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { GetAccommodationById } from "../controllers/AccommodationController";

const ShowAccommodation = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const navigate = useNavigate();

    const checkId = (data) => {
        if(data.id == null || data.id == undefined)
        {
            navigate('../404', {replace: true});
        }
    }

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

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No accommodation found.</p>;

    const accommodation = getAccommodationByLanguage(data);

    return (
        <div
            className="hero min-h-screen w-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{accommodation[language].title}</h1>
                    <p className="mb-5">
                        {accommodation[language].body}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default ShowAccommodation;