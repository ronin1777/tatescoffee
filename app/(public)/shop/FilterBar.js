'use client';

// import { useReducer, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// // import {buildQueryString, filterReducer} from "@/_lib/FilttterFunctions";
// import {FcSearch} from "react-icons/fc";
//
//
// export const buildQueryString = (filterObj) => {
//   const query = new URLSearchParams();
//   for (const key in filterObj) {
//     const value = filterObj[key];
//     if (value || value === false) {
//       query.append(key, value);
//     }
//   }
//   return query.toString();
// };
//
// // تابع برای فیلتر کردن ورودی‌ها
// export const filterReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_FILTER':
//       return { ...state, [action.name]: action.value };
//     case 'RESET':
//       return { coffee_type: '', weight: '', min_price: '', max_price: '', search: '', available: false };
//     default:
//       return state;
//   }
// };
//
// const formatPrice = (value) => {
//   if (!value) return '0'; // Handle the case for empty values
//   return new Intl.NumberFormat('fa-IR', {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(value);
// };
//
// const ProductFilters = () => {
//   const router = useRouter();
//   const [filters, dispatch] = useReducer(filterReducer, {
//     coffee_type: '',
//     weight: '',
//     min_price: '',
//     max_price: '',
//     search: '',
//     available: false,
//   });
//
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     dispatch({ type: 'SET_FILTER', name, value: type === 'checkbox' ? checked : value });
//   };
//
//   const handleCoffeeTypeChange = (type) => {
//     dispatch({ type: 'SET_FILTER', name: 'coffee_type', value: type });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const queryString = buildQueryString({ ...filters, available: filters.available ? 'true' : '' });
//     router.push(`?${queryString}`, { scroll: false });
//   };
//
//   // Debounce effect for search term
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       const queryString = buildQueryString(filters);
//       router.push(`?${queryString}`, { scroll: false });
//     }, 500);
//
//     return () => clearTimeout(timeoutId);
//   }, [filters]);
//
//   return (
//       <div className="flex dark:text-white flex-col gap-2">
//                     {/*search*/}
//           <div className='absolute md:bottom-60 md:right-96 bottom-52 right-56 w-full'>
//           <div className="relative mb-4">
//               <input
//                   type="text"
//                   name="search"
//                   placeholder="جستجو نام محصول"
//                   value={filters.search}
//                   onChange={handleChange}
//                   className="border rounded-md text-xs p-2 pl-10 text-gray-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-blue-400 focus:outline-none w-full placeholder:text-gray-400 transition-all duration-300 transform focus:scale-105"
//               />
//               <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
//                   <FcSearch/>
//               </div>
//           </div>
//           </div>
//           <h3 className="text-sm dark:text-white font-semibold text-gray-700">فیلتر محصولات</h3>
//
//           <div className="flex gap-2">
//               {['bean', 'ground'].map((type) => (
//                   <button
//                       key={type}
//                       type="button"
//                       onClick={() => handleCoffeeTypeChange(type)}
//                       className={`flex items-center justify-center w-12 h-12 border rounded-full p-2 text-xs text-gray-600 transition-colors ${
//                           filters.coffee_type === type ? 'bg-orange-400  dark:bg-blue-600 text-white' : 'dark:hover:bg-blue-500 hover:bg-orange-500 hover:text-white'
//                       }`}
//                   >
//                       {type === 'bean' ? 'دانه' : 'پودر'}
//                   </button>
//               ))}
//           </div>
//
//           <select
//               name="weight"
//               value={filters.weight}
//               onChange={handleChange}
//               className="border rounded-md text-xs p-1 text-gray-600 dark:text-white dark:focus:ring-blue-300 focus:ring-2 focus:ring-orange-300 focus:outline-none w-full"
//           >
//               <option value="">تمام وزن‌ها</option>
//               <option value="250g">۲۵۰ گرم</option>
//               <option value="500g">۵۰۰ گرم</option>
//               <option value="1000g">۱۰۰۰ گرم</option>
//           </select>
//
//           <div className="flex gap-2 flex-wrap ">
//               <div className="flex flex-col w-full ">
//                   <label className="text-xs text-gray-600 dark:text-white">حداقل قیمت: {formatPrice(filters.min_price)} تومان</label>
//                   <input
//                       type="range"
//                       name="min_price"
//                       min="0"
//                       max="600000"
//                       value={filters.min_price}
//                       onChange={(e) => handleChange({target: {name: 'min_price', value: e.target.value}})}
//                       className="w-full range-slider-thumb "
//                   />
//               </div>
//               <div className="flex flex-col w-full">
//                   <label className="text-xs text-gray-600 dark:text-white">حداکثر قیمت: {formatPrice(filters.max_price)} تومان</label>
//                   <input
//                       type="range"
//                       name="max_price"
//                       min="0"
//                       max="2000000"
//                       value={filters.max_price}
//                       onChange={(e) => handleChange({target: {name: 'max_price', value: e.target.value}})}
//                       className="w-full"
//                   />
//               </div>
//           </div>
//
//           <div className="flex items-center text-xs">
//               <input
//                   type="checkbox"
//                   name="available"
//                   checked={filters.available}
//                   onChange={handleChange}
//                   className="mr-1"
//               />
//               <label htmlFor="available" className="text-gray-600 dark:text-white">موجود</label>
//           </div>
//
//           <button
//               type="button"
//               onClick={handleSubmit}
//               className="bg-blue-600 hidden w-1/2 text-white rounded-md text-xs px-3 py-1 hover:bg-blue-500 transition-colors"
//           >
//               اعمال فیلتر
//           </button>
//       </div>
//   );
// };
//
// export default ProductFilters;


