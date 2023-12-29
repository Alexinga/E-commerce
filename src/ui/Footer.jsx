function Footer() {
  return (
    <div className="py-3 grid grid-cols-1 grid-rows-1 border-t-2 border-stone-200 mx-4 md:justify-items-center md:grid-cols-4">
      <div className="space-y-2">
        <h2 className="text-sm font-bold md:text-lg">About</h2>
        <p className="text-sm md:text-lg pb-3 md:pb-0">
          Lorem ipsum dolor, sit amet consectetur elit. Tempora aspernatur hic,
          veniam unde odio eligendi.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-bold md:text-lg">Contact</h2>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
          <p className="text-sm md:text-lg">1234 Philadelphia, PA, 19380</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <p className="text-sm md:text-lg">(484)-123-4567</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <p className="text-sm md:text-lg">example@gmail.com</p>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-bold md:text-lg pt-3 md:pt-0">
          Categories
        </h2>
        <ul className="space-y-2">
          <li className="text-sm md:text-lg">Headphones</li>
          <li className="text-sm md:text-lg">Smart Watches</li>
          <li className="text-sm md:text-lg">Bluetooth Speakers</li>
          <li className="text-sm md:text-lg">Wireless Earbuds</li>
          <li className="text-sm md:text-lg">Home Theatre</li>
          <li className="text-sm md:text-lg pb-3 md:pb-0">Protectors</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-bold md:text-lg">Pages</h2>
        <ul className="space-y-2">
          <li className="text-sm md:text-lg">Home</li>
          <li className="text-sm md:text-lg">About</li>
          <li className="text-sm md:text-lg">Privacy Policy</li>
          <li className="text-sm md:text-lg">Returns</li>
          <li className="text-sm md:text-lg">Terms & Conditions</li>
          <li className="text-sm md:text-lg">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
