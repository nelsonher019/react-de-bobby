import React, { Fragment } from "react";
import styled from "styled-components";

function DirectAcces() {
  return (
    <Fragment>
      <br />
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
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="play"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={36}
                    height={36}
                  >
                    <path
                      fill="currentColor"
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zm-16.2 55.1l-352 208C45.6 483.9 32 476.6 32 464V47.9c0-16.3 16.4-18.4 24.1-13.8l352 208.1c10.5 6.2 10.5 21.4.1 27.6z"
                      class=""
                    ></path>
                  </svg>
                </p>
              </div>
              <div className="card">
                <p className="center access-icon mt-icon">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="folder"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={36}
                    height={36}
                  >
                    <path
                      fill="currentColor"
                      d="M194.74 96l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V112c0-8.84 7.16-16 16-16h146.74M48 64C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48z"
                      class=""
                    ></path>
                  </svg>
                </p>
              </div>
              <div className="card ">
                <p className="center access-icon mt-icon">
                  <svg
                    width={36}
                    height={36}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="file"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z"
                      class=""
                    ></path>
                  </svg>
                </p>
              </div>
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
    margin-right: 3%;
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
    flex: 1 0 7em;
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
