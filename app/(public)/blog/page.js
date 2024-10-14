import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Blog',
  description: 'blogs of coffee'
}

export default function BlogPage() {

    return <>
        <section
            className="blog-header mt-16 md:mt-0 h-60 xs:h-80 md:h-screen bg-blog-header bg-no-repeat bg-cover bg-[right_top]">
            <div className="container flex items-center h-full"></div>
        </section>
        <section className="blog my-12 md:my-20">
            <div className="container"><h1
                className="text-center text-3xl xs:text-4xl font-morabba-medium text-zinc-900 dark:text-white">
                مقاله ها </h1>
                <div className="w-full h-0.5 my-9 bg-gray-200 dark:bg-white/20 rounded-full"></div>
            </div>
            <section className="blogs mb-12 md:mb-28">
                <div className="container">
                    <div
                        className="blogs-container grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div
                            className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
                            <Link href="/blog"
                                  className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false"><Image
                                src="/images/blog-1.png" width='270' height='150' alt="Blog Image"
                                className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"/></Link>
                            <div
                                className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
                                <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                                    <Link href="/blog"
                                          className="text-zinc-700 hover:dark:text-orange-300 dark:text-white hover:text-orange-400 transition-all">طرز
                                        تهیه قهوه
                                        فرانسه با فرنچ پرس و دستگاه + اموزش گام به گام</Link></h4>
                                <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                                    <p className="text-sm sm:text-xl">۳</p><p className="text-sm sm:text-xs">شهریور</p>
                                    <p
                                        className="text-sm sm:text-sm">۱۴۰۳</p></h4>
                            </div>
                        </div>
                        <div
                            className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
                            <Link href="/blog"
                                  className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false"><Image
                                width='270' height='150' src="/images/blog-2.png" alt="Blog Image"
                                className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"/></Link>
                            <div
                                className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
                                <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                                    <Link href="/blog"
                                          className="text-zinc-700 hover:dark:text-orange-300 dark:text-white hover:text-orange-400 transition-all">معروف
                                        ترین و
                                        بهترین برند های قهوه</Link></h4>
                                <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                                    <p className="text-sm sm:text-xl">۲۵</p><p className="text-sm sm:text-xs">مرداد</p>
                                    <p
                                        className="text-sm sm:text-sm">۱۴۰۳</p></h4>
                            </div>
                        </div>
                        <div
                            className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
                            <Link href="/blog"
                                  className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false"><Image
                                width='270' height='150' src="/images/blog-3.png" alt="Blog Image"
                                className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"/></Link>
                            <div
                                className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
                                <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                                    <Link href="/blog"
                                          className="text-zinc-700 dark:text-white hover:dark:text-orange-300 hover:text-orange-400 transition-all">طرز
                                        تهیه قهوه
                                        ترک بصورت حرفه ایی</Link></h4>
                                <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                                    <p className="text-sm sm:text-xl">۲۵</p><p className="text-sm sm:text-xs">مرداد</p>
                                    <p
                                        className="text-sm sm:text-sm">۱۴۰۳</p></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>
}


// <div
//     className="blogs-container mt-12 md:mt-16 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//     <div
//         className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
//         <a href="/blog/how-make-french-coffee"
//            className="hover:bg-orange-300 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false"><img
//             loading="lazy" src="/images/blogs/blog-1.png" alt="Blog Image"
//             className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"/></a>
//         <div
//             className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
//             <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
//                 <a href="/blog/how-make-french-coffee"
//                    className="hover:dark:text-orange-300 hover:text-orange-400 transition-all">طرز تهیه
//                     قهوه فرانسه با فرنچ پرس و دستگاه + اموزش گام به گام</a></h4>
//             <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
//                 <p className="text-sm sm:text-xl">۳</p><p className="text-sm sm:text-xs">شهریور</p><p
//                 className="text-sm sm:text-sm">۱۴۰۳</p></h4>
//         </div>
//     </div>
//     <div
//         className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
//         <a href="/blog/most-famous-coffee-brands"
//            className="hover:bg-orange-300 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false"><img
//             loading="lazy" src="/images/blogs/blog-2.png" alt="Blog Image"
//             className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"/></a>
//         <div
//             className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
//             <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
//                 <a href="/blog/most-famous-coffee-brands"
//                    className="hover:dark:text-orange-300 hover:text-orange-400 transition-all">معروف
//                     ترین و بهترین برند های قهوه</a></h4>
//             <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
//                 <p className="text-sm sm:text-xl">۲۵</p><p className="text-sm sm:text-xs">مرداد</p><p
//                 className="text-sm sm:text-sm">۱۴۰۳</p></h4>
//         </div>
//     </div>
//     <div
//         className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
//         <a href="/blog/prepare-turkish-coffee-professionally"
//            className="hover:bg-orange-300 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false"><img
//             loading="lazy" src="/images/blogs/blog-3.png" alt="Blog Image"
//             className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"/></a>
//         <div
//             className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
//             <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
//                 <a href="/blog/prepare-turkish-coffee-professionally"
//                    className="hover:dark:text-orange-300 hover:text-orange-400 transition-all">طرز تهیه
//                     قهوه ترک بصورت حرفه ایی</a></h4>
//             <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
//                 <p className="text-sm sm:text-xl">۲۵</p><p className="text-sm sm:text-xs">مرداد</p><p
//                 className="text-sm sm:text-sm">۱۴۰۳</p></h4>
//         </div>
//     </div>
// </div>