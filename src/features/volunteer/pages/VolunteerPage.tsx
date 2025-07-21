

import type React from 'react';
import { useState } from 'react';

const VolunteerPage = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Volunteer Application</h1>

      <div className="mb-8">
        <p className="text-gray-300">
          Thank you for your interest in volunteering with APTlantis! We&apos;re always looking for
          passionate individuals to help maintain our mirrors, improve our website, and support the
          open-source community.
        </p>
        <p className="text-gray-300 mt-2">
          Please fill out the form below to apply. We&apos;ll review your application and get back
          to you as soon as possible.
        </p>
      </div>

      <div className="border border-gray-700 rounded-md overflow-hidden">
        {!iframeLoaded && (
          <div className="flex justify-center items-center h-[600px] bg-[#000080]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
          </div>
        )}
        <iframe
          src="/qbasic-volunteer.html"
          className={`w-full h-[600px] ${iframeLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setIframeLoaded(true)}
          title="QBASIC Volunteer Form"
        />
      </div>
    </div>
  );
};

export default VolunteerPage;
