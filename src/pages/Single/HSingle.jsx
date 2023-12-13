import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
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
import Data from "../../components/Data";
import ErrorP from "../ErrorP/ErrorP";

export default function HSingle() {
  const { id } = useParams();
  const HSingleproduct = Data.find(item => item.id === id);
  if (!HSingleproduct) {
    return <ErrorP />;
  }
  const { title, price, description, image } = HSingleproduct;

  const BasketBTNClick = () => {
    alert("Add Product To Basket");
  };

  const LikeBTNClick = () => {
    alert("Add Product To Like");
  };
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
