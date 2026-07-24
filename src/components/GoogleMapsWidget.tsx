'use client';

import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

interface GoogleMapsWidgetProps {
  address: string;
  latitude: number;
  longitude: number;
  businessName: string;
}

export const GoogleMapsWidget: React.FC<GoogleMapsWidgetProps> = ({
  address,
  latitude,
  longitude,
  businessName,
}) => {
  const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="glass-panel rounded-2xl p-6 border border-gray-800 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-rose-400" />
          Xəritədə Ünvan & Naviqasiya
        </h3>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Google Maps-də Aç
        </a>
      </div>

      <div className="h-56 rounded-xl overflow-hidden relative border border-gray-700 bg-gray-900">
        <iframe
          title={`Google Map for ${businessName}`}
          className="w-full h-full filter grayscale-[30%] opacity-90 border-0"
          src={embedUrl}
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-gray-300 bg-[#151C2C] p-3.5 rounded-xl border border-gray-800">
        <span className="truncate max-w-[70%]">📍 {address}</span>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-bold flex items-center gap-1.5 transition-all shadow-md"
        >
          <Navigation className="w-3.5 h-3.5" />
          Marşrut Qur
        </a>
      </div>
    </div>
  );
};
