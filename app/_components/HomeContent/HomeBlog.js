"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeBlog() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div className='overflow-hidden'>
    <section data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-out-back" className="blogs  mb-12 md:mb-28">
      <div className="container">
        <div className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
          <div>
            <h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl">مطالب خواندنی</h2>
            <p className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5"></p>
          </div>
          <Link href="/blog"
            className="flex justify-center items-center md:gap-x-0.5 pr-3 pl-1 h-11 rounded-lg transition-colors text-orange-400 dark:text-orange-300 hover:dark:bg-orange-300/20 hover:bg-orange-300/35 text-sm xs:text-lg ipad:text-xl tracking-tightest">
            مشاهده همه
            <svg className="w-4 h-4 xs:w-5 xs:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
        <div className="blogs-container grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
            <Link href="/blog" className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false">
              <Image
                src="/images/blog-1.png"
                width='270'
                height='150'
                alt="Blog Image"
                className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"
              />
            </Link>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
              <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                <Link href="/blog" className="text-zinc-700 hover:dark:text-orange-300 dark:text-white hover:text-orange-400 transition-all">
                  طرز تهیه قهوه فرانسه با فرنچ پرس و دستگاه + اموزش گام به گام
                </Link>
              </h4>
              <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                <p className="text-sm sm:text-xl">۳</p><p className="text-sm sm:text-xs">شهریور</p><p className="text-sm sm:text-sm">۱۴۰۳</p>
              </h4>
            </div>
          </div>
          <div className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
            <Link href="/blog" className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false">
              <Image
                width='270'
                height='150'
                src="/images/blog-2.png"
                alt="Blog Image"
                className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"
              />
            </Link>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
              <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                <Link href="/blog" className="text-zinc-700 hover:dark:text-orange-300 dark:text-white hover:text-orange-400 transition-all">
                  معروف ترین و بهترین برند های قهوه
                </Link>
              </h4>
              <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                <p className="text-sm sm:text-xl">۲۵</p><p className="text-sm sm:text-xs">مرداد</p><p className="text-sm sm:text-sm">۱۴۰۳</p>
              </h4>
            </div>
          </div>
          <div className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
            <Link href="/blog" className="hover:bg-orange-300 dark:hover:bg-blue-600 group rounded-lg sm:rounded-xl transition-colors aspect-[16/10] false">
              <Image
                width='270'
                height='150'
                src="/images/blog-3.png"
                alt="Blog Image"
                className="aspect-[16/10] min-h-[72px] xs:min-h-20 min-w-27 w-27 xs:min-w-28 xs:w-28 sm:w-auto rounded-lg sm:rounded-xl group-hover:opacity-40 transition-opacity visible opacity-100"
              />
            </Link>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-3 w-full sm:w-auto child:w-full sm:child:w-auto">
              <h4 className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px] w-5/6">
                <Link href="/blog" className="text-zinc-700 dark:text-white hover:dark:text-orange-300 hover:text-orange-400 transition-all">
                  طرز تهیه قهوه ترک بصورت حرفه ایی
                </Link>
              </h4>
              <h4 className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium w-1/6 border-t sm:border-t-0 sm:border-r border-gray-300 dark:border-white/25 pt-2 sm:ps-2">
                <p className="text-sm sm:text-xl">۱۸</p><p className="text-sm sm:text-xs">مرداد</p><p className="text-sm sm:text-sm">۱۴۰۳</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
  );
}
