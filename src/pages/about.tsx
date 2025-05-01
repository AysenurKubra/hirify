import NavBar from "@/components/NavBar";

export default function About() {
    return (
    <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">About Hirify</h1>
          <p className="text-lg">
            Hirify is a modern platform built with Next.js and Tailwind CSS to simplify the job search experience.
            Our goal is to connect talented individuals with exciting opportunities, all with a clean and responsive design.
          </p>
        </div>
      </div>
    </>
    );
  }
  