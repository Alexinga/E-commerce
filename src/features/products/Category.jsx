import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreAPI, getSelectedCategoryAPI } from "../../services/storeAPI";
import CategoryList from "./CategoryList";
// import useFetch from "../../services/useFetch";

function Category() {
  const [isOpen, setIsOpen] = useState(true);
  // const [isRangeActive, setRangeActive] = useState(false);
  // const [isSortActive, setSortActive] = useState(false);
  const [selectCategory, setSelectCategory] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  // const [categoryDataId, setCategoryDataId] = useState(1);
  // const [maxPrice, setMaxPrice] = useState(129.99);
  // const [sort, setSort] = useState(null);
  function activateDropdown() {
    setIsOpen(!isOpen);
  }
  // function activateRange() {
  //   setRangeActive(!isRangeActive);
  // }
  // function activateSort() {
  //   setSortActive(!isSortActive);
  // }
  const categoryRadioBtn = useLoaderData();
  // const { data, isLoading, err } = useFetch(`/api/products&sort=price:asc`);
  // console.log(data);
  // console.log(categoryData);
  // console.log(categoryDataId);
  const handleChange = useCallback(
    async (e) => {
      const value = e.target.value;
      const isChecked = e.target.checked;
      setSelectCategory(
        isChecked
          ? [...selectCategory, value]
          : selectCategory.filter((item) => item !== value)
      );
      if (isChecked) {
        const response = await getSelectedCategoryAPI(value);
        const categoryData = response.data;
        // const categoryDataId = categoryData.id;
        setCategoryData(categoryData);
        // setCategoryDataId(categoryDataId);
      }
    },
    [selectCategory]
  );
  // async function handleChange(e) {
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;
  //   setSelectCategory(
  //     isChecked
  //       ? [...selectCategory, value]
  //       : selectCategory.filter((item) => item !== value)
  //   );
  //   if (isChecked) {
  //     const response = await getSelectedCategoryAPI(value);
  //     const categoryData = response.data;
  //     // const categoryDataId = categoryData.id;
  //     setCategoryData(categoryData);
  //     // setCategoryDataId(categoryDataId);
  //   }
  // }
  return (
    <>
      <aside className="md:w-1/4 w-full md:border-r-2 border-stone-400 pr-4">
        <div className="flex items-center gap-3 border-b-2 border-stone-400 pb-3">
          <h2 className="text-sm font-semibold sm:text-[14px] ">
            Product Category
          </h2>
          <span className="cursor-pointer" onClick={activateDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
            >
              <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
            </svg>
          </span>
        </div>
        {isOpen && (
          <div className="pb-3 grid grid-cols-2 md:grid-cols-none">
            {categoryRadioBtn?.map((item) => (
              <div className="space-x-2" key={item.id}>
                <label className="text-xs">{item.attributes.title}</label>
                <input
                  type="radio"
                  id={item.id}
                  value={item.id}
                  name="category"
                  onChange={handleChange}
                ></input>
              </div>
            ))}
          </div>
        )}
        {/* <div className="border-b-2 border-stone-400 pb-3 pt-3 max-md:flex max-md:items-center max-md:gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold sm:text-[14px] ">
              Filter By Price
            </h2>
            <span className="cursor-pointer" onClick={activateRange}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                viewBox="0 0 320 512"
              >
                <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </svg>
            </span>
          </div>
          {isRangeActive && (
            <div className="flex items-center gap-2">
              <span className="text-xs">0</span>
              <input
                className="md:w-1/2"
                type="range"
                min={0}
                max={129}
                onChange={(e) => setMaxPrice(e.target.value)}
              ></input>
              <span className="text-xs">{maxPrice}</span>
            </div>
          )}
        </div>
        <div className="pt-3 max-md:flex max-md:items-center max-md:gap-4 border-b-2 border-stone-400 pb-3">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold sm:text-[14px] ">Sort By</h2>
            <span className="cursor-pointer" onClick={activateSort}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                viewBox="0 0 320 512"
              >
                <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </svg>
            </span>
          </div>
          {isSortActive && (
            <>
              <div className="space-x-2">
                <label className="text-xs">Price (Low First)</label>
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={(e) => setSort("asc")}
                ></input>
              </div>
              <div className="space-x-2">
                <label className="text-xs">Price (High First)</label>
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={(e) => setSort("desc")}
                ></input>
              </div>
            </>
          )}
        </div> */}
      </aside>
      <div className="md:pl-4">
        <CategoryList categoryData={categoryData} />
      </div>
    </>
  );
}

export async function loader() {
  const categoryData = await getStoreAPI("categories");
  return categoryData;
}

export default Category;
