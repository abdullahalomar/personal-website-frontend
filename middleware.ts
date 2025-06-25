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
