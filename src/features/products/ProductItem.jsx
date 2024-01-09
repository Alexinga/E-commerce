import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFav } from "../favorites/favoriteSlice";

function ProductItem({ dataItem, wishItem }) {
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  console.log(dataItem);
  const productImg = dataItem?.attributes?.img?.data[0]?.attributes?.url;
  const productImgAlt = dataItem?.attributes?.img?.data[0]?.attributes?.name;
  const wishListImg = wishItem?.img?.data[0]?.attributes?.url;
  // const cloudinaryURL = "https://res.cloudinary.com/dwuspgeuq/image";
  const imgSrc = `${productImg}`;
  const wishListSrc = `${wishListImg}`;
  // const imgSrc = `${backendURL}${productImg}`;
  // const wishListSrc = `${backendURL}${wishListImg}`;
  const wishListImgAlt = wishItem?.title;
  const dispatch = useDispatch();
  function deleteWishlistItem() {
    dispatch(deleteFav(wishItem.id));
  }

  return (
    <li>
      <Link to={`/product/${wishItem ? wishItem.id : dataItem?.id}`}>
        <div className="overflow-hidden">
          <img
            className="bg-stone-100 transition-all hover:scale-125"
            src={wishItem ? `${wishListSrc}` : `${imgSrc}`}
            alt={productImgAlt || wishListImgAlt}
          ></img>
        </div>
      </Link>
      <h4 className="text-sm md:text-lg">
        {dataItem?.attributes?.title || wishItem?.title}
      </h4>
      <div className="flex items-center gap-4">
        <p className="text-sm md:text-lg font-semibold">
          ${dataItem?.attributes?.price || wishItem?.price}
        </p>
        {wishItem && (
          <span
            onClick={deleteWishlistItem}
            className="bg-stone-800 text-white px-[10px] py-0 rounded-full cursor-pointer"
          >
            &times;
          </span>
        )}
      </div>
    </li>
  );
}

export default ProductItem;
