import "./Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { SHSelect, StyledCards } from "../../components/Styled";
import { useGlobalContext } from "../../context";
import HCards from "../HCard/HCards";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="mainCategoriya">
          <p className="mainCp">Category</p>
          <ul className="mainCUl">
            <SHSelect name="shop"className="SHSelect1" >
              <option value="Category">Category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </SHSelect>
          </ul>
        </section>
        <section className="mainItem">
          <h1 className="mainItemH1">Products</h1>
          <StyledCards className="mainIP">
            <HCards />
          </StyledCards>
        </section>
      </main>
      <Footer />
    </>
  );
}
