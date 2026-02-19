import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  AlertTriangleIcon,
  DropletIcon,
  UtensilsIcon,
  LayoutGridIcon } from
'lucide-react';
interface ColorCode {
  color: string;
  bgColor: string;
  borderColor: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}
export function ColorCodingSystem() {
  const codes: ColorCode[] = [
  {
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500',
    label: 'Red',
    icon: <AlertTriangleIcon className="w-6 h-6 text-red-500" />,
    description:
    'Toilets, urinals, sanitary areas — highest contamination risk'
  },
  {
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-500',
    label: 'Yellow',
    icon: <DropletIcon className="w-6 h-6 text-yellow-500" />,
    description: 'Wash basins, bathroom surfaces, tiles'
  },
  {
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    label: 'Blue',
    icon: <LayoutGridIcon className="w-6 h-6 text-blue-500" />,
    description: 'General surfaces, glass, desks — low-risk areas'
  },
  {
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    label: 'Green',
    icon: <UtensilsIcon className="w-6 h-6 text-green-500" />,
    description: 'Kitchens, food preparation areas'
  }];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5
          }}
          className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <ShieldCheckIcon className="w-4 h-4" />
            Hygiene Standards
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Color Coding System
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We follow international cleaning standards to ensure maximum hygiene
            and prevent cross-contamination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codes.map((code, index) =>
          <motion.div
            key={code.label}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-30px'
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className={`${code.bgColor} border-l-4 ${code.borderColor} rounded-2xl p-6`}>

              <div className="flex items-center gap-3 mb-3">
                {code.icon}
                <span
                className={`font-heading font-bold text-lg ${code.color}`}>

                  {code.label}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {code.description}
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.4,
            delay: 0.5
          }}
          className="mt-10 text-center">

          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <ShieldCheckIcon className="w-5 h-5 text-brand-primary" />
            <span className="text-gray-700 text-sm font-medium">
              This system prevents cross-contamination and ensures maximum
              hygiene and safety.
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}