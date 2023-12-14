import React from "react";
import Header from "../../components/Header/Header";
import {
  BasketS,
  BasketSC,
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

export default function Basket() {
  return (
    <>
      <Header />
      <BasketS>
        <BasketSH1>Basket</BasketSH1>
        <BasketSC>
          <BasketSCM>
            <BasketSCMD>
              <BasketSCMDI src={Singleimgproba} />
              <BasketSCMDT>
                <BasketSCMDT1>
                  <BasketSCMDT1T>Product Name</BasketSCMDT1T>
                  <BasketTrashIcon>
                    <i class="fa-solid fa-trash baskettrashicon"></i>
                  </BasketTrashIcon>
                </BasketSCMDT1>
                <BasketSCMDT2>
                  <BasketSCMDT2C>Category: men's clothing</BasketSCMDT2C>
                  <BasketSCMDT2A>
                    <BasketSCMDT2A1>-</BasketSCMDT2A1>
                    <BasketSCMDT2A2>1</BasketSCMDT2A2>
                    <BasketSCMDT2A3>+</BasketSCMDT2A3>
                  </BasketSCMDT2A>
                  <BasketSCMDT2Pr>1028 $</BasketSCMDT2Pr>
                </BasketSCMDT2>
              </BasketSCMDT>
            </BasketSCMD>
            
          </BasketSCM>
          <BasketSCS>
            <BasketSCST1>Buyurtmangiz</BasketSCST1>
            <BasketSCST2>
              <BasketSCST21>Mahsulotlar: ()</BasketSCST21>
            </BasketSCST2>
            <BasketSCST3>
              <BasketSCST31>Jami:</BasketSCST31>
              <BasketSCST32>109981 $</BasketSCST32>
            </BasketSCST3>
          </BasketSCS>
        </BasketSC>
      </BasketS>
    </>
  );
}
