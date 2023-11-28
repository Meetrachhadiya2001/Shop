import { motion } from "framer-motion";
import { featureList } from "../utils/constant";
import "../style/Features.scss";

export const Features = () => {
  return (
    <>
      <div className="w-full p-10 bg-[#FAF3EA]">
        <div className="w-11/12 m-auto flex items-center justify-between flex-wrap gap-y-8">
          {featureList.map(({ Icon, description, name }) => (
            <motion.div
              key={name + description}
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Icon className="text-5xl" />
              <div className="flex flex-col items-start justify-center lg:text-xl ">
                <div className="font-semibold lg:font-bold">{name}</div>
                <div className="text-[#898989] font-medium">{description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
