import {NextRequest, NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(req: NextRequest){
    const cookie = req.cookies.getAll()
    console.log(req.nextUrl.pathname)
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
    if(!session && req.nextUrl.pathname !== '/'){
        const requestedPage = req.nextUrl.pathname
        const url = req.nextUrl.clone()
        url.pathname = '/'
        url.searchParams.set('redirect', requestedPage)
        return NextResponse.redirect(url.toString())
    }
    return NextResponse.next()
}
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|favicon.ico).*)',
    ],
}


