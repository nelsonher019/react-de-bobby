import React, { Fragment, useState } from "react";
import FilesSelected from "./FilesSelected";
import SelectFiles from "./SelectFiles";

function Upload() {
  const [Files, setFiles] = useState(null);
  const [AboutFiles, setAboutFiles] = useState([]);
  const changeFiles = (e) => {
    setFiles(e.target.files);
    let filesDescription = [];
    for (const iterator of e.target.files) {
        console.log(iterator);
      filesDescription.push({
        ...AboutFiles,
        name: iterator.name,
        size: iterator.size,
        type: iterator.type,
        date: iterator.lastModifiedDate,
      });
    }
    setAboutFiles(filesDescription);
  };
  return (
    <Fragment>
      {Files === null ? (
        <SelectFiles changeFiles={changeFiles} />
      ) : (
       <FilesSelected AboutFiles={AboutFiles}/>
      )}
    </Fragment>
  );
}

export default Upload;
