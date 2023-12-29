import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductList from "../features/products/ProductList";
import { useEffect } from "react";
function Home() {
  const images = [
    "/images/slide-2.jpg",
    "/images/slide-1.jpg",
    "/images/slide-3.jpg",
  ];
  const buttonStyle = {
    margin: "10px",
    width: "18px",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/*This is the hero section of the homepage*/}
      <section id="hero" className="mx-4">
        <Slide {...properties} canSwipe={true}>
          <div className="each-slide-effect">
            <div className="absolute bg-black inset-0 z-10 opacity-10"></div>
            <div
              className="slider"
              style={{ backgroundImage: `url(${images[0]})` }}
            >
              <span className="text-white font-semibold z-20 text-xs md:text-[3rem]">
                Hello, Welcome To Kiwi
              </span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="slider"
              style={{ backgroundImage: `url(${images[1]})` }}
            >
              <span className="text-white font-semibold z-20 text-xs md:text-[3rem]">
                “Best shop – find it all here!”
              </span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="slider"
              style={{ backgroundImage: `url(${images[2]})` }}
            >
              <span className="text-white font-semibold z-20 text-xs md:text-[3rem]">
                “Order – within seconds!”
              </span>
            </div>
          </div>
        </Slide>
      </section>
      {/*This is the product display section of homepage*/}
      <section id="product">
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 py-3 gap-4 mt-4 mb-4">
          <div className="overflow-hidden">
            <img
              className="transition-all hover:scale-125"
              src="/images/cat-1.jpg"
              alt="headphones"
            ></img>
          </div>
          <div className="overflow-hidden">
            <img
              className="transition-all hover:scale-125"
              src="/images/cat-2.jpg"
              alt="bluetooth speakers"
            ></img>
          </div>
          <div className="overflow-hidden">
            <img
              className="transition-all hover:scale-125"
              src="/images/cat-3.jpg"
              alt="smart watches"
            ></img>
          </div>
          <div className="overflow-hidden">
            <img
              className="transition-all hover:scale-125"
              src="/images/cat-4.jpg"
              alt="wireless earbuds"
            ></img>
          </div>
        </div>
        <div className="px-4 py-3">
          <ProductList />
        </div>
      </section>
      {/*This is the Newsletter section of homepage*/}
      <section id="newsletter">
        <div className="mx-4 my-8 h-96 bg-[url('/images/newsletter-bg.jpeg')] flex items-center justify-center flex-col space-y-4">
          <h4 className="text-sm md:text-lg bg-black text-white px-3 py-1 rounded-full">
            NEWSLETTER
          </h4>
          <h2 className="text-lg md:text-3xl text-center">
            SIGN UP FOR LATEST UPDATES AND OFFERS
          </h2>
          <div className="space-x-4 text-center">
            <input
              className="p-1 mb-2 border-2 border-gray-400 rounded-full"
              placeholder="Email Address"
            ></input>
            <button className="bg-black text-white px-4 py-1 rounded-full">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-center">
            Will be used in accordance with our Privacy Policy
          </p>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
