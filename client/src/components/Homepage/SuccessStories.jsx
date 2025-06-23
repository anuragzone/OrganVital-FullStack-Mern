import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import girlPhoto1 from '../../assets/success-stories-images/girlphoto1.png' ;
import girlPhoto2 from '../../assets/success-stories-images/girlphoto2.png' ;
import boyPhoto1 from '../../assets/success-stories-images/boyphoto1.png' ;
import boyPhoto2 from '../../assets/success-stories-images/boyphoto2.png' ;

const stories = [
  {
    name: 'Riya Sharma',
    role: 'Organ Recipient',
    story: 'A kind stranger saved my life. I’m forever grateful.',
    image: girlPhoto1,
  },
  {
    name: 'Amit Verma',
    role: 'Blood Donor',
    story: 'It takes 15 minutes to give someone a lifetime.',
    image: boyPhoto1,
  },
  {
    name: 'Sneha Patel',
    role: 'Liver Transplant Recipient',
    story: 'I got a second chance—thanks to someone’s selfless gift.',
    image: girlPhoto2,
  },
  {
    name: 'Rohan Das',
    role: 'Kidney Recipient',
    story: 'Thanks to a donor, I now see my children grow up.',
    image: boyPhoto2,
  },
  {
    name: 'Neha Jain',
    role: 'Volunteer',
    story: 'Helping people sign up to save lives is a blessing.',
    image: '/images/neha.jpg',
  },
 
];

const SuccessStories = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative py-10 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-gray-800 dark:to-gray-700">
      <h2 className="text-3xl font-bold text-center mb-6">Stories of Hope</h2>


      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-500"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-500"
      >
        <FaChevronRight />
      </button>


      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto px-6 py-4 scroll-smooth no-scrollbar"
      >
        {stories.map((s, idx) => (
          <div
            key={idx}
            className="min-w-[280px] md:min-w-[300px] bg-white dark:bg-card p-5 rounded-2xl shadow-lg flex-shrink-0 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-lg">{s.name}</h3>
            <p className="text-sm text-red-600 font-semibold mb-2">{s.role}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{s.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
