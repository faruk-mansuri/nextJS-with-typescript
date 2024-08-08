import { NextRequest, NextResponse } from 'next/server';
import { fetchUsers, saveUser } from '@/utils/action';

export const GET = async (req: NextRequest) => {
  // first approach to get search params
  // console.log(req);
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get('id')

  // second approach to get search params using NextResponse
  // console.log(req.url);
  // console.log(req.nextUrl.searchParams.get('id'));

  // to navigate user from server
  // console.log(new URL('/about', req.url));
  // new URL('path where you want to navigate user', req.url)

  const users = await fetchUsers();
  return Response.json({ users }, { status: 200 });
  // return NextResponse.redirect(new URL('/', req.url));
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  await saveUser({ id: new Date().getTime().toString(), ...data });
  return Response.json(
    { msg: 'New user created successfully.' },
    { status: 200 }
  );
};
