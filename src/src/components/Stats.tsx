import React from 'react';
import { Users, Briefcase, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '800+',
    label: 'Clients satisfaits annuellement'
  },
  {
    icon: Briefcase,
    number: '25+',
    label: 'Services offerts'
  },
  {
    icon: MapPin,
    number: '10+',
    label: 'Secteurs desservis'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white border border-gray-200"
            >
              <stat.icon className="w-12 h-12 text-brand mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}