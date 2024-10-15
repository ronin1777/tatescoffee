import UpdateProfileForm from "@/app/account/profile/UpdateProfileForm";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  fetchUserDataWithToken,
  getAccessTokenAndRefreshToken,
} from "@/app/utils/getAccessTokenAndRefreshToken";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";
import { fetchUserData } from "@/_api/user/userProfile";

export default async function ProfileDetails() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  if (!accessToken) {
    redirect("/");
  }
  console.log(`access in datail${accessToken}`);

  let user = { name: "Guest", email: "guest@example.com" }; // داده‌های پیش‌فرض

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 min-h-full p-5 rounded-lg">
      <div className="content-my-page mt-7">
        <section className="my-account-details">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-zinc-700 dark:text-white mb-4">
              تغییر اطلاعات پروفایل
            </h2>
            <UpdateProfileForm user={user} accessToken={accessToken} />
          </div>
        </section>
      </div>
    </div>
  );
}
