import { footerHelpLinks, navLinks } from "../utils/constant";

export const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-11/12 m-auto grid grid-cols-1 lg:grid-cols-2 p-12 gap-20">
        <div className="flex w-full flex-col md:flex-row gap-20 items-center justify-between">
          <div className="flex w-full flex-col gap-10 self-start items-center justify-center md:justify-start">
            <h2 className="font-bold text-3xl md:self-start">Furniro.</h2>
            <div className="md:self-start">
              <p>400 University Drive Suite 200 Coral Gables</p>
              <p>FL 33134 USA</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-10 self-start items-center justify-center md:justify-start">
            <div className="font-semibold text-gray-400 text-xl md:self-start">
              Links
            </div>
            <ul className="flex md:items-start items-center justify-center flex-col gap-5 md:self-start">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="font-semibold cursor-pointer w-fit"
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-20 items-start justify-between">
          <div className="flex w-full flex-col gap-10 self-start items-center justify-center md:justify-start">
            <div className="font-semibold text-gray-400 text-xl md:self-start">
              Help
            </div>
            <ul className="flex w-full flex-col items-center md:items-start justify-center md:self-start gap-5">
              {footerHelpLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="font-semibold cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
          <div className="flex w-full flex-col gap-10 self-start items-center justify-center md:justify-start">
            <div className="font-semibold w-full text-center text-gray-400 text-xl md:text-start">
              Newsleters
            </div>
            <div className="flex w-full items-center justify-center md:justify-start gap-5">
              <input
                type="email"
                className="outline-none border-b-[1px] border-black text-sm min-w-50 bg-white"
                placeholder="Enter Your Email Address"
              />
              <button className="uppercase font-semibold border-b-[1px] border-black text-sm hover:text-white hover:bg-blue-400 px-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 px-10 m-auto">
        <hr />
        <div className="py-10 w-full text-black">
          2023 furniro. All rights reverved
        </div>
      </div>
    </div>
  );
};
