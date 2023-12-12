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
  const { products } = useGlobalContext();
  const BasketBTNClick = () => {
    alert("Add Product To Basket");
  };
  const LikeBTNClick = () => {
    alert("Add Product To Like");
  };

  const { id } = useParams();
  const singleProduct = products.find((item) => item.id === id);
  const { img, title, description, price } = singleProduct;

  return (
    <>
      <Header />
      <div className="singleC">
        <div className="singleCO">
          <div className="singleCOImg">
            <SSingleCOImg1 src={img} alt="" />
          </div>
          <SSingleCOT>
            <SSingleCOTH1>{title}</SSingleCOTH1>
            <SSingleCOTP>{description}</SSingleCOTP>
            <SSingleCOTPice>${price}</SSingleCOTPice>
            <SSingleCOTB>
              <SSDingleCOTBtn1 onClick={BasketBTNClick}>
                {" "}
                <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i>Buy
              </SSDingleCOTBtn1>
              <SSDingleCOTBtn2 onClick={LikeBTNClick}>
                <i className="fa-solid fa-heart mainIPCIH"></i> Like
              </SSDingleCOTBtn2>
            </SSingleCOTB>
          </SSingleCOT>
        </div>
      </div>
    </>
  );
}
