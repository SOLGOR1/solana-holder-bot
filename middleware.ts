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
  // 2. Alte / gelöschte Seiten → 410 Gone
  // =============================================
  const oldPaths = [
    '/pricing',
    '/blog/mellow-man-hyper-volume-bot',
    // Hier kannst du jederzeit weitere alte URLs hinzufügen:
    // '/blog/irgend-ein-alter-post',
    // '/alte-seite',
  ];

  // Prüfen, ob die angefragte URL genau einer der alten Pfade entspricht
  if (oldPaths.some((path) => url.pathname === path)) {
    return new NextResponse(null, { status: 410 }); // 410 Gone
  }

  // Alles andere normal weiterleiten
  return NextResponse.next();
}

// Matcher – ignoriert statische Dateien und API-Routen
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt)).*)',
  ],
};