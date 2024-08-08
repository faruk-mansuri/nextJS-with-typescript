import Image from 'next/image';
import mapsImg from '@/images/maps.jpg';

const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const SingleTourPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>

      <section>
        {/* local image */}
        <div>
          <Image
            src={mapsImg}
            alt='maps'
            className='w-48 h-48 object-cover rounded'
            width={192}
            height={192}
            // The width and height properties directly control the image's pixel dimensions.
            // The w-48 and h-48 classes determine the image's size on the page.

            // its optional to provide width and height property. nextjs able to calculate the size of width and height in case of local image
            // instead of using giant image nextJS makes images smaller to render on screen
            // size will be smaller
            priority
          />
          <h2>local image</h2>
        </div>

        {/* remote image */}
        <div>
          <Image
            src={url}
            alt='remote image'
            className='w-48 h-48 object-cover rounded'
            width={192}
            height={192}
            priority
          />
          {/* width and height are required. Need to provide width and height property in case if remote image  */}
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
};

export default SingleTourPage;
