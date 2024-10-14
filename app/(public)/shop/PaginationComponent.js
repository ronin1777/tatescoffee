'use client'; // تبدیل کامپوننت به کلاینت

import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';

export default function PaginationComponent({ count, itemsPerPage, currentPage, searchParams }) {
    const router = useRouter();

    // محاسبه تعداد صفحات
    const totalPages = Math.ceil(count / itemsPerPage);

    // تابع تغییر صفحه
    const handlePageChange = (event, value) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', value); // شماره صفحه جدید
        router.push(`/shop?${newSearchParams.toString()}`, { scroll: false });
    };

    return (
        <Pagination
            count={totalPages} // تعداد کل صفحات
            color="primary"
            className="mt-5"
            onChange={handlePageChange} // تابع تغییر صفحه
            page={currentPage} // صفحه فعلی
        />
    );
}
