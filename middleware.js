import { NextResponse } from 'next/server';
import { verifyToken } from "@/app/utils/utils";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

export async function middleware(request) {
    const response = NextResponse.next();
    const accessToken = request.cookies.get('access_token')?.value;
    const refreshToken = request.cookies.get('refresh_token')?.value;

    if (accessToken) {
        const { valid, error } = await verifyToken(accessToken);

        if (!valid) {
            console.warn('Access token is invalid. Trying to refresh...');


            if (refreshToken) {
                try {
                    const newToken = await refreshAccessToken(refreshToken);


                    if (newToken) {
                        const response = NextResponse.next();
                        response.cookies.set('access_token', newToken, { httpOnly: true, path: '/',  maxAge: 60 * 60, });
                        return response;
                    }
                } catch (err) {
                    console.error('Error refreshing access token:', err);
                }
            }
        } else {

            return NextResponse.next();
        }
    }

    // اگر هیچ توکنی وجود ندارد یا توکن جدید نتوانسته ایجاد شود
    console.warn('No valid access token or refresh token found.');

    // هدایت به صفحه خطا
    return  response;
}

export const config = {
    matcher: ['/((?!_next/static|favicon.ico).*)'], // تمام مسیرها به جز فایل‌های استاتیک
};