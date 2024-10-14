import ProductImageSlider from "@/_api/product/ProductImageSlider";
import ProductAddToCart from "@/app/cart/ProductAddToCart";
import ProductSpecifications from "@/_api/product/ProductSpecifications";
import ProductComments from "@/_api/product/ProductComments";
import Link from "next/link";
import {MdKeyboardDoubleArrowLeft} from "react-icons/md";
import Image from "next/image";


export default async function ProductPage({params}) {
    const {productId} = params;

    let product;
    let errorMessage = '';

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/product/products/${productId}/`);

        if (!res.ok) {
            if (res.status === 404) {
                errorMessage = 'محصولی با این شناسه یافت نشد.';
            } else {
                errorMessage = 'خطایی در بارگذاری اطلاعات محصول وجود دارد.';
            }
            throw new Error(errorMessage);
        }

        product = await res.json();
    } catch (error) {
        console.error(error);
        // در اینجا می‌توانید به نمایش پیام خطا بپردازید
    }
    const primaryImage = product?.images.find(image => image.image_type === 'primary');
    const secondaryImage = product?.images.find(image => image.image_type === 'secondary');
    const tertiaryImage = product?.images.find(image => image.image_type === 'tertiary');
    const type = product?.coffee_type;
    const price = product?.base_price




    return (

        <section className="products-info mt-24 md:mt-36 mb-16 md:mb-28">

            {errorMessage ? (<div className="bg-zinc-400 text-red-700 p-4 rounded-lg mt-4">
                {errorMessage}
            </div>): (<div className="container">
                {/* category */}
                <div className="breadcrumb">
                    <nav className="flex bg-white dark:bg-zinc-700 w-full px-3 py-2 rounded-2xl"
                         aria-label="Breadcrumb">
                        <ol className="inline-flex items-center overflow-x-auto overflow-y-hidden w-full py-2 space-x-1 child:tracking-tighter text-center ">
                            <li className="inline-flex items-center">
                                <Link href="/"
                                      className="inline-flex items-center text-sm/[18px] w-max font-medium text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-300 transition-colors me-1">
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <MdKeyboardDoubleArrowLeft/>
                                    <p className="ms-1 text-sm/[18px] w-max font-medium text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-300 transition-colors">
                                        {product?.category.name}
                                    </p>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <MdKeyboardDoubleArrowLeft/>
                                    <span
                                        className="ms-1 text-sm/[18px] w-max font-medium text-gray-500 dark:text-gray-400">
                                        {product?.name}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Product Info Body */}
                <div className="products-info-body flex items-center gap-6 flex-col lg:flex-row mt-16">
                    {/* Product Image Slider */}
                    <ProductImageSlider primaryImage={primaryImage} secondaryImage={secondaryImage}/>
                    {/* Product Info */}
                    <div className="text-zinc-700 w-full md:w-1/2 space-y-6 divide-y divide-gray-300">
                        <div className="products-head">
                            <div className="products-title--box">
                                <div className="products-title">
                                    <h1 className='flex flex-col gap-2'>
                                        <span> قهوه {product?.name}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <ul className="grid lg:grid-cols-2  md::grid-cols-1 gap-4 child:p-5 child:text-sm child:dark:bg-zinc-700 dark:child:text-white child:bg-zinc-200 child:rounded-xl pt-4">
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">گونه :</span>
                                <span className="attribute-value-single">{product?.variety}</span>
                            </li>
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">طعم‌یادها :</span>
                                <span className="attribute-value-single">{product?.flavor_notes}</span>
                            </li>
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">خاستگاه :</span>
                                <span className="attribute-value-single">{product?.origin}</span>
                            </li>
                            <li className="products-attribute-single">
                                <span className="attribute-name-single">مواد تشکیل‌دهنده :</span>
                                <span className="attribute-value-single">{type === 'bean' ? 'دانه' : 'پودر'} قهوه</span>
                            </li>
                        </ul>

                        {/* Add to Cart Section */}
                        <ProductAddToCart productId={productId} basePrice={price}/>
                    </div>
                </div>

                {/* Product Introduction Section */}
                <div
                    className="products-introduction dark:bg-zinc-700 p-5 bg-zinc-200  mt-16 md:mt-20 flex items-center flex-col lg:flex-row gap-6 rounded-xl">
                    {/* Image Box */}
                    <div
                        className="products-introduction-image  w-full lg:w-1/2 bg-zinc-100 dark:bg-zinc-600 p-4 rounded-lg">
                        <Image width={300} height={200} quality={100} src={tertiaryImage?.image || primaryImage?.image}
                               alt="Product image"
                               className="w-full object-cover rounded-lg"/>
                    </div>

                    {/* Text Box */}
                    <div className="products-introduction-text text-zinc-700 dark:text-white w-full lg:w-1/2 space-y-4">
                        <h2 className="text-2xl font-bold ">
                            معرفی محصول
                        </h2>
                        <p className="text-md ">
                            این محصول ویژه با ترکیبی از بهترین دانه‌های عربیکا و ربوستا ارائه شده است. مناسب برای کسانی
                            که به دنبال یک تجربه اسپرسو حرفه‌ای هستند. این ترکیب طعمی قوی و کافئین بالا دارد که انرژی
                            شما را برای طول روز تأمین می‌کند.
                        </p>
                        <p className="text-md  ">
                            مناسب برای دستگاه‌های اسپرسو، کمکس، فرنچ پرس و دیگر دستگاه‌های دم‌آوری. این محصول در
                            بسته‌بندی مقاوم ارائه شده تا طراوت و کیفیت دانه‌های قهوه حفظ شود.
                        </p>
                    </div>
                </div>
                {/*Product specifications*/}
                <ProductSpecifications product={product}/>
                {/*/!*Product comments*!/*/}
                <ProductComments productId={productId}/>
            </div>)}


        </section>
    );
}


// const ProductDetailPage = async ({ params }) => {
//   const { productId } = params;
//
//   // Fetch product details from your Django API
//   const res = await fetch(`http://127.0.0.1:8000/api/product/products/${productId}/`);
//
//   if (!res.ok) {
//     throw new Error('Failed to fetch product details');
//   }
//
//   const product = await res.json();