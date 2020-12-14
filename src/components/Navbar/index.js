import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Fragment>
      <StyleNavbar>
        <div className="fixed-navbar grid-navigation">
          <div className="mt-icon">
            <div className="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
                className="icon-active"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
          </div>
          <Link to="/upload">
            <div className="center">
              <div className="circle-upload">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
            </div>
          </Link>
          <div className="mt-icon">
            <div className="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="24px"
                height="24px"
                className="icon-no-active"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </div>
          </div>
        </div>
      </StyleNavbar>
    </Fragment>
  );
}

export default Navbar;

const StyleNavbar = styled.div`
  /*NAVBAR BOTTOM*/

  .fixed-navbar {
    position: fixed;
    bottom: 0;
    z-index: 1030;
    width: 100%;
    background: white;
    max-width: 600px;
    border-top: 0.5px solid #dadce0;
    padding: 5px;
  }

  .grid-navigation {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
  }

  .circle-upload {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: blue;
    fill: white;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-no-active {
    fill: gray;
  }
  .icon-active {
    fill: black;
  }
  .access-icon {
    color: rgb(255, 255, 255);
  }

  .mt-icon {
    position: relative;
    top: 10%;
  }
`;
