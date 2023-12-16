import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { coderush2, codingninja, mnit, udemy } from '../assets';

import 'swiper/css';



// import 'swiper/swiper-bundle.min.css';


const certificates = [
  {
    title: 'Codecade-Codingninja contest',
    organization: 'Coding ninja',
    date: '2023',
    certificateLink: '',
    image: codingninja
  },


  {
    title: ' The Complete 2023 Web Development Bootcamp',
    organization: 'Udemy',
    date: 'June 2023',
    certificateLink: 'https://www.udemy.com/certificate/UC-9f358137-eb7e-4900-85a8-8b0880a79f39/',
    image: udemy
  },
  {
    title: ' AlgoUniversity Coderush',
    organization: 'AlgoUniversity',
    date: '2023',
    certificateLink: '',
    image: coderush2
  },
  {
    title: 'MNIT',
    organization: 'MINT',
    date: '',
    certificateLink: '',
    image: mnit
  },
  // Add more certificate objects as needed
];

const Experience2 = () => {
  return (
    <div className="certificate-carousel flex justify-center">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation

        pagination={{ clickable: true }}


      >
        {certificates.map((certificate, index) => (

          <SwiperSlide className='flex justify-center' key={index}>
            <div className='transition ease-in flex justify-center  hover:translate-x-2 hover:translate-y-2'>
              <div className='w-[40%] md:1/4 rounded-md border-4'>


                <div className="certificate-slide  p-1">

                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <img src={certificate.image} alt='View certificate rounded' className='rounded-md' />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
      {/* <h1>Slide to view more </h1> */}
    </div>
  )
}

export default Experience2

