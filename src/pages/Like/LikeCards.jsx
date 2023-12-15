import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  StyledCardBtn,
  StyledCardImg,
  StyledCardImg1,
  StyledCardPrice,
  StyledCardTitle,
} from "../../components/Styled";
import "./Like.css";
export default function LikeCards({
  id,
  image,
  title,
  price,
  description,
  amount,
  category,
}) {
  const navigate = useNavigate()
  return (
    <>
      <StyledCard className="mainIPC">
        <StyledCardImg className="mainIPCI">
          <StyledCardImg1 src={image} width={200} alt="img" />
          <i
            className="fa-solid fa-heart mainIPCIH"></i>
        </StyledCardImg>
        <StyledCardTitle onClick={() => navigate(`/single/${id}`)}>
          {title}
        </StyledCardTitle>
        <StyledCardPrice
          className="mainIPCPrice"
          onClick={() => navigate(`/single/${id}`)}
        >
          ${price}
        </StyledCardPrice>

        <StyledCardBtn
          className="mainIPCBtn"
          onClick={() =>
            addBasket(id, title, price, description, image, amount, category)
          }
        >
          <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i>
          Buy
        </StyledCardBtn>
      </StyledCard>
    </>
  );
}
