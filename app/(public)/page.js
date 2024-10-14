



import HomeProductS from "@/app/_components/HomeContent/HomeProductS";
import HomeCategoryP from "@/app/_components/HomeContent/HomeCategoryP";
import CategoryBanner from "@/app/_components/HomeContent/CategoryBanner";
import HomeAbout from "@/app/_components/HomeContent/HomeAbout";

import ShippingSection from "@/app/_components/SendProducts";
import HomePopularP from "@/app/_components/HomeContent/HomePopularP";
import HomeBlog from "@/app/_components/HomeContent/HomeBlog";
import HomeBanner from "@/app/_components/HomeContent/HomeBanner";

export default function Home() {
  return (
      <>
          <HomeBanner/>
        <HomeProductS/>
        <CategoryBanner/>
        <HomeAbout/>
          <HomeCategoryP/>
        <ShippingSection/>
        <HomePopularP/>
        <HomeBlog/>
      </>
  );
}


