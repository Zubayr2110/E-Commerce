import React from "react";
import Header from "../../components/Header/Header";
import {
  BasketS,
  BasketSC,
  BasketSCCB,
  BasketSCM,
  BasketSCS,
  BasketSCST1,
  BasketSCST2,
  BasketSCST21,
  BasketSCST3,
  BasketSCST31,
  BasketSCST32,
  BasketSH1,
  BasketTrashIcon,
} from "../../components/Styled";
import { Singleimgproba } from "../../components/export_img";
import { useGlobalContext } from "../../context";
import Basketc from "./Basketc.jsx";
export default function Basket() {
  const { basket, clearBasket, data, totalp } = useGlobalContext();
  let numberP = 0,
    priceP = 0;
  const NumberPF = basket.map((item) => numberP += item.amount);
  const PricePF = basket.map((item) => priceP += item.price);
  return (
    <>
      <Header />
      <BasketS>
        <BasketSH1>Basket</BasketSH1>
        <BasketSC>
          <BasketSCM>
            {basket.map((item) => (
              <Basketc key={item.id} {...item} />
            ))}
            {/* {data.map((item) => (
              <Basketc key={item.id} {...item} />
            ))} */}
          </BasketSCM>
          <BasketSCS>
            <BasketSCST1>Buyurtmangiz</BasketSCST1>
            <BasketSCST2>
              <BasketSCST21>Mahsulotlar: ({numberP})</BasketSCST21>
            </BasketSCST2>
            <BasketSCST3>
              <BasketSCST31>Jami:</BasketSCST31>
              <BasketSCST32>{priceP}$</BasketSCST32>
            </BasketSCST3>
            <BasketSCCB onClick={() => clearBasket()}>Clear Basket</BasketSCCB>
          </BasketSCS>
        </BasketSC>
      </BasketS>
    </>
  );
}
