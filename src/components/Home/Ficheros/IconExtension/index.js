import React, {Fragment} from "react";
import { v4 as uuidv4 } from 'uuid';

function IconExtension({ extension }) {
  const listIcons = [
    "docx",
    "pdf",
    "pptx",
    "txt",
    "jpg",
    "png",
    "gif",
    "doc",
    "mp3",
    "wav",
    "mp4",
    "zip",
    "exe",
    "ppt",
    "csv",
    "odt",
    "svg",
  ];

  const result = listIcons.map((icon) => {
    let iconExtension = null;
    if (icon === extension) {
      iconExtension = require(`../iconos/${icon}.svg`);
    }
    return (
      <Fragment key={uuidv4()}>
        <img src={iconExtension} alt="" />
      </Fragment>
    );
  });
  return result;
}
export default IconExtension;
