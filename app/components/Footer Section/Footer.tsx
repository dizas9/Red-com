import { categories, links } from "@/app/data/data";
import Image from "next/image";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <div className="lg:px-10 md:px-28 lg:py-2 p-2 flex flex-col  px-3 h-fit">
      <hr className="h-[0.1rem] bg-slate-400 mb-5" />
      {/* logo */}
      <div className="mb-16">
        <Image src={"/logo/logo.webp"} alt="logo..." width={120} height={200} />
      </div>

      {/* Sections */}
      <div className="flex   flex-col md:flex-row lg:flex-row  w-full h-fit">
        {/* div1 */}
        <div className=" h-fit w-full lg:w-[70%] md:w-[70%] flex">
          {/* catigories */}
          <div className="w-1/2 ">
            <p className="text-[#8f8f8f] text-xl font-semibold pb-7">
              Categories
            </p>
            {categories.map((item, idx) => (
              <div className="" key={idx}>
                <p className="pb-3">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="w-1/2 ">
            <p className="text-[#8f8f8f] text-xl font-semibold pb-7">Links</p>
            {links.map((item, idx) => (
              <div className="" key={idx}>
                <p className="pb-3">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* div2 */}
        <div className=" h-fit w-1/2 md:w-[30%]  lg:w-[40%]">
          {/* follow us */}
          <SocialLink />
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-6">
        <Image alt="..." src={"/logo/logo2.webp"} width={20} height={200}/>
        <p className="text-gray-400 text-xs ">We Run On Redshop</p>
      </div>
    </div>
  );
}
