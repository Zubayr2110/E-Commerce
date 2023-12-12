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

export default function Single({ data }) {
  const BasketBTNClick = () => {
    alert("Add Product To Basket");
  };
  const LikeBTNClick = () => {
    alert("Add Product To Like");
  };

  const { id } = useParams();
  const singleProduct = data.find((item) => item.id === id);
  const { image, title, description, price } = singleProduct
  
  return (
    <>
      <Header />
      <div className="singleC">
        <div className="singleCO">
          <div className="singleCOImg">
            <SSingleCOImg1 src={image} alt="" />
          </div>
          <SSingleCOT>
            <SSingleCOTH1>
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops{" "}
            </SSingleCOTH1>
            <SSingleCOTP>
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </SSingleCOTP>
            <SSingleCOTPice>$166</SSingleCOTPice>
            <SSingleCOTB>
              <SSDingleCOTBtn1 onClick={BasketBTNClick  }>
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
