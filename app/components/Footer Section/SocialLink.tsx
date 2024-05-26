import { CgFacebook } from "react-icons/cg";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
export default function SocialLink() {
  return (
    <div className="flex flex-col">
      <p className="text-[#8f8f8f] text-xl font-semibold pb-7">Follow us on</p>

      {/* facebook */}
      <div className="flex items-center gap-1 pb-3">
        <CgFacebook />
        <p className="">Facebook</p>
      </div>

      {/* youtube */}
      <div className="flex items-center gap-1 pb-3">
        <PiYoutubeLogoLight />
        <p className="">Youtube</p>
      </div>

      {/* Instagram */}
      <div className="flex items-center gap-1 pb-3">
        <FaInstagram />
        <p className="">Instagram</p>
      </div>

      {/* Tik tok */}
      <div className="flex items-center gap-1 pb-3">
        <TbBrandTiktok />
        <p className="">Tik tok</p>
      </div>
    </div>
  );
}
