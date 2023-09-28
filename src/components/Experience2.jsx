import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import udemy from '../assets/udemy.jpg'


// import 'swiper/swiper-bundle.min.css';


const certificates = [
  {
    title: ' The Complete 2023 Web Development Bootcamp',
    organization: 'Udemy',
    date: 'June 2023',
    certificateLink: 'https://www.udemy.com/certificate/UC-9f358137-eb7e-4900-85a8-8b0880a79f39/',
    image: '../assets/udemy.jpg'
  },
  {
    title: 'Certificate 2',
    organization: 'Organization B',
    date: 'August 2022',
    certificateLink: 'https://example.com/certificate2.pdf',
  },
  // Add more certificate objects as needed
];

const Experience2 = () => {
  return (
    <div className="certificate-carousel flex justify-center">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation

        pagination={{ clickable: true }}


      >
        {certificates.map((certificate, index) => (
          <SwiperSlide className='flex justify-center' key={index}>
            <div className='transition ease-in flex justify-center  hover:translate-x-2 hover:translate-y-2'>
              <div className='green-pink-gradient w-1/2 md:1/4 rounded-md'>


                <div className="certificate-slide  p-1">
                  {/* <h3 className="certificate-title">{certificate.title}</h3>
              <p className="certificate-organization">{certificate.organization}</p>
              <p className="certificate-date">{certificate.date}</p> */}
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <img src={udemy} alt='View certificate rounded' className='rounded-md' />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h1>Slide to view more </h1>
    </div>
  )
}

export default Experience2