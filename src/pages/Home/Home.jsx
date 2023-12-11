import "./Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  
  const navigate = useNavigate()

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
          <div className="mainIP">
            <div className="mainIPC">
              <div className="mainIPCI">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  width={200}
                  alt="image"
                  className="mainIPCImg"
                />
                <i className="fa-solid fa-heart mainIPCIH"></i>
              </div>
              <p className="mainIPCTitle" onClick={() => navigate('/single/:id')}>
                Mens Casual Premium Slim Fit T-Shirts{" "}
              </p>
              <p className="mainIPCPrice" onClick={() => navigate('/single/:id')}>$166</p>
              <button className="mainIPCBtn">
                <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i> Buy
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
