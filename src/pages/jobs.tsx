import Head from 'next/head';
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';

type Job = {
    id: string;
    title: string;
    company: { display_name: string };
    location: { display_name: string };
    description: string;
    redirect_url: string;
  };

export default function Jobs() {
 const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data.results); // Adzuna'da "results" array'i gelir
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading jobs...</p>;

  return (
    <>
      <Head>
        <title>Jobs | Hirify</title>
      </Head>

      <NavBar />
      <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Latest Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.company.display_name} - {job.location.display_name}</p>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">{job.description}</p>
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 hover:underline">
              View Job →
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
