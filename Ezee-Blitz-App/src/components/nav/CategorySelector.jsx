import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../features/product/productSlice";
export default function categorySelector() {
  const { categories, selectedCategory } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const title = selectedCategory;
  const handleMouseEnter = (e) => {
    dispatch(setSelectedCategory(e.target.innerText));
  };
  return (
    <div className="dropdown mb-3 mb-lg-0">
      <button
        className="btn btn-outline-success text-white dropdown=toggle"
        type="button"
        id="dropDownButton1"
        data-bs-toggle="dropdown"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {categories.map((categorie) => {
          return (
            <li onMouseEnter={handleMouseEnter}>
              <a href="#" className="dropdown-item pointer">
                {categorie}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
