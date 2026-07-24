'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, DollarSign } from 'lucide-react';
import { Service, Professional } from '../types';

interface BookingModalProps {
  pro: Professional;
  service: Service;
  date: string;
  time: string;
  onClose: () => void;
  onConfirm: (bookingDetails: {
    name: string;
    phone: string;
    email: string;
    telegram?: string;
    notes?: string;
  }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  pro,
  service,
  date,
  time,
  onClose,
  onConfirm,
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    telegram: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(form);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel max-w-lg w-full rounded-2xl p-6 relative border border-sky-500/40 shadow-2xl space-y-5 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg bg-[#151C2C]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-gray-800 pb-3 space-y-1">
          <h3 className="font-display text-xl font-bold text-white">Görüş Təsdiqi</h3>
          <p className="text-xs text-sky-400 font-semibold">{pro.fullName} • {service.name}</p>
          <div className="flex items-center gap-4 text-xs text-gray-300 pt-2 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {time} ({service.duration} dəq)
            </span>
            <span className="flex items-center gap-1 font-bold text-white">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              {service.price} AZN
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-xs font-semibold text-gray-300 mb-1 block">Ad Soyadınız *</label>
            <input
              required
              type="text"
              placeholder="Kamran Rəhimov"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#151C2C] border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-300 mb-1 block">Telefon *</label>
              <input
                required
                type="text"
                placeholder="+994 50 123 45 67"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#151C2C] border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-300 mb-1 block">Telegram Ləqəbi</label>
              <input
                type="text"
                placeholder="username"
                value={form.telegram}
                onChange={(e) => setForm({ ...form, telegram: e.target.value })}
                className="w-full bg-[#151C2C] border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 mb-1 block">E-poçt (Təqvim Sinxronlaşması)</label>
            <input
              type="email"
              placeholder="kamran@gmail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#151C2C] border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300 mb-1 block">Qeydlər / Xüsusi İstəklər</label>
            <textarea
              rows={2}
              placeholder="Əlavə istək və ya simptomlar..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-[#151C2C] border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 font-bold text-white shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <CheckCircle className="w-4 h-4" />
            Görüşü Dərhal Rezerv Et
          </button>
        </form>
      </div>
    </div>
  );
};
