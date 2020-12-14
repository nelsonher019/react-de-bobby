import React, { Fragment } from "react";
import styled from "styled-components";

function Search() {
  return (
    <Fragment>
      <StyleSearch>
        <div className="center">
          <div className="search-wrapper" id="searchLine">
            <input className="search-input" type="text" placeholder="Buscar" />
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="search"
              role="img"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
                />
                <path
                  fill="currentColor"
                  d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"
                />
              </g>
            </svg>
          </div>
        </div>
      </StyleSearch>
    </Fragment>
  );
}

export default Search;

const StyleSearch = styled.div`
  /*INPUT SEARCH*/

  .search-wrapper {
    border-radius: 4px;
    background-color: #fff;
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
    border-radius: 10px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-input {
    border: none;
    outline: none;
    height: 100%;
    padding: 0 12px;
    font-size: 16px;
    width: 500px;
  }
`;
