import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import JobSearch from '@/components/JobSearch';

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
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);  // Filtrelenmiş iş ilanlarını tutacak
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data.results);
        setFilteredJobs(data.results);  // Başlangıçta tüm iş ilanlarını göster
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery) {
      const results = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.display_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredJobs(results);
    } else {
      setFilteredJobs(jobs); // Arama yapılmazsa, tüm iş ilanlarını göster
    }
  };

  if (loading) return <p className="text-center mt-10">Loading jobs...</p>;

  return (
    <>
      <NavBar />
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Latest Jobs</h1>

        {/* JobSearch Componentini ekliyoruz */}
        <JobSearch onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
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
