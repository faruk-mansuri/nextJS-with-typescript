'use client';

const Error = ({ error }: { error: Error }) => {
  console.log(error);

  return <h1 className='text-3xl text-red-700'>there was an error...</h1>;
};

export default Error;
