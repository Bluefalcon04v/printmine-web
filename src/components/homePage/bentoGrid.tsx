import { SampleImage } from "@public/images";
import Image from "next/image";

const BentoGrid = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="shadow-lg p-6 text-center rounded-2xl h-56 flex flex-col justify-center relative overflow-hidden">
        <Image src={SampleImage} alt="Keychain" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <h3 className="text-xl font-bold relative z-10">METAL KEYCHAINS</h3>
      </div>

      <div className="row-span-2 shadow-lg p-8 flex flex-col items-center justify-center text-center rounded-2xl h-full relative overflow-hidden">
        <Image src={SampleImage} alt="Premium Pens" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <h1 className="text-4xl font-bold text-red-500 relative z-10">Premium</h1>
        <h2 className="text-4xl font-bold text-blue-900 relative z-10">Corporate Gifts</h2>
      </div>

      <div className="shadow-lg p-6 text-center rounded-2xl h-56 flex flex-col justify-center relative overflow-hidden">
        <Image src={SampleImage} alt="Badge" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <h3 className="text-xl font-bold text-black relative z-10">MAGNETIC BADGES</h3>
      </div>

      <div className="shadow-lg p-6 text-center rounded-2xl h-56 flex flex-col justify-center relative overflow-hidden">
        <Image src={SampleImage} alt="Metal Pen" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <h3 className="text-xl font-bold relative z-10">PREMIUM METAL PENS</h3>
        <p className="text-sm text-black-700 relative z-10">Perfect gift for corporates</p>
      </div>

      <div className="shadow-lg p-6 text-center rounded-2xl h-56 flex flex-col justify-center relative overflow-hidden">
        <Image src={SampleImage} alt="Card Holder" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <h3 className="text-xl font-bold text-black relative z-10">PREMIUM VISITING CARD HOLDER</h3>
      </div>

    </div>
  );
};

export default BentoGrid;
