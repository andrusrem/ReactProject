import React from 'react';
import "./index.css";
import "../index.css";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLanguage } from "../LanguageContext";


// Fetch Activities
const fetchActivities = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/Activities`);
  return data;
};

const ActivityList = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['Activities'],
        queryFn: fetchActivities,
      });
  const { language } = useLanguage();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Create translations
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

  return (
    <ul>
      {translations.map((activity) => (
        <li key={activity[language].id}>
          <h3>{activity[language].title}</h3>
          <p>{activity[language].body}</p>
        </li>
      ))}
    </ul>
  );
};

const Activities = () => {
  return (
    <div className='activity-list-container'>
      <h1>Activities</h1>
      <ActivityList />
    </div>
  );
};

export default Activities;
