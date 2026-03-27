import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const MemoryCapture = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [cards, setCards] = useState([]);
  const [editId, setEditId] = useState(null);

  const cardsRef = collection(db, "cards");

  const fetchCards = async () => {
    const data = await getDocs(cardsRef);
    setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleSubmit = async () => {
    if (!title || !desc || !imageUrl || !startDate || !endDate) {
      alert("All fields required");
      return;
    }

    if (editId) {
      const cardDoc = doc(db, "cards", editId);
      await updateDoc(cardDoc, {
        title,
        description: desc,
        imageUrl,
        startDate,
        endDate,
      });
      setEditId(null);
    } else {
      await addDoc(cardsRef, {
        title,
        description: desc,
        imageUrl,
        startDate,
        endDate,
      });
    }
    setTitle("");
    setDesc("");
    setImageUrl("");
    setStartDate("");
    setEndDate("");

    fetchCards();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "cards", id));
    fetchCards();
  };

  const handleEdit = (card) => {
    setTitle(card.title);
    setDesc(card.description);
    setImageUrl(card.imageUrl);
    setStartDate(card.startDate || "");
    setEndDate(card.endDate || "");
    setEditId(card.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700 drop-shadow">
        Capture Your Trip's Memorable Moments
      </h1>
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl mx-auto border border-white/40">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {editId ? "Update Memory" : "Add New Memory"}
        </h2>

        <input
          type="text"
          placeholder="Enter Title..."
          className="w-full mb-3 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Description..."
          className="w-full mb-3 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          type="text"
          placeholder="Paste Image URL..."
          className="w-full mb-3 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <div>
          <label htmlFor="Trip Start Date" className="text-gray-600 px-2">
            Trip Start Date
          </label>
          <input
            type="date"
            className="w-full mb-3 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Trip End Date" className="text-gray-600 px-2">
            Trip End Date
          </label>

          <input
            type="date"
            className="w-full mb-4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg cursor-pointer text-white font-semibold transition duration-300 ${
            editId
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          {editId ? "Update Memory" : "Add Memory"}
        </button>
      </div>

      <div className="py-8">
        <hr className="text-gray-300" />
      </div>

      {/* Cards */}

      {cards.length === 0 ? (
        <p className="text-red-500 font-bold text-center">No Memories Found ! !</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col max-h-[450px] bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-grow p-5">
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {card.title}
                </h2>

                <div className="text-xs text-gray-500 mb-2">
                  {new Date(card.startDate).toLocaleDateString()} →{" "}
                  {new Date(card.endDate).toLocaleDateString()}
                </div>

                <p className="text-sm text-gray-600 mb-4 overflow-y-auto max-h-[90px] pr-1">
                  {card.description}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-300 flex justify-between">
                  <button
                    onClick={() => handleEdit(card)}
                    className="inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                    Edit Details
                  </button>

                  <button
                    onClick={() => handleDelete(card.id)}
                    className="inline-flex cursor-pointer  items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryCapture;
