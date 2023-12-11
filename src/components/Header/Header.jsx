import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
        <div className="Headercontainer">
            <Link to='/' className="headerh1">E-Commerce</Link>
            <nav className="headernav">
                <ul className="headerul">
                    <li className="headerli"><i className="fa-regular fa-heart"></i><Link to="/like">Like</Link></li>
                    <li className="headerli"><i className="fa-solid fa-cube"></i><Link to="/product">Product</Link></li>
                    <li className="headerli"><i className="fa-solid fa-cart-shopping"></i><Link to="/basket/total">Basket</Link></li>
                    <li className="headerli"><i className="fa-solid fa-user"></i><Link to="/signup/user">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    </header>   
  );
}
