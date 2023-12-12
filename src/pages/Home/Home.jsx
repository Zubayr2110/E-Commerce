import "./Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { StyledCards } from "../../components/Styled";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="main">
        <section className="mainCategoriya">
          <p className="mainCp">Category</p>
          <ul className="mainCUl">
            <li className="mainCUlLi">
              <button className="mainCUlLiBtn">men's clothing</button>
            </li>
            <li className="mainCUlLi">
              <button className="mainCUlLiBtn">jewelery</button>
            </li>
            <li className="mainCUlLi">
              <button className="mainCUlLiBtn">electronics</button>
            </li>
            <li className="mainCUlLi">
              <button className="mainCUlLiBtn">women's clothing</button>
            </li>
          </ul>
        </section>
        <section className="mainItem">
          <h1 className="mainItemH1">Products</h1>
          <StyledCards className="mainIP">
            
          </StyledCards>
        </section>
      </main>
      <Footer />
    </>
  );
}
