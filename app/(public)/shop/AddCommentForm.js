'use client'
import React, { useState } from 'react'; // افزودن useState
import { useForm } from 'react-hook-form';

export default function AddCommentForm({ productId, accessToken }) {
  const [successMessage, setSuccessMessage] = useState(''); // متغیر برای پیام موفقیت
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/comment/${productId}/create-comment/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        setSuccessMessage('پیام شما با موفقیت ارسال شد و بعد از تایید ادمین ثبت خواهد شد.'); // تنظیم پیام موفقیت

        // مخفی کردن پیام موفقیت بعد از ۳ ثانیه
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        throw new Error('خطا در ارسال کامنت');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div>
          <textarea
            {...register('content', { required: 'لطفاً نظر خود را وارد کنید' })}
            className="w-full p-2 text-zinc-700 dark:text-zinc-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            rows="4"
            placeholder="نظر خود را اینجا وارد کنید..."
          ></textarea>
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
        </div>
        <button disabled={isSubmitting}
          type="submit"
          className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          {isSubmitting ? 'در حال ارسال نظر' : 'ارسال نظر'}
        </button>
      </form>

      {successMessage && ( // نمایش پیام موفقیت
        <p className="mt-4 text-green-500">{successMessage}</p>
      )}
    </div>
  );
}



// export default function AddCommentForm({ productId, accessToken }) {
//   console.log(accessToken)
//   const { register, handleSubmit, reset, formState: { errors ,isSubmitting } } = useForm();
//
//   const onSubmit = async (data) => {
//     try {
//       const res = await fetch(`http://127.0.0.1:8000/api/comment/${productId}/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${accessToken}`, // ارسال توکن به هدر
//         },
//         body: JSON.stringify(data),
//       });
//
//       if (res.ok) {
//         // در صورتی که کامنت با موفقیت ارسال شود، فرم را ریست می‌کنیم
//         reset();
//         // اینجا می‌توانید نظرات جدید را دوباره دریافت کنید یا به یک روش دیگر آنها را به روز کنید
//       } else {
//         throw new Error('خطا در ارسال کامنت');
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//       <div>
//         <textarea
//           {...register('content', { required: 'لطفاً نظر خود را وارد کنید' })}
//           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
//           rows="4"
//           placeholder="نظر خود را اینجا وارد کنید..."
//         ></textarea>
//         {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
//       </div>
//       <button disabled={isSubmitting}
//         type="submit"
//         className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
//       >
//         {isSubmitting ? 'در حال ارسال نظر': 'ارسال نظر'}
//       </button>
//     </form>
//   );
// }
