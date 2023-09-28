import React from 'react';
import Slider from 'react-slick';

// Import CSS for React Slick and React Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CertificateCarousel({ certificates }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="certificate-carousel">
            <Slider {...settings}>
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate-slide">
                        <h3 className="certificate-title">{certificate.title}</h3>
                        <p className="certificate-organization">{certificate.organization}</p>
                        <p className="certificate-date">{certificate.date}</p>
                        <a
                            href={certificate.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certificate-link"
                        >
                            View Certificate
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CertificateCarousel;
