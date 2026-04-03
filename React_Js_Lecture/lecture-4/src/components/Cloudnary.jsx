import React, { useState } from "react";

const Cloudnary = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // file select
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // upload to Cloudinary
  const handleUpload = async () => {
    if (!file) {
      alert("Select Image First");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uploader"); // 👈 tumhara preset

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/duhupfplu/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      console.log("Permanent URL:", data.secure_url);

      setImageUrl(data.secure_url); // ✅ permanent URL set
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };
  return (
    <>
      <div className="text-center bg-gray-900 my-20">
        <h2 className="bg-gray-800 text-white p-4 text-2xl">
          Image Upload (Permanent URL)
        </h2>

        {/* file input */}
        <input
          className="px-6 py-4 my-3 bg-gray-800 text-white"
          type="file"
          onChange={handleFileChange}
        />

        <br />
        <br />

        {/* upload button */}
        <button
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl cursor-pointer"
          onClick={handleUpload}
        >
          Upload Image
        </button>

        {/* show image */}
        {imageUrl && (
          <div style={{ marginTop: "20px" }}>
            <p className="p-4 bg-gray-800 text-white">{imageUrl}</p>
            <div className="border p-3 border-white w-fit m-3">
              <img src={imageUrl} alt="Uploaded" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cloudnary;
