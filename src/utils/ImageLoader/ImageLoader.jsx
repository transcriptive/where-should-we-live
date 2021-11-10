import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import FileBase64 from 'react-file-base64';
 
export default function ImageLoader() {
  const [files, setFiles] = useState()
 
  // Callback~
  getFiles(files){
    this.setState({ files: files })
  }
 
    return (
      <FileBase64
        multiple={ false }
        onDone={ {base64} } />
    )
  }

 
