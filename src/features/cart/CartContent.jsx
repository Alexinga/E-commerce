import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function CartContent({ item }) {
  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const cartImg = item.img.data[0].attributes.url;
  const cloudinaryURL = "https://res.cloudinary.com/dwuspgeuq/image";
  const cartSrc = `${cloudinaryURL}${cartImg}`;
  // const cartSrc = `${backendURL}${cartImg}`;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(item.id));
  function handleDeleteItem() {
    dispatch(deleteItem(item.id));
  }
  return (
    <li className="flex items-center gap-4 mt-4 mb-4">
      <img className="bg-stone-100 w-20" src={cartSrc} alt={item.title}></img>
      <div>
        <div className="flex items-center gap-2">
          <h6 className="text-xs">{item.title}</h6>
          <span className="cursor-pointer" onClick={handleDeleteItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">{item.quantity}x</span>
          <p className="text-sm">{item.price}</p>
        </div>
        <div className="space-x-3 mt-2">
          <button
            onClick={() => dispatch(increaseItemQuantity(item.id))}
            className="bg-black text-white px-4 rounded-full"
          >
            +
          </button>
          <span>{currentQuantity}</span>
          <button
            onClick={() => dispatch(decreaseItemQuantity(item.id))}
            className="bg-black text-white px-4 rounded-full"
          >
            -
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartContent;
