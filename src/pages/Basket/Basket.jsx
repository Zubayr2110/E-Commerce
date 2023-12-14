import React from "react";
import Header from "../../components/Header/Header";
import {
  BasketS,
  BasketSC,
  BasketSCCB,
  BasketSCM,
  BasketSCMD,
  BasketSCMDI,
  BasketSCMDT,
  BasketSCMDT1,
  BasketSCMDT1T,
  BasketSCMDT2,
  BasketSCMDT2A,
  BasketSCMDT2A1,
  BasketSCMDT2A2,
  BasketSCMDT2A3,
  BasketSCMDT2C,
  BasketSCMDT2Pr,
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
import Data from "../../components/Data.jsx";
export default function Basket() {
  const { basket, clearBasket, amount, total } = useGlobalContext();
  // console.log(basket);
  return (
    <>
      <Header />
      <BasketS>
        <BasketSH1>Basket</BasketSH1>
        <BasketSC>
          <BasketSCM>
            {basket.map(item => (
              <Basketc key={item.id} {...item} />
            ))}
          </BasketSCM>
          <BasketSCS>
            <BasketSCST1>Buyurtmangiz</BasketSCST1>
            <BasketSCST2>
              <BasketSCST21>Mahsulotlar: ({amount})</BasketSCST21>
            </BasketSCST2>
            <BasketSCST3>
              <BasketSCST31>Jami:</BasketSCST31>
              <BasketSCST32>{basket.amount} $</BasketSCST32>
            </BasketSCST3>
            <BasketSCCB onClick={() => clearBasket()}>Clear Basket</BasketSCCB>
          </BasketSCS>
        </BasketSC>
      </BasketS>
    </>
  );
}
