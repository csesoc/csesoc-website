import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { sponsorInfo } from '@/../public/data/sponsorInfos';

export default function SponsorModal({
  sponsorInfo,
  setFalse
}: {
  sponsorInfo: sponsorInfo | null;
  setFalse: () => void;
}) {
  // Close modal with Escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFalse();
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [setFalse]);

  if (sponsorInfo === null) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) setFalse();
      }}
    >
      <div
        className="relative w-full max-w-2xl mx-4 overflow-hidden bg-slate-900 rounded-xl shadow-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={setFalse}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900 hover:bg-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex flex-col p-6">
          {/* Sponsor logo */}
          <div className="flex justify-center py-8 border-b">
            <a
              href={sponsorInfo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 focus:scale-105 focus:outline-none"
              aria-label={`Visit ${sponsorInfo.alt}`}
            >
              <div className="relative w-64 h-32">
                <img
                  src={`./${sponsorInfo.svg}`}
                  alt={sponsorInfo.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            </a>
          </div>

          {/* Sponsor description */}
          <div className="py-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-300">About {sponsorInfo.name}</h2>
            <p className="text-gray-400 leading-relaxed">{sponsorInfo.description}</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href={sponsorInfo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 text-center font-medium text-white bg-gradient-to-r bg-blue-700 rounded-lg hover:bg-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit Website
            </a>
            <button
              onClick={setFalse}
              className="flex-1 px-4 py-3 text-center font-medium text-gray-700 gray-200 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-200 hover:gray-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
