import CategoryNavBar from "@components/homePage/categoryNavBar";
import ExcellenceTeam from "@components/homePage/excellenceTeam";
import MeetFounder from "@components/homePage/meetFounder";
import WatchAndBuy from "@components/homePage/watchAndBuy";
import HomeSlider from "@components/homePage/homeSlider";
import BentoGrid from "@components/homePage/bentoGrid";
// import Sections from "@components/homePage/sections";
import Reviews from "@components/homePage/reviews";
import Blogs from "@components/homePage/blogs";
import Footer from "@components/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-7 w-full">
      <CategoryNavBar />
      <HomeSlider />
      <div className="mx-auto w-11/12">
        <BentoGrid />
        <WatchAndBuy />
        {/* <Sections /> */}
        <Blogs />
        <Reviews />
        <ExcellenceTeam />
        <MeetFounder />
      </div>
      <Footer />
    </div>
  );
}