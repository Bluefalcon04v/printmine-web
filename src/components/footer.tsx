import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <footer className="bg-[#1d242c] mt-16 px-6 py-10 pb-20 text-white">
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto text-sm md:text-left text-center container">
        <div>
          <h3 className="font-semibold text-lg">REACH OUT TO US</h3>
          <p>Company Address</p>
          <p className="mt-2">Company Name : Company_name</p>
          <p className="flex justify-center md:justify-start items-center mt-2">✉️ <a href="mailto:order@printmine.in" className="ml-2">order@printmine.in</a></p>
          <p className="flex justify-center md:justify-start items-center mt-2">📞<a href="tel:+916262427271" className="ml-2">+91 6262427271</a></p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Help</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Cancellation & Refund</Link></li>
            <li><Link href="#">Shipping & Delivery Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Collections</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="#">Metal Keychain</Link></li>
            <li><Link href="#">Mobile Stand</Link></li>
            <li><Link href="#">Metal Pens</Link></li>
            <li><Link href="#">Magnetic Badges</Link></li>
            <li><Link href="#">All</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Our Company</h3>
          <ul className="space-y-2 mt-2">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Media Coverage</Link></li>
          </ul>
        </div>
      </div>
    </footer>
          <div className="my-2 text-gray-400 text-center">
          Copyright © 2025 <Link href="#" className="px-0.5 text-blue-400 capitalize">Tohfe ka theka</Link> all rights reserved.
        </div>
        </div>
  );
};
export default Footer;