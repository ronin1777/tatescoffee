import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { cookies, headers } from "next/headers";
import BottomNav from "@/app/_components/navbars/BottomNav";
import { fetchUserData } from "@/_api/user/userProfile";

const Vazir = localFont({
  src: "./fonts/Vazir-WOL.woff",
});
const VazirBold = localFont({
  src: "./fonts/Vazir-Bold-WOL.woff",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | TasteCoffee",
    default: "Welcome | TasteCoffee",
  },
  description: "Selling specialty coffees with the best quality",
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  let user = null;
  let error = null;

  // بررسی وجود accessToken
  if (!accessToken) {
    // استفاده از داده‌های ساختگی یا مدیریت عدم وجود توکن
    console.warn("No access token found. Using mock user data.");
    user = { name: "Guest", email: "guest@example.com" }; // داده‌های ساختگی
  } else {
    try {
      user = await fetchUserData(accessToken);
    } catch (err) {
      error = err.message;
      console.error("Error fetching user data:", error);
      // استفاده از داده‌های ساختگی در صورت بروز خطا
      user = { name: "Guest", email: "guest@example.com" }; // داده‌های ساختگی
    }
  }
  return (
    <html lang="fa" dir="rtl">
      <body className={`bg-gray-100 dark:bg-zinc-800 ${Vazir.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
          <BottomNav user={user} />
        </ThemeProvider>
      </body>
    </html>
  );
}
