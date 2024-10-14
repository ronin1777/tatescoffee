import { NextResponse } from "next/server";
// حذف خط زیر
// import { f } from "../../../../../../backend/venv/lib64/python3.11/site-packages/django/contrib/admin/static/admin/js/vendor/xregexp/xregexp";
import { assignCartToUser } from "@/services/assingnCartToUser";

export async function POST(request) {
  const { access, refresh } = await request.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set("access_token", access, {
    httpOnly: false,
    secure: true,
    maxAge: 60 * 60,
    path: "/",
  });

  response.cookies.set("refresh_token", refresh, {
    httpOnly: false,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
