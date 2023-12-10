import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import FetchData from "../../fetures/FetchData";
import "./Home.css";

export default function Home() {
  const fetchdata = FetchData();
  console.log(fetchdata);
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
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  width={200}
                  alt="image"
                  className="mainIPCImg"
                />
                <i className="fa-solid fa-heart mainIPCIH"></i>
              </div>
              <p className="mainIPCTitle">
                Mens Casual Premium Slim Fit T-Shirts{" "}
              </p>
              <p className="mainIPCPrice">$166</p>
              <button className="mainIPCBtn"><i class="fa-solid fa-cart-shopping mainIPCBtnI"></i> Buy</button>
            </div>
            <div className="mainIPC">
              <div className="mainIPCI">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  width={200}
                  alt="image"
                  className="mainIPCImg"
                />
                <i className="fa-solid fa-heart mainIPCIH"></i>
              </div>
              <p className="mainIPCTitle">
                Mens Casual Premium Slim Fit T-Shirts{" "}
              </p>
              <p className="mainIPCPrice">$166</p>
              <button className="mainIPCBtn"><i class="fa-solid fa-cart-shopping mainIPCBtnI"></i> Buy</button>
            </div>
            <div className="mainIPC">
              <div className="mainIPCI">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  width={200}
                  alt="image"
                  className="mainIPCImg"
                />
                <i className="fa-solid fa-heart mainIPCIH"></i>
              </div>
              <p className="mainIPCTitle">
                Mens Casual Premium Slim Fit T-Shirts{" "}
              </p>
              <p className="mainIPCPrice">$166</p>
              <button className="mainIPCBtn"><i class="fa-solid fa-cart-shopping mainIPCBtnI"></i> Buy</button>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
