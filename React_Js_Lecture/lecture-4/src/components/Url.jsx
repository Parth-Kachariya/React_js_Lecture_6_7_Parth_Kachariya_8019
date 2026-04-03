import React, { useState } from "react";

const Url = () => {
  const [image, setImage] = useState(null);
  // handle file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("before file",file);
    

    if (file) {
      const imageUrl = URL.createObjectURL(file); // temporary URL
      setImage(imageUrl);
      console.log("after", imageUrl);
    }
    
  };

  return (
    <>
      <div className="bg-gray-600 my-10 text-center">
        <h2 className="bg-gray-500 text-white py-4 font-bold">Image Upload Demo (Without Firebase)</h2>

        <input className="px-6 py-3 bg-gray-900 text-white" type="file" onChange={handleImageChange} />

        {image && (
          <div className="border border-gray-900 p-6" >
            <img
              src={image}
              alt="Preview"
             className="rounded-xl "
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Url;
