import ProductDetailsContent from "./ProductDetailsContent";
import BackBtn from "./BackBtn";
function ProductDetails() {
  return (
    <>
      <BackBtn />
      <div className="px-4 py-3 flex gap-4 flex-wrap pb-12 md:flex-nowrap">
        <ProductDetailsContent />
      </div>
    </>
  );
}

export default ProductDetails;
