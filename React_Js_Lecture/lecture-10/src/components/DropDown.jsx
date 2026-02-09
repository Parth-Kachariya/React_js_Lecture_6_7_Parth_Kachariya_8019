import {useState} from 'react'
import aboutMenuData from '../components/Data/aboutMenuData';

const DropDown = () => {
  const [openItem, setOpenItem] = useState(null);
  console.log(aboutMenuData);

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl z-40">
      <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-4 gap-8">
        {aboutMenuData.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold mb-4">{section.title}</h3>

            {section.items.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() =>
                    setOpenItem(openItem === item.name ? null : item.name)
                  }
                  className="block text-left hover:text-cyan-500"
                >
                  {item.name}
                </button>

                {openItem === item.name && (
                  <ul className="ml-4 mt-2 space-y-1 text-gray-600">
                    {item.subItems.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown
