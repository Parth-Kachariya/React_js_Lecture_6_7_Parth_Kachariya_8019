import React, { useState } from "react";

const recipesData = [
  {
    title: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    description:
      "Rich and creamy paneer curry cooked in tomato butter . A perfect combination of spices and soft paneer cubes.",
  },
  {
    title: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    description:
      "Crispy South Indian dosa filled with spicy potato masala. Best served with coconut chutney and sambar.",
  },
  {
    title: "French Fries",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    description:
      "Golden crispy potato fries seasoned with salt and spices. A perfect snack for any time.",
  },
  {
    title: "Veg Pizza",
    image:
      "https://static.vecteezy.com/system/resources/previews/046/861/103/non_2x/delicious-veggie-pizza-isolated-on-a-transparent-background-free-png.png",
    description:
      "Loaded with fresh vegetables, cheese, and tangy sauce. A classic favorite for pizza lovers.",
  },
  {
    title: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description:
      "Soft and moist chocolate cake with rich cocoa flavor. Perfect dessert for celebrations.",
  },
  {
    title: "Veg Sandwich",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37GlBT8XId4J0ng7Lq8SroUdQaqiqO_iVeQ&s",
    description:
      "Fresh vegetables layered between bread slices with chutney and butter. Light and tasty snack.",
  },
  {
    title: "Veg Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    description:
      "Hot and comforting vegetable soup made with fresh veggies and mild spices. Light, healthy, and soothing.",
  },
  {
    title: "Idli Sambar",
    image:
      "https://i.pinimg.com/736x/01/65/17/01651769c6a528ef17f6e122b922f8dc.jpg",
    description:
      "Soft steamed idlis served with hot sambar and chutney. Healthy and comforting meal.",
  },
  {
    title: "Manchurian",
    image:
      "https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-gobi-manchurian-indian-snack-png-image_14548098.png",
    description:
      "Crispy vegetable balls tossed in spicy Indo-Chinese sauce. Perfect starter dish.",
  },
  {
    title: "Spring Rolls",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWVeW4kj1yRvvazl0t5tuOvNxQWK8RwWlfg&s",
    description:
      "Crunchy rolls stuffed with veggies and spices. Served hot with dipping sauce.",
  },
  {
    title: "Chole Bhature",
    image:
      "https://www.shutterstock.com/image-photo/chole-bhature-north-indian-food-600nw-2238261205.jpg",
    description:
      "Spicy chickpea curry served with fluffy fried bhature. A hearty North Indian meal.",
  },
  {
    title: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    description:
      "Stir-fried rice cooked with vegetables and soy sauce. Simple, tasty, and filling.",
  },
  {
    title: "Hakka Noodles",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    description:
      "Long noodles tossed with veggies and sauces. A popular Indo-Chinese dish.",
  },
  {
    title: "Cheese Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description:
      "Juicy veggie patty with melted cheese and fresh veggies. Served in a soft bun.",
  },
  {
    title: "Pav Bhaji",
    image:
      "https://www.secondrecipe.com/wp-content/uploads/2020/12/pav-bhaji-2020.jpg",
    description:
      "Spicy mashed vegetables cooked with butter and pav bhaji masala. Served hot with soft buttered pav.",
  },
  {
    title: "Samosa",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    description:
      "Crispy deep-fried snack filled with spicy potato mixture. A favorite Indian street food.",
  },
];

export default function RecipeFinder() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div id="scroll" className=" max-w-7xl m-auto">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-transparent py-3">
        <h1 className="text-3xl text-center font-bold mt-3 cursor-pointer hover:text-gray-700">
          Find Your Recipe Hear . . .
        </h1>

        <input
          className="w-160 bg-gray-200 border-black text-black border-2 my-4 flex items-center justify-center mx-auto p-3 rounded-full hover:w-180 transition-all duration-400"
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1     sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe, id) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-500 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover border rounded-xl"
              />

              {/* Card Body */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h3>

                <span className="text-sm text-gray-500 block mb-3">
                  {recipe.description}
                </span>
                <div className="flex justify-between items-center border p-2 border-gray-300 rounded-lg bg-gray-50 ">
                  <button className=" bg-green-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-600 transition cursor-pointer">
                    View Recipe
                  </button>
                  <button className="text-2xl cursor-pointer px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200">
                    <i className="fa-regular fa-bookmark  flex text-center justify-center "></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
