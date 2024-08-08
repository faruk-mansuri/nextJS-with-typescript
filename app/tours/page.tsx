import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  // this use to make page dynamic - on every refresh page will reload at dynamic time
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

const Tours = async () => {
  const data = await fetchTours();
  return (
    <section>
      <h1 className='text-7xl text-purple-600'>Tours Page</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        {data.map((tour) => {
          return (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className='hover:text-blue-500'
            >
              <div className='relative mb-2 h-48 rounded bg-gray-300'>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  // sizes='33vw'
                  sizes='(max-width:768px) 100vw, (max-width:1200px) 33vw'
                  // sizes property helps the browser select the most appropriate image size to load based on the user's device and screen size, improving website performance and user experience
                  className='rounded object-cover'
                  priority
                />
              </div>
              <h2 key={tour.id}>{tour.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
