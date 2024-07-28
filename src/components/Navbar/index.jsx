import React, { useState } from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import { FaCartArrowDown } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

function Navbar({ setData, cart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <nav className="sticky-top">
      <div className="row">
        <div className="col">
          <Link to="/" className="item e-cart">
             <HiOutlineHome className="home-icon" />
          </Link>
          <form className="item" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

            <Link to="/cart" type="button" className="btn btn-primary position-relative cart-cont">
            <FaCartArrowDown  className="cart"/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </Link>
        </div>
      </div>
        {
          location.pathname == "/" ? <Header setData={setData} />  : ""
        }
      
    </nav>
  );
}

export default Navbar;
