const reactStrapiKey = import.meta.env.VITE_REACT_APP_STRAPI_APP_KEY;
const modifyStrapiKey = `bearer ${reactStrapiKey}`;
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const params = {
  headers: {
    Authorization: modifyStrapiKey,
  },
};

export async function getStoreAPI(url) {
  try {
    const res = await fetch(`${backendURL}/api/${url}?populate=*`, params);
    // console.log(res);
    if (!res.ok)
      throw new Error(`Network Response was not good: ${res.status}`);
    const data = await res.json();
    // console.log(data);
    const productData = data.data;
    // console.log(productData);
    return productData;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getSelectedProductAPI(id) {
  try {
    const res = await fetch(
      `${backendURL}/api/products?populate=*&[filters][id]=${id}`,
      params
    );
    const data = await res.json();
    // const selectedData = data.data[0];
    const selectedData = data.data[0].attributes;
    // console.log(selectedData);
    return selectedData;
  } catch (error) {
    console.log(error.message);
  }
}

// export async function getCategoryAPI() {
//   try {
//     const res = await fetch(`${backendURL}/api/categories?populate=*`, params);
//     // const res = await fetch(
//     //   `${backendURL}/api/categories/${categoryId}?populate=*`,
//     //   params
//     // );
//     const data = await res.json();
//     // console.log(data);
//     const categoryData = data.data;
//     // const categoryData = data.data.attributes.products.data;
//     // console.log(categoryData);
//     return categoryData;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
export async function getSelectedCategoryAPI(id) {
  try {
    const res = await fetch(
      `${backendURL}/api/categories/${id}?populate=products.img`,
      params
    );
    // const res = await fetch(
    //   `${backendURL}/api/categories/${categoryId}?populate=*`,
    //   params
    // );
    const data = await res.json();
    // console.log(data);
    const categoryData = data;
    // const categoryData = data.data.attributes.products.data;
    // console.log(categoryData);
    return categoryData;
  } catch (error) {
    console.log(error.message);
  }
}
