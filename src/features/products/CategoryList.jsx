import ProductItem from "./ProductItem";
function CategoryList({ categoryData }) {
  const dataInObject = categoryData.attributes;
  const categoryProducts = categoryData.attributes?.products?.data;
  return (
    <div>
      {dataInObject ? (
        <>
          <h2 className="text-sm font-semibold md:text-2xl md:mt-0 mt-8 mb-4 border-b-2 border-stone-300 inline-block">
            {categoryData?.attributes?.title}
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categoryProducts?.map((item) => (
              <ProductItem dataItem={item} key={item.id} />
            ))}
          </ul>
        </>
      ) : (
        <div className="flex items-center justify-evenly flex-col md:flex-row">
          <h2 className="text-sm font-semibold md:text-2xl md:mt-0 mt-8 mb-4 border-b-2 border-stone-300 inline-block">
            Please select a category to see {`Kiwi's`} Selections
          </h2>
          <img className="w-1/4" src="/images/banner-img.png" alt="img"></img>
        </div>
      )}
    </div>
  );
}

export default CategoryList;
