import React, { Fragment, useRef } from "react";
import styled from "styled-components";
function SelectFiles({ changeFiles }) {
  const refFile = useRef(null);
  return (
    <Fragment>
      <StyleUpload>
        <div className="mt">
          <div className="center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cloud-upload-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              height="150px"
              width="150px"
            >
              <path
                fill="#10002b"
                d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
              ></path>
            </svg>
          </div>
          <div className="center">
            <input
              ref={refFile}
              type="file"
              onChange={(e) => changeFiles(e)}
              className="display-input"
              multiple
            />
            <button
              className="btn-opcion bg-guardar"
              onClick={() => refFile.current.click()}
            >
              <strong>Seleccionar Archivos</strong>
            </button>
          </div>
        </div>
      </StyleUpload>
    </Fragment>
  );
}

export default SelectFiles;

const StyleUpload = styled.div`
  .display-input {
    display: none;
  }
  .mt {
    margin-top: 25%;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 200px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    /* BORDER RADIUS */
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }

  .bg-guardar {
    transition: 0.3s;
    color: #ffffff;
    background: #3d50fa;
  }
  .bg-guardar:hover {
    transition: 0.3s;
    color: #ffffff;
    background: #1f30cc;
  }
`;
