import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  StyledCardBtn,
  StyledCardImg,
  StyledCardImg1,
  StyledCardPrice,
  StyledCardTitle,
} from "../../components/Styled";
import "./Card.css";

export default function Card({ id, image, title, price }) {
  const navigate = useNavigate();

  return (
    <StyledCard className="mainIPC" >
      <StyledCardImg className="mainIPCI">
        <StyledCardImg1
          src={ image }
          width={200}
          alt="img  "
        />
        <i className="fa-solid fa-heart mainIPCIH"></i>
      </StyledCardImg>
      <StyledCardTitle onClick={() => navigate(`/single/${id}`)}>
        {title}
      </StyledCardTitle>
      <StyledCardPrice
        className="mainIPCPrice"
        onClick={() => navigate(`/single/${id}`)}
      >
        {price}
      </StyledCardPrice>

      <StyledCardBtn className="mainIPCBtn">
        <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i> Buy
      </StyledCardBtn>
    </StyledCard>
  );
}
