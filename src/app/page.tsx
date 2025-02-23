import Footer from "@components/footer";
import BentoGrid from "@components/homePage/bentoGrid";
import Blogs from "@components/homePage/blogs";
import CategoryNavBar from "@components/homePage/categoryNavBar";
import ExcellenceTeam from "@components/homePage/excellenceTeam";
import HomeSlider from "@components/homePage/homeSlider";
import MeetFounder from "@components/homePage/meetFounder";
import Reviews from "@components/homePage/reviews";
import Sections from "@components/homePage/sections";
import WatchAndBuy from "@components/homePage/watchAndBuy";

export default function Home() {
  return (
    <div className="w-full">
      <CategoryNavBar />
      <HomeSlider />
      <div className="w-11/12 mx-auto">
        <BentoGrid />

        <WatchAndBuy />

        <Sections />
        <Blogs />
        <Reviews />
        <ExcellenceTeam />
        <MeetFounder />
      </div>
      <Footer />
    </div>
  );
}
