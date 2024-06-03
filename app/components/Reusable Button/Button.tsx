import { ButtonProps } from "@/app/types/types";
import { CgArrowTopRight } from "react-icons/cg";

export default function Button({title}: ButtonProps) {
  return (
    <div className="group">
      <button className="bg-slate-400 px-2 py-1 flex items-center text-white transition-all duration-300 hover:bg-slate-600 rounded-lg">
       {title}
        <CgArrowTopRight className="ml-2 transition-transform duration-300 transform group-hover:rotate-45" />
      </button>
    </div>
  );
}
