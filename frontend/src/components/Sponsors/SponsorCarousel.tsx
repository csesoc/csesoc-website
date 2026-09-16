import { diamondLinks, goldLinks } from "@/../public/data/sponsorInfos";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function SponsorCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Show diamond and gold sponsors in carousel
  const sponsors = diamondLinks.concat(goldLinks);

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      arrows={false}
      autoPlaySpeed={3000}
      keyBoardControl={false}
      transitionDuration={500}
      pauseOnHover={false}
      containerClass="carousel-container my-8"
    >
      {sponsors.map((sponsor, index) => (
        <div key={index} className="p-4 mx-8 flex justify-center items-center">
          <img
            src={sponsor.svg}
            alt={sponsor.alt}
            className="h-24"
          />
        </div>
      ))}
    </Carousel>
  );
}