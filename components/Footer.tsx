import { bebas_neue, payments } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";


export default function Footer() {
  return (
    <footer className="pt-20 px-12 ">
      <div className="flex flex-col justify-center gap-12 lg:justify-between lg:flex-row">
        <div className="max-w-md">
          <Link href="/" className="text-stone-800 font-bold text-xl">
            <h1 className={`text-4xl ${bebas_neue.className}`}>FirShop</h1>
          </Link>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eveniet vel quod. Corrupti recusandae quidem consequatur suscipit, praesentium maiores deleniti.</p>
          <div className="flex gap-4">
            {payments.map(payment => (
              <Image key={payment.name} src={`/img/${payment.img}`} width={50} height={50} alt={payment.name} />
            ))}
          </div>
        </div>
        <div>
          <h3 className={`text-4xl ${bebas_neue.className}`}>Category</h3>
          <ul className="text-sm flex flex-col gap-5 my-6">
            <li><Link href="">Electronics</Link></li>
            <li><Link href="">Jewelery</Link></li>
            <li><Link href="">Man's Clothing</Link></li>
            <li><Link href="">Woman's Clothing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={`text-4xl ${bebas_neue.className}`}>Service</h3>
          <ul className="text-sm flex flex-col gap-5 my-6">
            <li><Link href="">Help</Link></li>
            <li><Link href="">Contact Us</Link></li>
            <li><Link href="">Order Status</Link></li>
            <li><Link href="">Delivery</Link></li>
            <li><Link href="">Payment Options</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={`text-4xl ${bebas_neue.className}`}>Company</h3>
          <ul className="text-sm flex flex-col gap-5 my-6">
            <li><Link href="">About Us</Link></li>
            <li><Link href="">News</Link></li>
            <li><Link href="">Terms and Conditions</Link></li>
            <li><Link href="">Privacy Policy</Link></li>
            <li><Link href="">Inverstors</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="text-sm py-10">
          <Link href="/">&copy; 2024 FirShop</Link> | <Link href="/">Privacy Policy</Link> | <Link href="/">Terms and Condition</Link>
        </div>
        <div className="flex text-2xl gap-6 text-stone-600 items-center">
          <BiLogoFacebookSquare />
          <BiLogoYoutube />
          <BiLogoInstagram />
          <BiLogoTiktok />
        </div>
      </div>
    </footer>
  )
}
