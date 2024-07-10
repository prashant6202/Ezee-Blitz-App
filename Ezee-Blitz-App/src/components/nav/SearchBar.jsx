import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/product/productSlice";
export default function searchBar() {
  const { searchTerm } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} class="d-flex ms-md-0 ms-lg-3">
        <input
          class="form-control ms-md-auto me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
    </div>
  );
}
