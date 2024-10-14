import { NextResponse } from 'next/server';
import {
  f
} from "../../../../../../backend/venv/lib64/python3.11/site-packages/django/contrib/admin/static/admin/js/vendor/xregexp/xregexp";
import {assignCartToUser} from "@/services/assingnCartToUser";

export async function POST(request) {
  const { access, refresh } = await request.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set('access_token', access, {
    httpOnly: false,
    secure:true,
    maxAge: 60 * 60,
    path: '/',
  });

  response.cookies.set('refresh_token', refresh, {
    httpOnly: false,
    secure:true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return response;
}

// export async function POST(request) {
//     const { access_token, refresh_token } = await request.json();
//
//     // تنظیم کوکی‌ها با استفاده از Set-Cookie در هدر
//     const headers = new Headers();
//
//     headers.append('Set-Cookie', `access_token=${access_token}; Max-Age=${60 * 60}; Path=/`);
//     headers.append('Set-Cookie', `refresh_token=${refresh_token}; Max-Age=${60 * 60 * 24 * 7}; Path=/`);
//
//     return new Response('Tokens set successfully!', {
//         status: 200,
//         headers: headers
//     });
// }