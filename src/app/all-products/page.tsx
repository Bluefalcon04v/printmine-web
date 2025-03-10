import React from "react";
import BestSellerProductCard from "./components/BestsellerProductCard";
import FilterDrawer from "./components/FilterDrawer";
import FeatureDropdown from "./components/FeatureDropdown";
export default function Page() {
    

    return (
        <div className="p-4">
      <div className=" flex justify-between mr-10 mb-4">
        <FilterDrawer />
        <FeatureDropdown/>
      </div>
      <BestSellerProductCard/>
    </div>
    );
}