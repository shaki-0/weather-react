import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Type a city"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
