// import { Category1, Category2, Category3, Category4, Category5, Category6 } from "../../../public/images";
import Footer from "../../components/footer";
// import ProductCart from "../../components/homePage/productCart";
import FeatureDropdown from "./components/FeatureDropdown";
import FilterDrawer from "./components/FilterDrawer";
import React from "react";

// export const LISTING_DATA =  [
//   {
//     image: Category1,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 200,
//     actualPrice: 400,
//     status: 0,
//     stars: 2,
//     rating: 200,
//   },
//   {
//     image: Category2,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 1000,
//     actualPrice: 400,
//     status: 1,
//     stars: 3,
//     rating: 3000,
//   },
//   {
//     image: Category4,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 980,
//     actualPrice: 680,
//     status: 0,
//     stars: 2,
//     rating: 20,
//   },
//   {
//     image: Category5,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 670,
//     actualPrice: 1200,
//     status: 2,
//     stars: 5,
//     rating: 44,
//   },
//   {
//     image: Category6,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 999,
//     actualPrice: 1500,
//     status: 2,
//     stars: 2,
//     rating: 200,
//   },
//   {
//     image: Category2,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 200,
//     actualPrice: 400,
//     status: 1,
//     stars: 1,
//     rating: 670,
//   },
//   {
//     image: Category3,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 800,
//     actualPrice: 3100,
//     status: 0,
//     stars: 2,
//     rating: 2120,
//   },
//   {
//     image: Category2,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 200,
//     actualPrice: 400,
//     status: 1,
//     stars: 5,
//     rating: 200,
//   },
//   {
//     image: Category4,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 200,
//     actualPrice: 400,
//     status: 0,
//     stars: 2,
//     rating: 980,
//   },
//   {
//     image: Category1,
//     name: "Premium Mobile Stand | Best for Corporate Gifting | PrintMine.in",
//     sellingPrice: 200,
//     actualPrice: 400,
//     status: 1,
//     stars: 4,
//     rating: 860,
//   },
// ]

export default function Page() {

  return (
    <>
      <div className="flex justify-between mx-auto my-2 w-10/12">
        <FilterDrawer />
        <FeatureDropdown />
      </div>
    <div className="mx-auto w-9/12">
      <div className="gap-x-10 gap-y-10 grid grid-cols-4">
      {/* {LISTING_DATA.map((item, index) => (
        <ProductCart data={item} key={index} />
      ))} */}
      </div>
    </div>
      <Footer />
</>
  );
}