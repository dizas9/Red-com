"use client";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import useScreenResize from "@/app/lib/screenSize";

export default function Header() {
  const screenSize = useScreenResize();

  return (
    <section className=" mx-auto 2xl:max-w-[100rem] flex flex-col fixed right-0 left-0 z-[120] bg-[#fffffff2]">
      <div className="lg:px-10 md:px-28 lg:py-2 md:py-1 p-2 flex items-center">
        {/* sidebar + Navbar */}
        <div className="flex  w-[33.3%] gap-5 items-center">
          {/* menubar icon */}
          <div className="cursor-pointer">
            <HiMenuAlt2 size={screenSize >= 1024 ? 17 : 25} />
          </div>

          {/* NavItems */}
          <div className="lg:flex gap-7 text-xs hidden font-normal ">
            <div className="flex items-center">Home</div>
            <div className="flex items-center gap-1">
              Categories <FaChevronDown />
            </div>
            <div className="flex items-center gap-1">
              Pages <FaChevronDown />
            </div>
          </div>
        </div>

        {/* logo */}
        <div className=" cursor-pointer w-[33.3%] flex justify-center">
          <Image src={"/logo/logo.webp"} alt="logo" width={100} height={100} />
        </div>

        {/* search + cart + language */}
        <div className="flex items-center justify-between lg:justify-end lg:gap-5  w-[33.3%] ">
          {/* search */}
          <div className="flex gap-1 item-center">
            <HiOutlineSearch size={screenSize >= 1024 ? 20 : 22} />
            <p className="text-xs font-bold hidden lg:flex">Search</p>
          </div>

          {/* cart */}
          <div className="flex gap-1 item-center">
            <FiShoppingBag
              size={screenSize >= 1024 ? 20 : 22}
              className="relative"
            />
            <span className="absolute top-3  text-xs bg-slate-400 px-1 text-white">
              0
            </span>
            <p className="text-xs  font-bold hidden lg:flex">Cart</p>
          </div>

          {/* language */}
          <div className="flex gap-1 items-center">
            <MdLanguage
              size={screenSize >= 1024 ? 20 : 22}
              color="rgba(148,163,184,0.95)"
            />
            <p className="text-xs  font-bold hidden lg:flex text-[rgba(148,163,184,0.95)]">
              EN
            </p>
          </div>
        </div>
      </div>

      <hr className="lg:mx-10 md:mx-28 mx-3  bg-[rgba(148,163,184,0.55)] h-[0.1rem]" />
    </section>
  );
}
