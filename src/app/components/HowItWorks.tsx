"use client"; // Für clientseitige Interaktivität (Link)

import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      title: "Launch the Solana Holder Bot",
      desc: "Kick off your journey by starting our Telegram bot to generate permanent Solana token holders.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 16 16">
           <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
           <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
        </svg>
      ),
    },
    {
      title: "Follow Simple Setup Steps",
      desc: "Complete the easy, guided process to configure your Solana memecoin holder generation.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
        </svg>
      ),
    },
    {
      title: "Watch Your Holders Grow",
      desc: "Sit back and see your Solana token community expand with new, permanent holders.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute bg-gradient-to-b from-black to-gray-900 inset-0 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-2xl border-4 border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 relative"
            >
              {/* Pfeil vom mittleren Kästchen */}
              {index === 1 && (
                <Link href="#guide" className="block">
                  <svg
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-blue-500 w-16 h-16 animate-pulse hover:text-blue-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                </Link>
              )}
              <div className="flex items-center justify-center mb-4">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white text-center group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-300 text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}