import Head from 'next/head';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
export default function Jobs() {
  // This will be replaced later with fetched jobs
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp' },
    { id: 2, title: 'Backend Developer', company: 'DataWorks' },
    { id: 3, title: 'Full Stack Engineer', company: 'CodeBridge' },
  ];

  return (
    <>
      <Head>
        <title>Jobs | Hirify</title>
      </Head>

      <NavBar />
      <main className="min-h-screen px-4 py-8 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Jobs</h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <Link href={`/jobs/${job.id}`} className="text-sm text-blue-500 hover:underline mt-2 inline-block">
                View details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
