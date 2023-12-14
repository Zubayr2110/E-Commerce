import { BasketSCMD, BasketSCMDI, BasketSCMDT, BasketSCMDT1, BasketSCMDT1T, BasketSCMDT2, BasketSCMDT2A, BasketSCMDT2A1, BasketSCMDT2A2, BasketSCMDT2A3, BasketSCMDT2C, BasketSCMDT2Pr, BasketTrashIcon } from "../../components/Styled";
import { useGlobalContext } from "../../context";

export default function Basketc({ id, image, title, price, description, amount, category }) {
  const { clearBasket, remB, addB, decB } = useGlobalContext()
  return (
    <BasketSCMD>
      <BasketSCMDI src={image} />
      <BasketSCMDT>
        <BasketSCMDT1>
          <BasketSCMDT1T>{title}</BasketSCMDT1T>
          <BasketTrashIcon onClick={() => remB(id)}>
            <i class="fa-solid fa-trash baskettrashicon"></i>
          </BasketTrashIcon>
        </BasketSCMDT1>
        <BasketSCMDT2>
          <BasketSCMDT2C>Category: {category}</BasketSCMDT2C>
          <BasketSCMDT2A>
            <BasketSCMDT2A1 onClick={amount <= 1 ? () => remB(id) : () => decB(id)}>-</BasketSCMDT2A1>
            <BasketSCMDT2A2>{amount}</BasketSCMDT2A2>
            <BasketSCMDT2A3 onClick={() => addB(id)}>+</BasketSCMDT2A3>
          </BasketSCMDT2A>
          <BasketSCMDT2Pr>{price} $</BasketSCMDT2Pr>
        </BasketSCMDT2>
      </BasketSCMDT>
    </BasketSCMD>
  );
}
