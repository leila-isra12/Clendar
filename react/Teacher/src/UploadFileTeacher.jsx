import React, { useState } from "react";
import "./UploadFileTeacher.css";
import Footer from "./Footer.jsx";
import { FaTrashAlt } from 'react-icons/fa';

const UploadFileTeacher = () => {
  const [files, setFiles] = useState([
    {
      name: "My-PDF-File.pdf",
      type: "PDF",
      size: "2.9mb",
      uploader: "Elzero",
      url: "/path/to/My-PDF-File.pdf", // Example path
    },
    {
      name: "My-Video-File.avi",
      type: "AVI",
      size: "4.9mb",
      uploader: "Admin",
      url: "/path/to/My-Video-File.avi",
    },
    {
      name: "My-PSD-File.psd",
      type: "PSD",
      size: "4.5mb",
      uploader: "Osama",
      url: "/path/to/My-PSD-File.psd",
    },
    {
      name: "My-Zip-File.zip",
      type: "ZIP",
      size: "8.9mb",
      uploader: "User",
      url: "/path/to/My-Zip-File.zip",
    },
    {
      name: "My-DLL-File.dll",
      type: "DLL",
      size: "4.9mb",
      uploader: "Admin",
      url: "/path/to/My-DLL-File.dll",
    },
    {
      name: "My-EPS-File.eps",
      type: "PDF",
      size: "8.9mb",
      uploader: "Designer",
      url: "/path/to/My-EPS-File.eps",
    },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newFile = {
        name: file.name,
        type: file.type.split("/")[1].toUpperCase(),
        size: `${(file.size / 1024 / 1024).toFixed(1)}mb`,
        uploader: "Teacher",
        url: URL.createObjectURL(file), // Generate a temporary URL for the file
      };
      setFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };
  const deleteFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove file by index
  };

  return (
    <div className="big-divT">
    <div className="upload-containerT">
      <h1 className="upload-headerT">Latest Uploads</h1>
      <label htmlFor="fileUpload" className="upload-buttonT">
        Upload New File
      </label>
      <input
        id="fileUpload"
        type="file"
        className="hidden-inputT"
        onChange={handleUpload}
      />

      <div className="file-listT">
        {files.map((file, index) => (
          <div key={index} className="file-itemT">
            <div className="file-detailsT">
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="file-icon-linkT"
              >
                <span className="file-iconT">{file.type}</span>
              </a>
              <div>
                <p className="file-nameT">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="file-linkT"
                  >
                    {file.name}
                  </a>
                </p>
                <small className="file-uploaderT">{file.uploader}</small>
              </div>
            </div>
            <p className="file-sizeT">{file.size}</p>
            <span
              className="delete-iconT"
              onClick={() => deleteFile(index)} // Delete file on click
            >
              <FaTrashAlt size={19} />
            </span>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UploadFileTeacher;
