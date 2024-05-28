import axios from "axios";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

const DropZoneComponent = ({ image, setImage }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      let result = await axios({
        url: "http://localhost:8000/files/single",
        method: "post",
        data: formData,
      });

      setImage(result.data.result.path);
      console.log(result.data.result);
      toast.success("file updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className="dropzone" style={{ cursor: "pointer" }}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}

      {image && (
        <img
          src={image}
          alt="product image"
          style={{ width: "150px", height: "150PX" }}
        ></img>
      )}
    </div>
  );
};

export default DropZoneComponent;
