import React from "react";
import "../navbar/NavBar.css";

function NavBar() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="buttons d-flex justify-content-between align-items-center">
        <button
          className="btn menu-bar"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="text fa-solid fa-bars"></i>
        </button>
        <h2 className="brand-text m-0  px-3">MUSIC</h2>
        <i className="text fa-solid fa-user px-3 "></i>
      </div>

      <div
        className="offcanvas offcanvas-start w-50"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            MUSIC
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="unordered-list">
            <li>Account</li>
            <li>Theme</li>
            <li>Setting</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
      <div className="input-group p-2">
        <input
          type="text"
          className="form-control"
          placeholder="search.."
          aria-label="search"
          aria-describedby="addon-wrapping"
          id="search-input"
        />
      </div>
    </div>
  );
}
export default NavBar;;
