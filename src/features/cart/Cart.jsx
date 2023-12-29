import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import CartContent from "./CartContent";
import { loadStripe } from "@stripe/stripe-js";

function Cart({ handleOpenModal }) {
  const cartData = useSelector(getCart);
  const dispatch = useDispatch();
  const cartLength = cartData.length;
  const cartPrice = useSelector(getTotalCartPrice);
  const cartQuantity = useSelector(getTotalCartQuantity);
  const roundCartPrice = cartPrice.toFixed(2);
  const stripePromise = loadStripe(
    `pk_test_51OS4sPC0o7xE4DRsNOYSiG5hTJuZcBd2T1ogZONbD9z2G6Xv0fXrgrKDWBwKg5jWEe4GmNNGrDXGaoZrYcEHf8mb00kxXE5VnN`
  );
  const reactStrapiKey = import.meta.env.VITE_REACT_APP_STRAPI_APP_KEY;
  const modifyStrapiKey = `bearer ${reactStrapiKey}`;

  function handleClearCart() {
    dispatch(clearCart());
  }
  async function handlePayment() {
    try {
      const stripe = await stripePromise;
      const requestBody = {
        products: cartData,
      };
      const res = await fetch(`http://localhost:1337/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: modifyStrapiKey,
        },
        body: JSON.stringify(requestBody),
      });
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      const session = await res.json();
      await stripe.redirectToCheckout({
        sessionId: session.stripeSession.id,
      });
    } catch (err) {
      console.error(`Error during fetch operation: `, err);
    }
  }
  return (
    <div className="absolute top-0 right-0 px-4 bg-white h-full lg:w-1/4 w-full z-30 shadow-2xl pt-16 md:overflow-auto md:pt-4">
      <div className="flex justify-between items-center border-b-2 border-stone-200">
        <h2>SHOPPING CART</h2>
        <span className="cursor-pointer" onClick={handleOpenModal}>
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
      {cartLength ? (
        <ul>
          {cartData?.map((item) => (
            <CartContent item={item} key={item.title} />
          ))}
        </ul>
      ) : (
        <p className="text-sm md:text-lg py-8">Your Cart is Empty</p>
      )}
      <div className="mb-4">
        <p>
          Total: ${roundCartPrice} - {cartQuantity}x
        </p>
      </div>
      {cartLength ? (
        <div className="space-x-4 lg:flex lg:flex-col lg:gap-4">
          <button
            onClick={handlePayment}
            className="bg-black text-white px-4 rounded-full"
          >
            Place Order
          </button>
          <button
            onClick={handleClearCart}
            className="bg-black text-white px-4 rounded-full"
          >
            Clear All
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
