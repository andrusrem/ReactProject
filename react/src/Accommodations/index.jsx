import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from "../LanguageContext";
import {GetAccommodations} from '../controllers/AccommodationController';

// Fetch Activities
const fetchAccommodations = async () => {
  const url = `${import.meta.env.VITE_API_URL}/Accommodations`;
  const data = await GetAccommodations(url);
  return data;
};

const AccommodationList = () => {
  // React Query to fetch data
  const { data, error, isLoading } = useQuery({
    queryKey: ["Acccommodations"],
    queryFn: fetchAccommodations,
  });

  // Access language from context
  const { language } = useLanguage();

  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);

  // Ensure hooks are called unconditionally
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Create translations after hooks
  const translations = data.map((accommodation) => ({
    en: {
      id: accommodation.id,
      title: accommodation.titleENG,
      body: accommodation.bodyENG,
    },
    et: {
      id: accommodation.id,
      title: accommodation.titleEST,
      body: accommodation.bodyEST,
    },
    ru: {
      id: accommodation.id,
      title: accommodation.titleRUS,
      body: accommodation.bodyRUS,
    },
    fin: {
      id: accommodation.id,
      title: accommodation.titleFIN,
      body: accommodation.bodyFIN,
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
    <div className='mt-0'>
      <ul className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-1 lg:justify-stretch lg:content-stretch">
        {paginatedTranslations.map((accommodation) => (
          <div className=''>
            <li key={accommodation[language].id} className="card glass ml-2 mr-2">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Activity illustration"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{accommodation[language].title}</h2>
                <p>{accommodation[language].body}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={{
                      pathname: '/accommodations/show/',
                      search: `?id=${accommodation[language].id}`,
                    }}
                    className="btn btn-primary"
                  >
                    Show
                  </Link>
                  <Link 
                    to={{
                      pathname: '/accommodations/edit/',
                      search: `?id=${accommodation[language].id}`,
                    }}
                    className="btn hover:border-orange hover:border-2 ">Edit</Link>
                  <Link 
                    to={{
                      pathname: '/accommodations/delete/',
                      search: `?id=${accommodation[language].id}`,
                    }}
                    className="btn hover:border-red hover:border-2 ">Delete</Link>
                </div>
              </div>
            </li>
          </div>

        ))}
      </ul>
      {totalPages > 1 ? <div className="flex justify-center mt-10">
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
      </div> : <span hidden> only one page</span>}
      
    </div>
  );
};


const Accommodations = () => {
  return (
    <div className='grid gap-4 place-content-stretch z-10'>
      <div className='flex grid-rows justify-between'>
        <div className='place-self-start ml-2'>
          <h1>Accommodations</h1>
        </div>
        <div className='place-self-end mr-2'>
          <Link
            to='/accommodations/create'
            className="btn btn-primary"
          >
            Add new accommodation
          </Link>
        </div>

      </div>
      <AccommodationList />
    </div>
  );
};

export default Accommodations;
