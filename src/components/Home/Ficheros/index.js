import React, { Fragment } from "react";
import styled from "styled-components";
import IconExtension from "./IconExtension";

function Ficheros() {
  return (
    <Fragment>
      <StyleFicheros>
        <div className="container-files scroll-container">
          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>


          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>


          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid-double">
            <div className="grid-file">
              <div>
                <IconExtension extension={"png"} />
              </div>
              <div>nelson.png</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
            <div className="grid-file">
              <div>
                <IconExtension extension="txt" />
              </div>
              <div>iotask-mob-m28-03.mp3</div>
              <div>
                <img src="more_horiz-24px.svg" alt="" />
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </StyleFicheros>
    </Fragment>
  );
}

export default Ficheros;

const StyleFicheros = styled.div`
  /* FILES STYLES */

  .container-files {
    width: 100%;
    height: auto;
  }

  .grid-file {
    background: white;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    display: grid;
    grid-template-columns: 12% 76% 12%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    .grid-double {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  @media (min-width: 1024px) {
    .grid-double {
      display: grid;
      grid-template-columns: 50% 50%;
    }
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
