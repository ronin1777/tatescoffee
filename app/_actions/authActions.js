'use server'



import {cookies} from "next/headers";
import {isTokenExpiringSoon} from "@/app/utils/utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const sendOtpAction = async (phoneNumber) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/send-otp/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone_number: phoneNumber }),
        });

        if (!response.ok) {
            const data = await response.json();
            const errorMessage = data.error ? data.error : 'مشکل در ارسال کد.';
            const error = new Error(errorMessage);
            error.status = response.status;
            throw error;
}


        return await response.json();
    } catch (error) {

    throw error; // برای ادامه در مدیریت خطا
}
};



// export const verifyOtpAction = async (otp) => {
//     try {
//         const response = await fetch(`${BASE_URL}/api/user/verify-otp/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ otp }),
//         });
//
//         if (!response.ok) {
//             const data = await response.json();
//             const error = new Error(data.error || 'کد ارسالی اشتباه است.');
//             error.status = response.status;
//             console.log(error.status)
//             console.log(response.status)
//             throw error;
//         }
//
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error verifying OTP:', error);
//         throw error;
//     }
// };


export const verifyOtpAction = async (otp) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/verify-otp/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp }),
        });

        const data = await response.json();

        // بررسی وضعیت
        if (!response.ok) {
            const error = new Error(data.error || 'Failed to verify OTP');
            error.status = response.status;
            throw error;
        }
        return { access: data.access_token, refresh: data.refresh_token, status: response.status, cartExists:data.cartExists};

    } catch (error) {
        throw error;
    }
};




export const completeRegistrationAction = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/complete-registration/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error || 'خطا در تکمیل ثبت‌نام.');
            error.status = response.status;
            throw error;
        }

        return { access: responseData.access_token, refresh: responseData.refresh_token };

    } catch (error) {
        throw error;
    }
};


