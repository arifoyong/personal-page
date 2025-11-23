import { NextResponse, NextRequest } from 'next/server'
import { rateLimiterMiddleware } from './lib/rateLimit'

export async function middleware(req: NextRequest) {
  // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ip = req.headers.get('x-forwarded-for') || req.nextUrl.hostname

  const isRateLimited = await rateLimiterMiddleware(ip);
  if (isRateLimited) {
    console.log('Rate limited')
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}