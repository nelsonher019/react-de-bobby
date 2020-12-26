import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import IconExtension from "../../Home/Ficheros/IconExtension";
import { Link } from "react-router-dom";
import axios, { CancelToken, isCancel } from "axios";
import { v4 as uuid } from "uuid";
import SpinnerLoad from "../../SpinnerLoad";

function FilesSelected({ AboutFiles, Files, setAboutFiles }) {
  const [Loader, setLoader] = useState(null);
  const cancelFileUpload = useRef(null);
  const [MessageCancel, setMessageCancel] = useState("");
  const submitUpload = (e) => {
    e.preventDefault();
    // create formData object
    const formdata = new FormData();
    AboutFiles.forEach((file) => {
      formdata.append("files", Files, file.name);
      formdata.append("path", "/");
    });
    axios
      .request({
        method: "POST",
        url: process.env.REACT_APP_BACKEND_URI + "/upload",
        data: formdata,
        cancelToken: new CancelToken(
          (cancel) => (cancelFileUpload.current = cancel)
        ),
        onUploadProgress: (progressEvent) => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setLoader(percentCompleted);
        },
        cancelToken: new CancelToken(
          (cancel) => (cancelFileUpload.current = cancel)
        ),
      })
      .then((data) => console.log(data))
      .catch((err) => {
        if (isCancel(err)) {
          setMessageCancel(err.message);
        }
      });
  };
  const deleteFile = (e, indexFile) => {
    e.preventDefault();
    const ArchivosResultantes = AboutFiles.filter((_, index) => {
      return index !== indexFile;
    });
    setAboutFiles(ArchivosResultantes);
  };
  const cancelUpload = () => {
    if (cancelFileUpload.current) {
      cancelFileUpload.current(
        `Subida de ${AboutFiles.length} ficheros cancelado`
      );
    }
  };
  return (
    <Fragment>
      {Loader !== null ? (
        <SpinnerLoad
          setMessageCancel={setMessageCancel}
          MessageCancel={MessageCancel}
          setLoader={setLoader}
          Loader={Loader}
          cancelUpload={cancelUpload}
        />
      ) : (
        <StyleFicheros>
          <div className="container-files scroll-container">
            <div className="grid-double">
              {AboutFiles.map((file, index) => {
                return (
                  <div className="grid-file" key={uuid()}>
                    <div>
                      <IconExtension extension={file.name.split(".")[1]} />
                    </div>
                    <div>{file.name}</div>
                    <div>{file.size}</div>
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="times-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="24px"
                        width="24px"
                        className="icon-close"
                        onClick={(e) => deleteFile(e, index)}
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z"></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <StyleBtn>
            <div className="center">
              <ul>
                <li>
                  <Link to={"/upload"}>
                    <button className="btn-opcion bg-cancelar">
                      <strong>Cancelar</strong>
                    </button>
                  </Link>
                  <button
                    onClick={(e) => submitUpload(e)}
                    className="btn-opcion bg-guardar"
                  >
                    <strong>Guardar</strong>
                  </button>
                </li>
              </ul>
            </div>
          </StyleBtn>
        </StyleFicheros>
      )}
    </Fragment>
  );
}

export default FilesSelected;

const StyleFicheros = styled.div`
  /* FILES STYLES */
  .container-files {
    width: 100%;
    height: auto;
    margin-top: 5%;
  }

  .grid-file {
    background: white;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    display: grid;
    grid-template-columns: 10% 40% 40% 10%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
  }

  .grid-double {
    display: grid;
    grid-template-columns: 100%;
  }
  .icon-close {
    fill: #10002b;
    cursor: pointer;
  }
  .icon-close:hover {
    fill: blue;
  }
  /* SCROLL CONTAINER */
  .scroll-container {
    overflow: scroll;
    height: 64vh;
    width: auto;
    overflow-x: hidden;
  }
  .scroll-container::-webkit-scrollbar {
    width: 5.5px;
  }
  /* Track */
  .scroll-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  .scroll-container::-webkit-scrollbar-thumb {
    background: #d6d0d0;
  }
  /* Handle on hover */
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: rgb(160, 139, 139);
  }
`;

const StyleBtn = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: black;
  }
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 100px;
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
  .bg-cancelar {
    transition: 0.3s;
    color: black;
    background: transparent;
  }
  .bg-cancelar:hover {
    transition: 0.3s;
    color: black;
    background: #e6ecf0;
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
