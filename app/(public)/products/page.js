

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import ProductImageSlider from "@/_api/product/ProductImageSlider";
import ProductAddToCart from "@/app/cart/ProductAddToCart";
import ProductSpecifications from "@/_api/product/ProductSpecifications";
import ProductComments from "@/_api/product/ProductComments";



export default function ProductPage() {

    return (
        <section className="products-info mt-24 md:mt-36 mb-16 md:mb-28">
            <div className="container">
                {/* category */}
                <div className="breadcrumb">
                    <nav className="flex bg-white dark:bg-zinc-700 w-full px-3 py-2 rounded-2xl"
                         aria-label="Breadcrumb">
                        <ol className="inline-flex items-center overflow-x-auto overflow-y-hidden w-full py-2 space-x-1 child:tracking-tighter text-center ">
                            <li className="inline-flex items-center">
                                <a href="/frontend/tastecoffee/public"
                                   className="inline-flex items-center text-sm/[18px] w-max font-medium text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-300 transition-colors me-1">
                                    صفحه اصلی
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m1 9 4-4-4-4"></path>
                                    </svg>
                                    <a href="/category/pack-tester-coffee"
                                       className="ms-1 text-sm/[18px] w-max font-medium text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-300 transition-colors">
                                        پک تستر قهوه
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m1 9 4-4-4-4"></path>
                                    </svg>
                                    <span
                                        className="ms-1 text-sm/[18px] w-max font-medium text-gray-500 dark:text-gray-400">
                                        پک تستر قهوه بن مانو مدل آرنیکا
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Product Info Body */}
                <div className="products-info-body flex items-center gap-6 flex-col lg:flex-row mt-16">
                    {/* Product Image Slider */}
                    <ProductImageSlider/>
                    {/* Product Info */}
                    <div className="text-zinc-700 w-full md:w-1/2 space-y-6 divide-y divide-gray-300">
                        <div className="products-head">
                            <div className="products-title--box">
                                <div className="products-title">
                                    <h1 className='flex flex-col gap-2'>
                                        <span className="text-sm">ESPRESSO COFFEE BEANS VITALY</span>
                                        <span>دانه قهوه اسپرسو ویتالی</span>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <ul className="grid lg:grid-cols-2  md::grid-cols-1 gap-4 child:p-5 child:text-sm child:dark:bg-zinc-700 dark:child:text-white child:bg-zinc-200 child:rounded-xl pt-4">
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">گونه :</span>
                                <span className="attribute-value-single">ترکیب 30% عربیکا و 70% ربوستا</span>
                            </li>
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">میزان کافئین :</span>
                                <span className="attribute-value-single">بالا</span>
                            </li>
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">خاستگاه :</span>
                                <span className="attribute-value-single">آفریقا و آسیا</span>
                            </li>
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">مواد تشکیل‌دهنده :</span>
                                <span className="attribute-value-single">دانه قهوه</span>
                            </li>
                        </ul>

                        {/* Add to Cart Section */}
                        <ProductAddToCart/>
                    </div>
                </div>

                {/*/!* Product Introduction Section *!/*/}
                {/*<div*/}
                {/*    className="products-introduction dark:bg-zinc-700 p-5 bg-zinc-200  mt-16 md:mt-20 flex items-center flex-col lg:flex-row gap-6 rounded-xl">*/}
                {/*    /!* Image Box *!/*/}
                {/*    <div*/}
                {/*        className="products-introduction-image  w-full lg:w-1/2 bg-zinc-100 dark:bg-zinc-600 p-4 rounded-lg">*/}
                {/*        <img src="/images/p1.png" alt="Product Introduction"*/}
                {/*             className="w-full object-cover rounded-lg"/>*/}
                {/*    </div>*/}

                {/*    /!* Text Box *!/*/}
                {/*    <div className="products-introduction-text text-zinc-700 dark:text-white w-full lg:w-1/2 space-y-4">*/}
                {/*        <h2 className="text-2xl font-bold ">*/}
                {/*            معرفی محصول*/}
                {/*        </h2>*/}
                {/*        <p className="text-md ">*/}
                {/*            این محصول ویژه با ترکیبی از بهترین دانه‌های عربیکا و ربوستا ارائه شده است. مناسب برای کسانی*/}
                {/*            که به دنبال یک تجربه اسپرسو حرفه‌ای هستند. این ترکیب طعمی قوی و کافئین بالا دارد که انرژی*/}
                {/*            شما را برای طول روز تأمین می‌کند.*/}
                {/*        </p>*/}
                {/*        <p className="text-md  ">*/}
                {/*            مناسب برای دستگاه‌های اسپرسو، کمکس، فرنچ پرس و دیگر دستگاه‌های دم‌آوری. این محصول در*/}
                {/*            بسته‌بندی مقاوم ارائه شده تا طراوت و کیفیت دانه‌های قهوه حفظ شود.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!*Product specifications*!/*/}
                {/*<ProductSpecifications/>*/}
                {/*/!*Product comments*!/*/}
                {/*<ProductComments/>*/}
            </div>


        </section>
    );
}
