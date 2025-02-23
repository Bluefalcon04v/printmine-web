import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <footer className="bg-black/90 text-white mt-16  py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold">REACH OUT TO US</h3>
          <p>Company Address</p>
          <p className="mt-2">Company Name : Company_name</p>
          <p className="flex items-center justify-center md:justify-start mt-2">✉️ <a href="mailto:order@printmine.in" className="ml-2">order@printmine.in</a></p>
          <p className="flex items-center justify-center md:justify-start mt-2">📞<a href="tel:+916262427271" className="ml-2">+91 6262427271</a></p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Help</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Cancellation & Refund</Link></li>
            <li><Link href="#">Shipping & Delivery Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Collections</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">Metal Keychain</Link></li>
            <li><Link href="#">Mobile Stand</Link></li>
            <li><Link href="#">Metal Pens</Link></li>
            <li><Link href="#">Magnetic Badges</Link></li>
            <li><Link href="#">All</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Our Company</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Media Coverage</Link></li>
          </ul>
        </div>
      </div>
    </footer>
          <div className="text-center mb-10 text-gray-400  pt-4">
          Copyright © 2025 <Link href="#" className="text-blue-400">PrintMine.in</Link> all rights reserved.
        </div>
        </div>
  );
};
export default Footer;