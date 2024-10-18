import { events } from '@/../public/data/events';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function EventsCarousel() {
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

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      arrows={true}
      autoPlaySpeed={6000}
      keyBoardControl={false}
      transitionDuration={1000}
      pauseOnHover={false}
      containerClass="carousel-container my-8"
    >
      {events.map((event, index) => (
        <div key={index} className="w-full text-center">
          <a href={event.link} target="_blank" rel="noopener noreferrer" className="relative block w-full h-64 group transition-opacity duration-3000">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-contain rounded-md"
            />
            <div className="w-full h-64 absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-md">
              <div className="text-white text-center p-4">
                <h2 className="font-extrabold text-xl mb-2">{event.title}</h2>
                <h3 className="font-bold text-lg">{event.location}</h3>
                <p className="mt-2">
                  {formatEventDate(event.startTime, event.endTime)}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </Carousel>
  );
}

const formatEventDate = (startTime: string, endTime: string): string => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const sameDay = startDate.toDateString() === endDate.toDateString();

  if (sameDay) {
    return startDate.toLocaleDateString();
  } else {
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  }
};