"use client"
import FeatureDropdown from "../all-products/components/FeatureDropdown";
import FilterDrawer from "../all-products/components/FilterDrawer";
import ProductCart from "../../components/homePage/productCart";
import Footer from "../../components/footer";
import MetalPens from 'lib/metal-pens.json'
import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex justify-between mx-auto my-2 w-10/12">
        <FilterDrawer />
        <FeatureDropdown />
      </div>
      <div className="mx-auto w-9/12">
        <div className="gap-8 max-md:gap-x-4 grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3">
          {MetalPens.map((item, index) => (
            <ProductCart data={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
