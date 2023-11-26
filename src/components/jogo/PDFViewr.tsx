import React, { useState } from "react";
import Slider from "react-slick";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react"; // Certifique-se de importar os ícones corretos

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importe as suas imagens
import image1 from "../ilovepdf_pages-to-jpg/05_page-0001.jpg";
import image2 from "../ilovepdf_pages-to-jpg/05_page-0002.jpg";
// ... importe as outras 34 imagens

const ImageCarousel: React.FC = () => {
  const images = [
    image1, image2,
    // ... adicione as outras 34 imagens aqui
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="grid content-center w-full h-screen">
      <div className="flex justify-between w-full h-screen">
        <div className="grid content-center ml-6">
          <div
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          >
            <ArrowCircleLeft className="w-20 h-20 text-sky-500 hover:text-sky-700 cursor-pointer" />
          </div>
        </div>
        <div className="grid content-center text-center">
          <h1 className="text-6xl">Livro</h1>
          <Slider {...settings} className="mx-auto">
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="grid content-center mr-6">
          <div
            onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          >
            <ArrowCircleRight className="w-20 h-20 text-sky-500 hover:text-sky-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
