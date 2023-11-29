import { BiHeart, BiSolidShareAlt } from "react-icons/bi";
import { Buttons, ProductCards } from "../utils/constant";
import { LuArrowRightLeft } from "react-icons/lu";
import { motion } from "framer-motion";

import "../style/ProductCards.scss";

export const ProductCardList = () => {
  return (
    <div className="w-full my-10">
      <div className="flex flex-row lg:gap-y-14 gap-y-8 gap-x-10 flex-wrap justify-around mx-10">
        {ProductCards.map((item) => {
          const { id, img, name, desciption, price, isNew } = item;
          const hasDiscount = price.discountPercent !== undefined;

          return (
            <motion.div
              id="product-cards"
              key={id}
              className="relative h-[446px] w-[285px] bg-[#F4F5F7] cursor-pointer group overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {hasDiscount && (
                <div className="discount-tag">
                  {`-${price.discountPercent}%`}
                </div>
              )}
              {isNew && <div className="new-tag">New</div>}
              <img src={img} alt={name} className="h-[300px]" />
              <div className="p-2 flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-[#898989] text-base font-medium">
                  {desciption}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium">Rp. {price.amount}</p>
                  <p className="text-base font-normal text-[#B0B0B0] line-through mr-3">
                    {price.discountPrice}
                  </p>
                </div>
              </div>
              <div className="card-hover">
                <motion.button
                  whileTap={{ scale: 0.7 }}
                  className="add-to-cart-btn"
                >
                  Add To Cart
                </motion.button>
                <div className="flex gap-3 font-semibold text-white">
                  <div className="flex items-center gap-[1px] hover:text-green-400">
                    <BiSolidShareAlt />
                    <div>Share</div>
                  </div>
                  <div className="flex items-center gap-[1px] hover:text-blue-400">
                    <LuArrowRightLeft />
                    <div>Compare</div>
                  </div>
                  <div className="flex items-center gap-[1px] hover:text-red-400">
                    <BiHeart />
                    <div>Like</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center my-12 lg:gap-7 gap-5">
        {Buttons.map((button) => (
          <motion.div
            key={button.name}
            className="pagination-btn"
            whileTap={{ scale: 0.7 }}
          >
            {button.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
