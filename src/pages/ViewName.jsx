import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  BsArrowRight,
  BsCheck2Circle,
  BsCamera,
  BsGlobe,
  BsTag,
} from "react-icons/bs";

import OtherInfo from "../components/OtherInfo";

const keywords = [
  "Cannabis",
  "Cosmic",
  "Marijuana",
  "Media",
  "Mix",
  "Music",
  "Production",
  "Recording",
  "Streaming",
  "Weed",
];

const ViewName = () => {
  const { name } = useParams();
  const { nameData } = useSelector((store) => store.app);

  return (
    <main className="grid grid-cols-1 xl:grid-cols-5 px-5 md:px-20 font-montserrat text-slate-600">
      <main className="col-span-2 h-auto xl:h-[calc(100vh-51.2px)] flex items-center static xl:sticky top-[51.2px] mt-10 xl:mt-0">
        <section className="w-full mr-0 xl:mr-10 space-y-10 border border-fuchsia-100 px-5 md:px-10 py-5 rounded-lg bg-fuchsia-50">
          <div className="text-sm">
            <p>The domain name</p>
            <p>
              <span className="text-lg text-fuchsia-500">
                {nameData.domain}
              </span>{" "}
              is for sale
            </p>
          </div>
          <div className="flex flex-col space-y-2.5">
            <button className="bg-fuchsia-100 flex items-center justify-between px-5 py-2.5 rounded-md">
              <span>Buy now</span>
              <span className="text-sm">{nameData.price}</span>
            </button>
            <button className="flex items-center justify-center bg-blue-500 text-white py-2.5 rounded-md">
              <span>Continue to checkout</span>
              <BsArrowRight className="ml-2.5" />
            </button>
            <button className="flex items-center justify-center bg-slate-900 text-white py-2.5 rounded-md">
              <span>Inquire</span>
              <BsArrowRight className="ml-2.5" />
            </button>
          </div>
          <div className="space-y-2.5">
            <p>What you get?</p>
            <p className="flex items-center">
              <BsCheck2Circle className="text-fuchsia-500" />
              <span className="text-xs md:text-sm ml-2.5">
                Professionally crafted logo design
              </span>
            </p>
            <p className="flex items-center">
              <BsCheck2Circle className="text-fuchsia-500" />
              <span className="text-xs md:text-sm ml-2.5">
                Expert curated premium domain name
              </span>
            </p>
            <p className="flex items-center">
              <BsCheck2Circle className="text-fuchsia-500" />
              <span className="text-xs md:text-sm ml-2.5">
                Guaranteed transfer or your money back
              </span>
            </p>
          </div>
        </section>
      </main>

      <main className="col-span-3">
        <main className="ml-0 xl:ml-10 my-10 space-y-[30px]">
          <section className="space-y-2.5">
            <div
              style={{
                backgroundImage: `url(${nameData.img})`,
              }}
              className="w-full h-[calc(50vh-51.2px)] bg-fuchsia-50 bg-[length:200px_100px] md:bg-[length:300px_150px] bg-center bg-no-repeat rounded-lg overflow-hidden border border-fuchsia-100"
            ></div>
            <p className="text-sm">
              <span className="text-fuchsia-500 text-base">{name}</span> - A
              groovy name with an outerwordly vibe. Possible uses: A music shop.
              A recording studio. A streaming platform. A cannabis products
              brand.
            </p>
          </section>
          <section className="space-y-2.5">
            <p className="flex items-center space-x-2.5">
              <BsCamera />
              <span>Styles</span>
            </p>
            <p className="text-sm">Claver names</p>
          </section>
          <section className="space-y-2.5">
            <p className="flex items-center space-x-2.5">
              <BsGlobe />
              <span>Industries</span>
            </p>
            <p className="text-sm">Cannabis names</p>
            <p className="text-sm">Music names</p>
          </section>
          <section>
            <p className="flex items-center space-x-2.5">
              <BsTag />
              <span>Keywords</span>
            </p>
            <div className="text-sm flex flex-wrap">
              {keywords.map((i, j) => (
                <span
                  key={j}
                  className="px-2.5 pt-1 pb-[5px] mr-2.5 mt-2.5 rounded-md bg-fuchsia-50 border border-fuchsia-100"
                >
                  {i}
                </span>
              ))}
            </div>
          </section>
          <OtherInfo />
        </main>
      </main>
    </main>
  );
};

export default ViewName;
