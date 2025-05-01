import Head from 'next/head';
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Hirify | Smart Hiring Platform</title>
      </Head>

      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
            Welcome to Hirify
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            Streamline your hiring process with AI-powered matching and clean design.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>
      </main>
    </>
  );
}
