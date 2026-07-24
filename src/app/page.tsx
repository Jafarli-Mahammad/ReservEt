'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <iframe 
        src="/index.html" 
        className="w-full h-screen border-0" 
        title="Rezerv.az SaaS Platform"
      />
    </div>
  );
}
