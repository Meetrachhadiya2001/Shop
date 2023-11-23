import { BiChevronRight } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import "../style/Banner.scss";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <>
      <motion.div
        className="banner-bg"
        initial={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col items-center justify-center gap-3 cursor-pointer">
          <h4 className="font-semibold text-5xl">Shop</h4>
          <div className="flex items-center justify-center text-lg ">
            <p className="font-semibold">Home</p>
            <BiChevronRight className="text-3xl " />
            <p>Shop</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full p-6 bg-red-50">
        <div className="w-11/12 m-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4">
          <div className="flex items-center justify-center flex-wrap gap-2">
            <div className="flex items-center justify-center gap-2 text-2xl font-semibold mr-6">
              <VscSettings className="rotate-90" />
              <div>Filter</div>
            </div>
            <PiCirclesFourFill className="icon text-2xl mr-6" />
            <BsViewList className="icon text-2xl mr-6" />
            <div className="h-10 w-[2px] bg-gray-300" />
            <div className="text-sm md:text-base pl-6 font-semibold">
              Showing 1-16 of 32 results
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-6">
            <div className="flex items-center justify-center gap-2 text-xl">
              <div>Show</div>
              <input
                className="w-14 py-1 px-4 rounded outline-blue-200"
                type="text"
                hover:animate-pulse
                placeholder="16"
              />
            </div>
            <div className="flex items-center justify-center gap-2 text-xl">
              <div>Short By</div>
              <input
                className="w-36 py-1 px-4 rounded outline-blue-200"
                type="text"
                placeholder="Default"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
