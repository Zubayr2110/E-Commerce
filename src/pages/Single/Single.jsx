import { useParams } from "react-router-dom";
import "./Single.css";
import Header from "../../components/Header/Header";
import { Singleimgproba } from "../../components/export_img";
import {
  SSDingleCOTBtn1,
  SSDingleCOTBtn2,
  SSingleCOImg1,
  SSingleCOT,
  SSingleCOTB,
  SSingleCOTH1,
  SSingleCOTP,
  SSingleCOTPice,
} from "../../components/Styled";
import { useGlobalContext } from "../../context";

export default function Single() {
  const { products, addBasket, FLikeI } = useGlobalContext();
  const BasketBTNClick = () => {
    alert("Add Product To Basket");
  };
  const { id } = useParams();
  const singleProduct = products.find((item) => item.id === id);
  const { image, title, description, price, category } = singleProduct;


  return (
    <>
      <Header />
      <div className="singleC">
        <div className="singleCO">
          <div className="singleCOImg">
            <SSingleCOImg1 src={image} alt="" />
          </div>
          <SSingleCOT>
            <SSingleCOTH1>{title}</SSingleCOTH1>
            <SSingleCOTP>{description}</SSingleCOTP>
            <SSingleCOTPice>${price}</SSingleCOTPice>
            <SSingleCOTB>
              <SSDingleCOTBtn1 onClick={
                () =>  addBasket(id, title, price, description, image)
              }>
                {" "}
                <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i>Buy
              </SSDingleCOTBtn1>
              <SSDingleCOTBtn2 onClick={() => FLikeI(id, title, price, description, image, category)}>
                <i className="fa-solid fa-heart mainIPCIH"></i> Like
              </SSDingleCOTBtn2>
            </SSingleCOTB>
          </SSingleCOT>
        </div>
      </div>
    </>
  );
}
