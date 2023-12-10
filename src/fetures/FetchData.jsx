const url = `https://fakestoreapi.com/products`
const FetchData = async () => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
export default FetchData;
