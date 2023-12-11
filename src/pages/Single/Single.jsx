import { useParams } from "react-router-dom";
import "./Single.css";
import Header from "../../components/Header/Header";

export default function Single() {
  const { id } = useParams();
  // const singleProduct = products.find((item) => item.id === id);
  // const { img, title, price, description } = singleProduct;
  return (
    <>
      <Header />
      <div className="singleC">
        <div className="singleCO">
          <div className="singleCOImg">
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
