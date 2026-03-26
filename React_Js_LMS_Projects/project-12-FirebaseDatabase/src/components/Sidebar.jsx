import { FiCoffee, FiStar, FiHeart, FiLogOut } from "react-icons/fi";

export const Sidebar = ({ category, setCategory }) => {
  const categories = ["All", "Dessert", "Main", "Snack", "Drink"];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 shadow-2xl flex flex-col justify-between">
      
      <div>
        <div className="p-6 text-xl font-bold border-b border-white/20">Categories</div>
        <nav className="flex-1 p-4 space-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                category === cat ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {cat === "Dessert" && <FiCoffee />}
              {cat === "Main" && <FiStar />}
              {cat === "Snack" && <FiHeart />}
              {cat === "Drink" && <FiCoffee />}
              <span>{cat}</span>
            </button>
          ))}
        </nav>
      </div>

    </aside>
  );
};