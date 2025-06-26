// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("authToken")?.value;
//   const isProtected = request.nextUrl.pathname.startsWith(
//     "/Dashboard-portfolio"
//   );

//   if (isProtected && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/Dashboard-portfolio/:path*"],
// };
import { NextResponse } from "next/server";

export function middleware(request: {
  cookies: { get: (arg0: string) => { (): any; new (): any; value: any } };
  url: string | URL | undefined;
}) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    // যদি token না থাকে → /login রিডাইরেক্ট করো
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // token থাকলে ঠিকঠাক ঢুকতে দাও
}

// যেসব রাউট প্রোটেক্ট করছো তাদের matcher এ দাও
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
