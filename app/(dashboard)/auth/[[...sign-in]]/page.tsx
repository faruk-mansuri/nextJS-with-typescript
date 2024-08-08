import React from 'react';

const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);

  console.log(params['sign-in'][1]);

  return (
    <div className='space-y-5'>
      <h1 className='text-7xl text-pink-500'>Sign In</h1>
      <h3 className='text-yellow-500 text-3xl'>
        params : {params['sign-in'][1]}
      </h3>
    </div>
  );
};

export default SignInPage;
