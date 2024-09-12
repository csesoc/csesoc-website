import { useState } from "react";
import { sponsorInfo } from "../../public/data/sponsorInfos";

interface CarouselImages {
    images: { category: string; href: string; svg: string; alt: string; description: string; }[];
    onImageClick: (info: sponsorInfo) => void;
}

export default function Carousel({ images, onImageClick }: CarouselImages) {
    return (
        <div className="carousel flex flex-col items-center w-full px-20 py-6">
            <div className="flex justify-center flex-wrap gap-20 w-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.svg}
                        alt={image.alt}
                        className="cursor-pointer transform transition-transform duration-300 hover:scale-105 object-contain"
                        style={{ height: '150px', maxWidth: '225px' }}
                        onClick={() => onImageClick(image)}
                    />
                ))}
            </div>
        </div>
    );
}
