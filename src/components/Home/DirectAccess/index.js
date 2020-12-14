import React, { Fragment } from "react";
import styled from "styled-components";

function DirectAcces() {
  return (
    <Fragment>
        <br/>
      {/* CONTAINER OF CARDS DRAGS HORIZONTAL */}
      <StyleDirectAcces>
        <div className="container-cards">
          <div>
            <b>Acceso rapido</b>
            <div className="cards scroll-container">
              <div className="card">
                <p className="center access-icon mt-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={35}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-image"
                  >
                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </p>
              </div>
              <div className="card">
                <p className="center access-icon mt-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-music"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx={6} cy={18} r={3} />
                    <circle cx={18} cy={16} r={3} />
                  </svg>
                </p>
              </div>
              <div className="card">
                <p className="center access-icon mt-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-play"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </p>
              </div>
              <div className="card">
                <p className="center access-icon mt-icon">
                  <svg
                    width={36}
                    height={36}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="folder-open"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"
                    ></path>
                  </svg>
                </p>
              </div>
              <div className="card"></div>
            </div>
          </div>
        </div>
        <br />
      </StyleDirectAcces>
    </Fragment>
  );
}

export default DirectAcces;

const StyleDirectAcces = styled.div`
  /* CARDS DRAGS */

  .icons-drags {
    color: white;
    margin-top: 10%;
  }

  .container-cards {
    margin-left: 1%;
    margin-right: 1%;
  }

  .cards {
    display: flex;
    -webkit-overflow-scrolling: touch;
    background-color: transparent;
    max-width: 100%;
    padding: 1em;
    overflow-y: hidden;
  }

  .card {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background-color: transparent;
    margin-right: 1em;
    padding: 10px;
    flex: 1 0 5em;
    border: 0px solid #000000;
    background: rgb(10, 10, 168);
    border-radius: 10px;
  }

  .access-icon {
    color: rgb(255, 255, 255);
  }

  .mt-icon {
    position: relative;
    top: 20%;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* SCROLL CONTAINER */

  .scroll-container {
    overflow: scroll;
    height: 130px;
    width: auto;
    overflow-y: hidden;
    transition: 1s;
  }

  .scroll-container::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  .scroll-container::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */

  .scroll-container::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Handle on hover */

  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: #3c50fa;
    border-radius: 5px;
  }
`;
