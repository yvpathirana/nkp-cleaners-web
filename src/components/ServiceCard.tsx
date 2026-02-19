import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  link?: string;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  link
}: ServiceCardProps) {
  const cardContent =
  <motion.div
    whileHover={{
      y: -4
    }}
    transition={{
      duration: 0.2,
      ease: 'easeOut'
    }}
    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 h-full flex flex-col">

      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-brand-primary" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {description}
      </p>
      {link &&
    <span className="mt-4 text-brand-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more
          <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">

            <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7" />

          </svg>
        </span>
    }
    </motion.div>;

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {cardContent}
      </Link>);

  }
  return cardContent;
}