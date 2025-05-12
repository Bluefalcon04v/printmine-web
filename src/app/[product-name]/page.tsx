"use client";
import ProductCart from "../../components/homePage/productCart";
import PackingMaterials from 'lib/packing-materials.json';
import React, { useEffect, useState } from "react";
import LaptopSleeve from 'lib/laptop-sleeve.json';
import MobileStand from 'lib/mobile-stand.json';
import PenKeychain from 'lib/pen-keychain.json';
import PlasticPen from 'lib/plastic-pen.json';
import Footer from "../../components/footer";
import LaptopBag from 'lib/laptop-bag.json';
import PowerBank from 'lib/power-bank.json';
import MetalPen from 'lib/metal-pen.json';
import Notebook from 'lib/notebook.json';
import GiftSet from 'lib/gift-set.json';
import Novelty from 'lib/novelty.json';
import Bottle from 'lib/bottle.json';
import Clock from 'lib/clock.json';

export default function Page() {
  const Params = window.location.pathname.split('/').pop().toLowerCase();

  const productDataMap = {
    bottle: Bottle,
    novelty: Novelty,
    clock: Clock,
    "gift-set": GiftSet,
    "laptop-bag": LaptopBag,
    "laptop-sleeve": LaptopSleeve,
    "metal-pen": MetalPen,
    "mobile-stand": MobileStand,
    notebook: Notebook,
    "packing-materials": PackingMaterials,
    "pen-keychain": PenKeychain,
    "plastic-pen": PlasticPen,
    "power-bank": PowerBank,
  };

  const [matchedData, setMatchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const matched = productDataMap[Params];

    setLoading(true);
    setTimeout(() => {
      setMatchedData(matched);
      setLoading(false);
    }, 500);
  }, [Params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* <div className="flex justify-between mx-auto my-2 w-10/12 max-lg:w-[95%]">
        <FilterDrawer />
        <FeatureDropdown />
      </div> */}

      <div className={`mx-auto w-9/12 my-3 transition-opacity max-lg:w-[95%] ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {matchedData?.length > 0 ? (
          <div className="gap-6 max-md:gap-x-2 grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-3">
            {matchedData.map((item, index) => (
              <ProductCart data={item} key={index} />
            ))}
          </div>
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
