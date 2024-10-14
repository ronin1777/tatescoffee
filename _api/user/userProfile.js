

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchUserData = async (accessToken) => {
    const response = await fetch(`http://localhost:8000/api/user/user-profile/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const errorMessage = response.status === 401 ? 'Unauthorized' : response.statusText;
        throw new Error(errorMessage);
    }

    return await response.json();
};

export const updateUserProfile = async (data, accessToken) => {

  const formDataToSend = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === "profile_picture" && data[key].length > 0) {
      formDataToSend.append(key, data[key][0]);
    } else if (key !== "profile_picture") {
      formDataToSend.append(key, data[key]);
    }
  });

  try {
    const response = await fetch("http://localhost:8000/api/user/user-update/", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formDataToSend,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "خطا در بروزرسانی، لطفا دوباره امتحان کنید.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "خطای شبکه، لطفا دوباره امتحان کنید.");
  }
};

export async function fetchUserProfile(accessToken) {
  const response = await fetch('http://localhost:8000/api/user/user-profile/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  })

  if (response.ok) {
    return await response.json()
  } else if (response.status === 401) {
    // اگر اکسس توکن منقضی شده باشد، 401 برمی‌گرداند
    throw new Error('Access token expired')
  } else {
    throw new Error('Failed to fetch user profile')
  }
}

// async function getUserProfile() {
//     const cookieStore = cookies();
//     const accessToken = cookieStore.get('access_token'); // دریافت توکن اکسس از کوکی‌ها
//
//     try {
//         // درخواست برای دریافت اطلاعات کاربر
//         const response = await fetch('http://localhost:8000/api/user/user-profile/', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`, // اضافه کردن توکن اکسس به هدر
//                 'Content-Type': 'application/json',
//             },
//         });
//
//         // بررسی وضعیت پاسخ
//         if (response.status === 401) {
//             // در صورت منقضی شدن توکن، درخواست به Route Handler برای تازه‌سازی توکن
//             const refreshResponse = await fetch('/api/refresh-token', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 // ارسال توکن رفرش از کوکی‌ها
//                 body: JSON.stringify({ refresh_token: cookieStore.get('refresh_token') }),
//             });
//
//             // بررسی پاسخ تازه‌سازی توکن
//             if (!refreshResponse.ok) {
//                 throw new Error('Failed to refresh access token');
//             }
//
//             // دریافت توکن جدید
//             const newAccessToken = (await refreshResponse.json()).access_token;
//
//             // دوباره سعی می‌کنیم تا اطلاعات کاربر را با توکن جدید دریافت کنیم
//             const newResponse = await fetch('http://localhost:8000/api/user/user-profile/', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${newAccessToken}`, // استفاده از توکن جدید
//                     'Content-Type': 'application/json',
//                 },
//             });
//
//             // بررسی وضعیت پاسخ
//             if (!newResponse.ok) {
//                 throw new Error('Failed to fetch user profile');
//             }
//
//             return await newResponse.json(); // بازگشت اطلاعات کاربر
//         }
//
//         // اگر درخواست موفقیت‌آمیز بود، اطلاعات کاربر را برمی‌گردانیم
//         if (!response.ok) {
//             throw new Error('Failed to fetch user profile');
//         }
//
//         return await response.json(); // بازگشت اطلاعات کاربر
//     } catch (error) {
//         console.error('Error fetching user profile:', error);
//         throw error; // خطا را پرتاب می‌کنیم
//     }
// }


