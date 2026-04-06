// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Lokale Entwicklung überspringen
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next();
  }

  // www → non-www + http → https in EINEM einzigen 301
  const wantsWww = host.startsWith('www.');
  const wantsHttp = url.protocol === 'http:';

  if (wantsWww || wantsHttp) {
    const newUrl = new URL(url);
    newUrl.protocol = 'https:';
    newUrl.hostname = host.replace(/^www\./, '');

    return NextResponse.redirect(newUrl.toString(), 301); // echter permanenter Redirect
  }

  return NextResponse.next();
}

// Nur bei echten Seiten ausführen (nicht bei statischen Assets)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)'],
};