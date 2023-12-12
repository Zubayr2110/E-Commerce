import Header from "../../components/Header/Header";
import { ProductS, ProductSD } from "../../components/Styled";
import Cards from "../Card/Cards.jsx";

export default function Product() {
  return (
    <>
      <Header />
      <ProductS>
        <ProductSD>
          <Cards />
        </ProductSD>
      </ProductS>
    </>
  );
}
