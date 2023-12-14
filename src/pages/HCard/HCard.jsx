import './HCard.css'
import { StyledCard, StyledCardBtn, StyledCardImg, StyledCardImg1, StyledCardPrice, StyledCardTitle } from "../../components/Styled";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

export default function HCard({ id,  image, title, price, description, amount }) {
    const navigate = useNavigate()
    const { addBasket } = useGlobalContext()
    return (
    <>
      <StyledCard className="mainIPC">
        <StyledCardImg className="mainIPCI">
          <StyledCardImg1 src={image} width={200} alt="img" />
          <i className="fa-solid fa-heart mainIPCIH"></i>
        </StyledCardImg>
        <StyledCardTitle onClick={() => navigate(`/singleh/${id}`)}>
          {title}
        </StyledCardTitle>
        <StyledCardPrice
          className="mainIPCPrice"
          onClick={() => navigate(`/singleh/${id}`)}
        >
          ${price}
        </StyledCardPrice>

        <StyledCardBtn className="mainIPCBtn" onClick={() => addBasket(id, title, price, description, image, amount)}>
          <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i> Buy
        </StyledCardBtn>
      </StyledCard>
    </>
  );
}
