import React from 'react';
import {cookies, headers} from 'next/headers';
import { fetchUserDataWithToken, getAccessTokenAndRefreshToken } from "@/app/utils/getAccessTokenAndRefreshToken";
import formatCommentDate from "@/app/utils/utils";
import AddCommentForm from "@/app/(public)/shop/AddCommentForm";

import LoginButton from "@/app/_components/Modals/LoginButton";
import {refreshAccessToken} from "@/app/utils/refreshAccessToken";
import {redirect} from "next/navigation";
import {fetchUserData} from "@/_api/user/userProfile";

export default async function ProductComments({ productId }) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access_token')?.value;

    let user;
    let error;

    // بارگذاری اطلاعات کاربر
    try {
        user = await fetchUserData(accessToken);
    } catch (err) {
        error = err.message;
        console.error("Error fetching user data:", error);
    }

    const res = await fetch(`http://127.0.0.1:8000/api/comment/${productId}/`);
    if (!res.ok) {
        return <p>خطایی در دریافت کامنت‌ها رخ داده است</p>;
    }
    const pComments = await res.json();

    return (
        <div className="comments-section mt-8 space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">نظرات</h2>

            {pComments.results.length === 0 ? (
                <p>اولین نفری باشید که برای این محصول نظر میگذارد.</p>
            ) : (
                pComments.results.map(comment => (
                    <div key={comment.id} className="comment-item border border-gray-300 p-4 rounded-lg shadow-lg bg-white dark:bg-zinc-800">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-500 text-sm">{formatCommentDate(comment.created_at)}</span>
                            <span className="font-semibold text-lg text-orange-300 dark:text-orange-400">{comment.user}</span>
                        </div>
                        <p className="text-base text-gray-700 dark:text-gray-300 mb-3">{comment.content}</p>

                        {/* نمایش ریپلای‌ها */}
                        {comment.replies.length > 0 && (
                            <div className="replies-section mt-4 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                                {comment.replies.map(reply => (
                                    <div
                                        key={reply.id}
                                        className="reply-item border border-gray-200 p-3 rounded-md mt-2 bg-gray-100 dark:bg-zinc-700 shadow-sm hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-500 text-sm">{formatCommentDate(reply.created_at)}</span>
                                            <span className="font-semibold text-sm text-orange-400">{reply.user}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{reply.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            )}

{/* نمایش فرم نظر */}
      {user ? (
        <AddCommentForm productId={productId} accessToken={accessToken}/>
      ) : (
        <p className="mt-4 text-gray-600 flex items-center">
          برای ثبت نظر لطفاً
          وارد شوید.
        </p>
            )}
        </div>
    );
}