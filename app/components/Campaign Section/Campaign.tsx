import Image from "next/image";
import Button from "../Reusable Button/Button";

export default function Campaign() {
  return (
    <div className=" lg:h-screen 2xl:h-[70vh] h-[22rem] flex relative pb-7">
      {/* image 1 */}
      <div className="w-1/2">
        <Image
          src={"/images/sculpture/flower2.webp"}
          width={800}
          height={500}
          alt="image 1"
          className="h-full object-cover rounded-tl-xl rounded-bl-xl"
        />
      </div>

      {/* image 2 */}
      <div className="w-1/2">
        <Image
          src={"/images/bedroom/big2.webp"}
          width={800}
          height={200}
          alt="image 1"
          className="h-full object-cover rounded-tr-xl rounded-br-xl"
        />
      </div>

      {/* shop now + title */}
      <div className="absolute top-1/2 md:top-[30%] lg:top-[80%] lg:bottom-0 left-1/2 lg:left-7 transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0  w-full lg:w-fit  flex flex-col items-center lg:items-start gap-2 md:gap-4">
        <p className="text-white font-bold text-xl md:text-2xl">
          Simple & Decidedly Mordern
        </p>

        <Button title="SHOP NOW" />
      </div>

      {/* timer */}
      <div className="absolute top-[70%] lg:bottom-0 lg:top-[75%]  left-1/2 lg:left-[55%] transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0  w-full lg:w-fit  flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="text-white py-2 md:py-8 px-4 md:px-8 bg-[#2d2c2ca4] flex flex-col items-center rounded-xl text-sm">
            <p className="md:text-3xl md:font-bold">0</p>
            <p className="md:font-bold">Days</p>
          </div>

          <div className="text-white py-2 md:py-8 px-4 md:px-8 bg-[#2d2c2ca4] flex flex-col items-center rounded-xl text-sm">
            <p className="md:text-3xl md:font-bold">0</p>
            <p className="md:font-bold">hours</p>
          </div>

          <div className="text-white py-2 md:py-7 px-4 md:px-7 bg-[#2d2c2ca4] flex flex-col items-center rounded-xl text-sm">
            <p className="md:text-3xl md:font-bold">0</p>
            <p className="md:font-bold">minutes</p>
          </div>

          <div className="text-white py-2 md:py-7 px-4 md:px-7 bg-[#2d2c2ca4] flex flex-col items-center rounded-xl text-sm">
            <p className="md:text-3xl md:font-bold">0</p>
            <p className="md:font-bold">second</p>
          </div>
        </div>
      </div>
    </div>
  );
}
