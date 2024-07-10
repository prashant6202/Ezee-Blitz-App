import React from "react";
import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import { useLocation, useNavigate } from "react-router-dom";
export default function NavBar(props) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const handleHomeNavigation = () => {
    nav("/");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
        <div className="container-fluid px-md-5">
          <span
            onClick={handleHomeNavigation}
            id="name"
            className="navbar-brand fw-bold pointer"
          >
            {props.title}
          </span>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {pathname === "/" && (
              <>
                <CategorySelector />
                <SearchBar />
              </>
            )}

            <CartButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
