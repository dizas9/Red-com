import { GrHomeRounded } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
export default function FooterMenu() {
  return (
    <section className=" mx-auto lg:hidden flex flex-col fixed bottom-0  right-0 left-0 z-[120] lg:bg-[#fffffff2] bg-white m-0 p-2 border-t-2">
      <div className="flex  justify-around">
        <div className="flex flex-col items-center gap-1">
          <GrHomeRounded size={15} />
          <p className="text-xs">Home</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <BiCategoryAlt size={15} />
          <p className="text-xs">Categories</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <HiOutlineSearch size={15} />
          <p className="text-xs">Search</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <FiShoppingBag size={15} />
          <p className="text-xs">Cart</p>
        </div>
      </div>
    </section>
  );
}
