import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants";

export default function MiddleWare(req: NextRequest){
    const token = req.cookies.get(TOKEN_NAME)?.value;
    if (req.nextUrl.pathname.startsWith('/dashboard')){
        if(!token){ //Si querías ir al dashboard pero no tienes token, te manda a login
           return NextResponse.redirect(new URL('/login', req.url))
        }
    }
     if (req.nextUrl.pathname === '/'){ //Si estás en la ruta base, te manda al dashboard
        return NextResponse.redirect(new URL('/dashboard', req.url))
     }
    return NextResponse.next();
}