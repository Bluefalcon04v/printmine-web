import Footer from "../../components/footer";
import FeatureDropdown from "./components/FeatureDropdown";
import FilterDrawer from "./components/FilterDrawer";
import React from "react";

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