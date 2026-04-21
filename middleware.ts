// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Lokale Entwicklung überspringen
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next();
  }

  // =============================================
  // 1. www → non-www + http → https (301)
  // =============================================
  const wantsWww = host.startsWith('www.');
  const wantsHttp = url.protocol === 'http:';

  if (wantsWww || wantsHttp) {
    const newUrl = new URL(url);
    newUrl.protocol = 'https:';
    newUrl.hostname = host.replace(/^www\./, '');

    return NextResponse.redirect(newUrl.toString(), 301);
  }

  // =============================================
  // 2. Alte / gelöschte Seiten → 410 Gone (permanently gone)
  // =============================================
  const oldPaths = [
    '/pricing',
    '/blog/mellow-man-hyper-volume-bot',
    // Weitere alte URLs einfach hier hinzufügen
  ];

  if (oldPaths.some((path) => url.pathname === path)) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

// Sehr strenger Matcher – ignoriert wirklich ALLE statischen Dateien
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|css|js|json|woff2|ttf|otf)).*)',
  ],
};