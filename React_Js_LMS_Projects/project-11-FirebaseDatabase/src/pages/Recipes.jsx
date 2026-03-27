import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { FiPlus, FiTrash2, FiHeart } from "react-icons/fi";

const Recipes = ({ category }) => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("Dessert");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, "users", user.uid, "recipes"),
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setRecipes(data);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [user]);

  const addItem = async (e) => {
    e.preventDefault();

    console.log("before add");
    console.log("USER:", user);

    if (!name || !image) {
      alert("Fill all fields!");
      return;
    }

    if (!user) {
      alert("User not logged in");
      return;
    }

    try {
      await addDoc(collection(db, "users", user.uid, "recipes"), {
        name,
        image,
        type,
        favorite: false,
        createdAt: new Date().toISOString(),
      });

      console.log("after add");

      setName("");
      setImage("");
      setType("Dessert");

      alert("FORM SUBMITTED");
    } catch (err) {
      console.error("ADD ERROR:", err.message);
      alert(err.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      await deleteDoc(doc(db, "users", user.uid, "recipes", id));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleFavorite = async (id, fav) => {
    try {
      const ref = doc(db, "users", user.uid, "recipes", id);
      await updateDoc(ref, { favorite: !fav });
    } catch (err) {
      console.error(err);
    }
  };

  const filteredRecipes =
    category === "All" ? recipes : recipes.filter((r) => r.type === category);

  const limitedRecipes = filteredRecipes.slice(0, 12); // ⚡ max 12 cards

  return (
    <div className="p-6 ">
      {/* Form */}
      <div className="w-2/3 mx-auto">
        <form
          onSubmit={addItem}
          className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-3 mb-6"
        >
          <input
            type="text"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 rounded-lg border"
          >
            <option>Dessert</option>
            <option>Main</option>
            <option>Snack</option>
            <option>Drink</option>
          </select>

          <button
            type="submit"
            className=" active:bg-blue-700 active:scale-102 font-bold text-lg cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
          >
            <FiPlus  /> Add
          </button>
        </form>
      </div>

      {/* List */}
      {loading ? (
        <p>Loading...</p>
      ) : limitedRecipes.length === 0 ? (
        <p className="text-gray-400">No recipes found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {limitedRecipes.map((r) => (
            <div key={r.id} className="bg-white rounded-xl shadow p-3">
              <img
                src={r.image}
                loading="lazy"
                alt=""
                className="h-40 w-full object-cover rounded-lg bg-gray-200"
              />

              <div className="flex justify-between items-center mt-3">
                <h2 className="font-bold">{r.name}</h2>

                <div className="flex gap-2">
                  <button onClick={() => toggleFavorite(r.id, r.favorite)}>
                    <FiHeart
                      className={`text-xl ${
                        r.favorite ? "text-red-500" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <button onClick={() => deleteItem(r.id)}>
                    <FiTrash2 className="text-gray-400 hover:text-red-500" />
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

export default Recipes;
