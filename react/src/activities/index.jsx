import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";
import "../index.css";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLanguage } from "../LanguageContext";
import { GetActivities } from '../controllers/ActivityController';

// Fetch Activities
const fetchActivities = async () => {
  const url = `${import.meta.env.VITE_API_URL}/Activities`;
  const data = await GetActivities(url);
  return data;
};

const ActivityList = () => {
  // React Query to fetch data
  const { data, error, isLoading } = useQuery({
    queryKey: ["Activities"],
    queryFn: fetchActivities,
  });

  // Access language from context
  const { language } = useLanguage();

  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);

  // Ensure hooks are called unconditionally
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Create translations after hooks
  const translations = data.map((activity) => ({
    en: {
      id: activity.id,
      title: activity.titleENG,
      body: activity.bodyENG,
    },
    et: {
      id: activity.id,
      title: activity.titleEST,
      body: activity.bodyEST,
    },
    ru: {
      id: activity.id,
      title: activity.titleRUS,
      body: activity.bodyRUS,
    },
    fin: {
      id: activity.id,
      title: activity.titleFIN,
      body: activity.bodyFIN,
    },
  }));

  // Pagination logic
  const itemsPerPage = 4;
  const totalPages = Math.ceil(translations.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTranslations = translations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  // Render the paginated translations
  return (
    <div className=''>
      <ul className="grid gap-4 grid grid-flow-col lg:justify-stretch lg:content-stretch">
        {paginatedTranslations.map((activity) => (
          <li key={activity[language].id} className="card glass w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Activity illustration"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{activity[language].title}</h2>
              <p>{activity[language].body}</p>
              <div className="card-actions justify-end">
                <Link
                  to={{
                    pathname: '/activities/show/',
                    search: `?id=${activity[language].id}`,
                  }}
                  className="btn btn-primary"
                >
                  Show
                </Link>
                <button className="btn btn-primary">Edit</button>
                <button className="btn hover:bg-red ">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        <button
          className="btn btn-p mr-2"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="font-bold mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Activities = () => {
  return (
    <div className='grid gap-4 xl:mt-10% place-content-stretch'>
      <div className='grid place-content-center'>
        <h1>Activities</h1>
      </div>
      <ActivityList />
    </div>
  );
};

export default Activities;
