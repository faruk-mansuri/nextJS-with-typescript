import { fetchUsers } from '@/utils/action';
import React from 'react';
import DeleteButton from './DeleteButton';

const UsersList = async () => {
  const users = await fetchUsers();

  return (
    <div className='mt-4'>
      {users.length ? (
        <div className='space-y-2 max-w-lg mx-auto'>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className='capitalize text-lg flex justify-between px-2 py-1 shadow'
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <p>no users found...</p>
      )}
    </div>
  );
};

export default UsersList;
