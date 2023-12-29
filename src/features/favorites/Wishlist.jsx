import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../products/BackBtn";
import { clearFav, getFavorite } from "./favoriteSlice";
import ProductItem from "../products/ProductItem";
function Wishlist() {
  const favoriteData = useSelector(getFavorite);
  const favoriteDataLength = favoriteData.length;
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearFav());
  }
  return (
    <>
      <div className="flex items-center gap-2">
        <BackBtn />
        {favoriteDataLength ? (
          <button
            onClick={handleClear}
            className="border-2 px-4 py-2 mx-4 rounded-full my-3"
          >
            Clear All
          </button>
        ) : null}
      </div>
      <div className="px-4 pb-8">
        <h2 className="text-sm md:text-lg font-semibold pb-4">
          Your Wishlist Collection,
        </h2>
        {favoriteDataLength ? (
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteData?.map((item) => (
              <ProductItem wishItem={item} key={item.title} />
            ))}
          </ul>
        ) : (
          <h2 className="text-sm font-semibold md:text-2xl md:mt-0 mt-8 mb-4 border-b-2 border-stone-300 inline-block">
            Your Wish List from {`Kiwi's`} Selections is empty
          </h2>
        )}
      </div>
    </>
  );
}

export default Wishlist;
