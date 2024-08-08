// second approach using bind method
import { removeUser } from '@/utils/action';

const DeleteButton = ({ id }: { id: string }) => {
  const removeUserWithId = removeUser.bind(null, { id });

  return (
    <form action={removeUserWithId}>
      {/* <input type='hidden' name='name' value={'randomValue'} /> */}
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  );
};

export default DeleteButton;

// first approach using hidden input
// import { deleteUser } from '@/utils/action';
// import React from 'react';

// const DeleteButton = ({ id }: { id: string }) => {
//   return (
//     <form action={deleteUser}>
//       <input type='hidden' name='userId' value={id} />
//       <button
//         type='submit'
//         className='bg-red-500 text-white text-xs rounded p-2'
//       >
//         delete
//       </button>
//     </form>
//   );
// };

// export default DeleteButton;