import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {BsCheckCircle} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {MdOutlineAttachMoney} from "react-icons/md";
import {BiCoffee} from "react-icons/bi";
import {FiPackage} from "react-icons/fi";
import {HiOutlineFilter} from "react-icons/hi";

const ProductFilters = ({ searchParams }) => {
    const router = useRouter();

    const [filters, setFilters] = useState({
        coffee_type: searchParams?.coffee_type || '',
        weight: searchParams?.weight || '',
        min_price: searchParams?.min_price || '',
        max_price: searchParams?.max_price || '',
        name: searchParams?.name || '',
        available: searchParams?.available || ''
    });


    useEffect(() => {
        const newSearchParams = new URLSearchParams();


        for (const key in filters) {
            if (filters[key]) {
                newSearchParams.set(key, filters[key]);
            }
        }


        router.push(`/shop?${newSearchParams.toString()}`, { scroll: false });
    }, [filters]);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

        const resetFilters = () => {
        setFilters({
            coffee_type: '',
            weight: '',
            min_price: '',
            max_price: '',
            name: '',
            available: ''
        });
    };


return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <HiOutlineFilter className="mr-2" /> فیلترها
            </h2>
            <form className="grid grid-cols-1 gap-4">
                {/* فیلتر نوع قهوه */}
                <div className="flex flex-col">
                    <label htmlFor="coffee_type" className="font-semibold">نوع قهوه:</label>
                    <select
                        id="coffee_type"
                        name="coffee_type"
                        onChange={handleFilterChange}
                        value={filters.coffee_type}
                        className="border rounded p-2"
                    >
                        <option value="">همه</option>
                        <option value="bean">دانه قهوه</option>
                        <option value="ground">پودر قهوه</option>
                    </select>
                </div>

                {/* فیلتر وزن */}
                <div className="flex flex-col">
                    <label htmlFor="weight" className="font-semibold">وزن:</label>
                    <select
                        id="weight"
                        name="weight"
                        onChange={handleFilterChange}
                        value={filters.weight}
                        className="border rounded p-2"
                    >
                        <option value="">همه</option>
                        <option value="250g">۲۵۰ گرم</option>
                        <option value="500g">۵۰۰ گرم</option>
                        <option value="1000g">۱ کیلو گرم </option>
                    </select>
                </div>

                {/* فیلتر قیمت */}
                <div className="flex flex-col">
                    <label htmlFor="min_price" className="font-semibold">حداقل قیمت:</label>
                    <input
                        type="number"
                        id="min_price"
                        name="min_price"
                        onChange={handleFilterChange}
                        value={filters.min_price}
                        className="border rounded p-2"
                        placeholder="حداقل قیمت"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="max_price" className="font-semibold">حداکثر قیمت:</label>
                    <input
                        type="number"
                        id="max_price"
                        name="max_price"
                        onChange={handleFilterChange}
                        value={filters.max_price}
                        className="border rounded p-2"
                        placeholder="حداکثر قیمت"
                    />
                </div>

                {/* فیلتر نام */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-semibold">نام محصول:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleFilterChange}
                        value={filters.name}
                        className="border rounded p-2"
                        placeholder="نام محصول"
                    />
                </div>

                {/* فیلتر موجودی */}
                <div className="flex flex-col">
                    <label htmlFor="available" className="font-semibold">موجودی:</label>
                    <select
                        name="available"
                        onChange={handleFilterChange}
                        value={filters.available}
                        className="border rounded p-2"
                    >
                        <option value="false">همه محصولات</option>
                        <option value="true">فقط محصولات موجود</option>
                    </select>
                </div>
                {/* دکمه ریست */}
                <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-4 bg-orange-400 hover:bg-orange-600 text-white rounded p-2 transition-all"
                >
                    ریست فیلترها
                </button>
            </form>
        </div>
    );
};

export default ProductFilters;


