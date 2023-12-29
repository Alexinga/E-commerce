import { useLoaderData } from "react-router-dom";
import { getStoreAPI } from "../../services/storeAPI";
import ProductItem from "./ProductItem";
function ProductList() {
  const productData = useLoaderData();
  return (
    <>
      <h2 className="text-sm font-semibold md:text-2xl md:mt-0 mt-8 mb-4 border-b-2 border-stone-300 inline-block">
        Hottest Trends
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {productData?.map((item) => (
          <ProductItem dataItem={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
export async function loader() {
  const productData = await getStoreAPI("products");
  return productData;
}

export default ProductList;
