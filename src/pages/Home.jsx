import { GiReceiveMoney, GiPriceTag, GiSparkles } from "react-icons/gi";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Banner />

      <section className="font-montserrat flex flex-col justify-center items-center mt-20">
        <div className="text-center mb-5">
          <h1 className="text-slate-600 mb-1 text-xl">
            You're in good company
          </h1>
          <p className="text-slate-500 mx-5 md:mx-0 leading-tight text-sm md:text-base">
            A few of the thousands of business names incubated at brandbucket
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-fit gap-x-10 gap-y-5">
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-sketch.png)] bg-cover bg-center w-40 h-20"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-everyplate.png)] bg-cover bg-center w-40 h-20"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-lashify.png)] bg-cover bg-center w-40 h-20"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-zety.png)] bg-cover bg-center w-40 h-20"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-desk.png)] bg-cover bg-center w-40 h-20"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-crunchlabs.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-envato.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-credly.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-mattermark.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-ario.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-redbooth.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-ryver.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-setster.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-vitacup.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-wazala.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-zylo.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-zee.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-nira.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-habu.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
          <div className="bg-[url(https://www.brandbucket.com/images5/gc/logo-gamemaker.png)] bg-cover bg-center w-40 h-20 hidden md:block"></div>
        </section>
      </section>

      <section className="px-5 lg:px-20 my-20 font-montserrat">
        <div className="text-center mb-5">
          <h1 className="text-slate-600 mb-1 text-xl">Did you know?</h1>
          <p className="text-slate-500 mx-5 md:mx-0 leading-tight block lg:flex lg:flex-col text-sm md:text-base">
            <span>
              Your purchase includes full rights to the domain name, transferred
              to you at a registrar of your choice.
            </span>
            <span>
              There are no recurring fees. You may also have and use the sample
              logo shown with the name.
            </span>
          </p>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section className="relative group shadow bg-white hover:bg-slate-50 duration-300 rounded-lg p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-fuchsia-500 bg-fuchsia-50 w-fit">
              <GiPriceTag className="text-3xl text-fuchsia-500 group-hover:animate-spin" />
            </div>
            <p className="text-slate-600">Transfer guaranteed</p>
            <p className="text-xs md:text-sm text-slate-500">
              Our escrow service walks you through the domain transfer, which is
              typically complete within 2-5 business days. If for any reason the
              name transfer fails, we will fully refund your purchase.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-fuchsia-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
          <section className="relative group shadow bg-white hover:bg-slate-50 duration-300 rounded-lg p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-fuchsia-500 bg-fuchsia-50 w-fit">
              <GiPriceTag className="text-3xl text-fuchsia-500 group-hover:animate-spin" />
            </div>
            <p className="text-slate-600">Upfront pricing</p>
            <p className="text-xs md:text-sm text-slate-500">
              We save you the time and uncertainty of negotiation. The cost of
              each name is determined based on its quality score, general
              applicability and popularity.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-fuchsia-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
          <section className="relative group shadow bg-white hover:bg-slate-50 duration-300 rounded-lg p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-fuchsia-500 bg-fuchsia-50 w-fit">
              <GiPriceTag className="text-3xl text-fuchsia-500 group-hover:animate-spin" />
            </div>
            <p className="text-slate-600">Only the best business names</p>
            <p className="text-xs md:text-sm text-slate-500">
              Our selection of brand names is hand-picked by a team of business
              and linguistic experts. Names are submitted by owners worldwide,
              and we accept fewer than 10% for our collection.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-fuchsia-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
          <section className="relative group shadow bg-white hover:bg-slate-50 duration-300 rounded-lg p-5 space-y-2.5 overflow-hidden cursor-default">
            <div className="p-2.5 rounded-full border border-fuchsia-500 bg-fuchsia-50 w-fit">
              <GiPriceTag className="text-3xl text-fuchsia-500 group-hover:animate-spin" />
            </div>
            <p className="text-slate-600">Lease-to-own plans Available</p>
            <p className="text-xs md:text-sm text-slate-500">
              If you're not quite ready to purchase a name outright, we offer
              lease-to-own plans that give you flexibility to use the name now
              and pay it off over time.
            </p>
            <div className="absolute w-32 group-hover:w-36 h-32 group-hover:h-36 rounded-full bg-fuchsia-100 -top-[calc(10px+60px)] -right-[60px] duration-500"></div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
