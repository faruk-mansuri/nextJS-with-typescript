import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  console.log('hello there from middleware 😀.');
  // return Response.json({ msg: 'hello world.' });
  // return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
