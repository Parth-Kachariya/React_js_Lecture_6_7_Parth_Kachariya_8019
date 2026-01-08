import { useState } from "react";

const ModalPopup = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className="h-screen mx-w-xl  flex bg-gray-400 justify-center items-center">
      <div className="bg-gray-300 p-10 border flex flex-col gap-4 rounded-lg">
        {!isopen && (
          <h1 className="text-center p-3 font-extrabold text-2xl">
            Modal Popup
          </h1>
        )}
        {!isopen && (
          <button
            className="bg-green-400 py-2 rounded-full text-lg cursor-pointer font-extrabold "
            onClick={() => setIsOpen(true)}
          >
            Click To Open
          </button>
        )}
        {isopen && (
          <div className="w-xl flex flex-col">
            <h2 className="py-3 text-lg font-bold">What is React js?</h2>
            <p className="p-2 font-semibold">
              React.js (also known as React or ReactJS) is an open-source
              JavaScript library for building user interfaces (UIs). Developed
              and maintained by Meta (formerly Facebook) and a large community
              of developers, it is widely used for creating dynamic, single-page
              applications (SPAs) and even mobile applications via React Native.
            </p>
            <button
              className="py-3 cursor-pointer bg-red-400 my-3 text-2xl font-extrabold rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPopup;
