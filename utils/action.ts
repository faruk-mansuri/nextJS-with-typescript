'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { firstName, lastName } = Object.fromEntries(formData) as {
    firstName: string;
    lastName: string;
  };

  const newUser: User = {
    id: new Date().getTime().toString(),
    firstName,
    lastName,
  };

  try {
    await saveUser(newUser);

    revalidatePath('/actions');
    return 'user created successfully.';
  } catch (error) {
    console.log('error', error);
    return 'something went wrong.';
  }

  // can't use redirect() inside try and catch
  // redirect('/');
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf-8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const { userId } = Object.fromEntries(formData) as { userId: string };
  const users = await fetchUsers();
  const newUsers = users.filter((user) => user.id !== userId);
  await writeFile('users.json', JSON.stringify(newUsers));
  revalidatePath('/actions');
};

export const removeUser = async (
  { id }: { id: string },
  formData: FormData
) => {
  // const name = formData.get('name') as string;
  // console.log({ name });

  const users = await fetchUsers();
  const newUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(newUsers));
  revalidatePath('/actions');
};
