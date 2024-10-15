import { NextResponse } from "next/server";
import { verifyToken } from "@/app/utils/utils";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

export async function middleware(request) {
  const response = NextResponse.next();
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  if (accessToken) {
    const { valid, error } = verifyToken(accessToken);

    if (!valid) {
      if (refreshToken) {
        try {
          const newToken = await refreshAccessToken(refreshToken);

          if (newToken) {
            const response = NextResponse.next();
            response.cookies.set("access_token", newToken, {
              httpOnly: true,
              path: "/",
              maxAge: 60 * 60,
            });
            return response;
          }
        } catch (err) {
          throw new Error("Error refreshing access token:", err);
        }
      }
    } else {
      return NextResponse.next();
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
