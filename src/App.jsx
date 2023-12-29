import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import ErrorMessage from "./ui/ErrorMessage";
import Shop from "./features/products/Shop";
import Wishlist from "./features/favorites/Wishlist";
import ProductDetails from "./features/products/ProductDetails";
import { loader as ProductLoader } from "./features/products/ProductList";
import { loader as SelectedItemLoader } from "./features/products/ProductDetailsContent";
import { loader as CategoryLoader } from "./features/products/Category";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ProductLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: CategoryLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/product/:selectId",
        element: <ProductDetails />,
        loader: SelectedItemLoader,
        errorElement: <ErrorMessage />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      {
        path: "/favorite",
        element: <Wishlist />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
