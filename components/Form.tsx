'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '@/utils/action';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded capitalize'
      disabled={pending}
    >
      {pending ? 'submitting...' : 'submit'}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form
      action={formAction}
      className='max-w-lg mx-auto flex flex-col gap-y-4  shadow rounded p-8'
    >
      {message && <p>{message}</p>}
      <h2 className='text-center text-2xl capitalize mb-4'>create user</h2>
      <input
        type='text'
        name='firstName'
        required
        className='border shadow rounded py-2 px-3 text-gray-700'
      />
      <input
        type='text'
        name='lastName'
        required
        className='border shadow rounded py-2 px-3 text-gray-700'
      />

      <SubmitButton />
    </form>
  );
};

export default Form;
