import { getSelectedProductAPI } from "../../services/storeAPI";
import { useLoaderData, useParams } from "react-router-dom";
import { addFav, deleteFav, getFavorite } from "../favorites/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../cart/cartSlice";
import { useMemo } from "react";
function ProductDetailsContent() {
  const selectedID = useLoaderData();
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const selectImg = selectedID.img.data[0].attributes.url;
  const selectImgAlt = selectedID.img.data[0].attributes.name;
  // const cloudinaryURL = "https://res.cloudinary.com/dwuspgeuq/image";
  // const selectSrc = `${backendURL}${selectImg}`;
  const selectSrc = `${selectImg}`;
  const dispatch = useDispatch();
  const urlId = parseInt(useParams().selectId);
  const wishList = useSelector(getFavorite);
  const wishListDuplicate = useMemo(
    () => wishList.map((item) => item.id).includes(urlId),
    [wishList, urlId]
  );
  // const cart = useSelector(getCart);
  const currentQuantity = useSelector(getCurrentQuantityById(urlId));
  const cartLength = currentQuantity > 0;
  // console.log(wishListDuplicate)
  // console.log(selectedID);
  // console.log(urlId);
  function handleFavorite() {
    const newItem = {
      title: selectedID.title,
      img: selectedID.img,
      price: selectedID.price,
      desc: selectedID.desc,
      quantity: selectedID.quantity,
      id: urlId,
    };
    // dispatch(addFav(selectedID));
    dispatch(addFav(newItem));
  }
  function handleAddItem() {
    const newItem = {
      title: selectedID.title,
      img: selectedID.img,
      price: selectedID.price,
      quantity: 1,
      id: urlId,
      totalPrice: selectedID.price * 1,
    };
    dispatch(addItem(newItem));
  }
  function handleDeleteItem() {
    dispatch(deleteItem(urlId));
  }
  function handleDeleteFav() {
    dispatch(deleteFav(urlId));
  }
  return (
    <>
      <img
        className="bg-stone-100 object-contain md:w-1/4 m-auto md:m-0"
        src={selectSrc}
        alt={selectImgAlt}
      ></img>
      <div>
        <h2 className="text-sm md:text-lg font-semibold pb-2">
          {selectedID.title}
        </h2>
        <p className="text-sm font-semibold md:text-lg pb-2">
          ${selectedID.price}
        </p>
        <div className="flex items-center gap-4 mt-2 pb-2 flex-row max-[458px]:flex-col">
          {cartLength ? (
            <div className="space-x-3">
              <button
                onClick={() => dispatch(increaseItemQuantity(urlId))}
                className="bg-black text-white md:px-3 px-3 rounded-full"
              >
                +
              </button>
              <span>{currentQuantity}</span>
              <button
                onClick={() => dispatch(decreaseItemQuantity(urlId))}
                className="bg-black text-white md:px-3 px-3 rounded-full"
              >
                -
              </button>
              <button
                onClick={handleDeleteItem}
                className="bg-black text-white md:px-4 px-2 py-1 rounded-full"
              >
                Delete
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddItem}
              className="bg-black text-white md:px-4 px-2 py-1 rounded-full"
            >
              Add to Cart
            </button>
          )}
          {wishListDuplicate ? (
            <button
              onClick={handleDeleteFav}
              className="bg-black text-white md:px-4 px-2 py-1 rounded-full"
            >
              Delete from Wishlist
            </button>
          ) : (
            <button
              onClick={handleFavorite}
              className="bg-black text-white md:px-4 px-2 py-1 rounded-full"
            >
              Add to Wishlist
            </button>
          )}
        </div>
        <p className="pb-2">{selectedID.desc}</p>
        <p className="text-sm md:text-lg pb-2 flex items-center gap-2">
          <span className="text-sm font-semibold md:text-lg">Category:</span>
          {selectedID?.categories?.data[0]?.attributes?.title}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm font-semibold md:text-lg">Share:</p>
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
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="15.5"
            viewBox="0 0 496 512"
          >
            <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const selectedID = getSelectedProductAPI(params.selectId);
  return selectedID;
}

export default ProductDetailsContent;
