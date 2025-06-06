
// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pavan Prudvi Raj - Portfolio</title>
        <meta name="description" content="Portfolio of Pavan Prudvi Raj - SharePoint and Office 365 Administrator" />
      </Head>

      <main className="p-6 max-w-4xl mx-auto font-sans">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Pavan Prudvi Raj</h1>
          <p className="text-xl text-gray-600">SharePoint & Office 365 Administrator</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700">
            IT Professional with over 10 years of experience in Microsoft 365, SharePoint Administration, and Infrastructure Service Delivery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>PL-900 – Power Platform Fundamentals</li>
            <li>PL-200 – Power Platform Functional Consultant</li>
            <li>PL-300 – Power BI Data Analyst</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-700 mt-2">
            📧 <a href="mailto:Prudvirajgaddam1993@gmail.com" className="text-blue-600 underline">Prudvirajgaddam1993@gmail.com</a><br />
            📍 United States<br />
            🌐 <a href="https://linkedin.com/in/pavanprudviraj" className="text-blue-600 underline">LinkedIn Profile</a>
          </p>
        </section>
      </main>
    </>
  );
}
