import { SampleImage } from "@public/images";
import Image from "next/image";
import Link from "next/link";

const BentoGrid = () => {
  return (
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3 p-8">
        <div className="relative flex flex-col justify-center shadow-lg p-6 rounded-2xl h-56 overflow-hidden text-center">
          <Image src={SampleImage} alt="Keychain" layout="fill" objectFit="cover" className="absolute inset-0 opacity-70 w-full h-full object-cover pointer-events-none" />
          <Link href="/all-products" >
          <h3 className="z-10 relative font-bold hover:text-blue-500 text-xl hover:scale-105 transition-colors duration-300">METAL KEYCHAINS</h3>
          </Link>
     </div>

        <div className="relative flex flex-col justify-center items-center row-span-2 shadow-lg p-8 rounded-2xl h-full overflow-hidden text-center">
          <Image src={SampleImage} alt="Premium Pens" layout="fill" objectFit="cover" className="absolute inset-0 opacity-30 w-full h-full object-cover" />
          <h1 className="z-10 relative font-bold text-red-500 text-4xl">Premium</h1>
          <h2 className="z-10 relative font-bold text-blue-900 text-4xl">Corporate Gifts</h2>
        </div>

        <div className="relative flex flex-col justify-center shadow-lg p-6 rounded-2xl h-56 overflow-hidden text-center">
          <Image src={SampleImage} alt="Badge" layout="fill" objectFit="cover" className="absolute inset-0 opacity-70 w-full h-full object-cover" />
          <h3 className="z-10 relative font-bold text-black text-xl">MAGNETIC BADGES</h3>
          <p className="z-10 relative text-black-700 text-sm">Perfect gift for cooperates</p>
        </div>

        <div className="relative flex flex-col justify-center shadow-lg p-6 rounded-2xl h-56 overflow-hidden text-center">
          <Image src={SampleImage} alt="Metal Pen" layout="fill" objectFit="cover" className="absolute inset-0 opacity-70 w-full h-full object-cover" />
          <h3 className="z-10 relative font-bold text-xl">PREMIUM METAL PENS</h3>
          <p className="z-10 relative text-black-700 text-sm">Perfect gift for cooperates</p>
        </div>

        <div className="relative flex flex-col justify-center shadow-lg p-6 rounded-2xl h-56 overflow-hidden text-center">
          <Image src={SampleImage} alt="Card Holder" layout="fill" objectFit="cover" className="absolute inset-0 opacity-70 w-full h-full object-cover" />
          <h3 className="z-10 relative font-bold text-black text-xl">PREMIUM VISITING CARD HOLDER</h3>
          <p className="z-10 relative text-black-700 text-sm">Perfect gift for cooperates</p>
        </div>
      </div>
  );
};

export default BentoGrid;