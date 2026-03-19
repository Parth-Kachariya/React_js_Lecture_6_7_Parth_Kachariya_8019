import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ApiList from "../components/ApiList";

const Home = () => {

  const [apis, setApis] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApis, setFilteredApis] = useState([]);

  const API_URL = "https://api.apis.guru/v2/list.json";

  useEffect(() => {

    const fetchApis = async () => {

      try {

        const res = await fetch(API_URL);
        const data = await res.json();

        const apiArray = Object.keys(data).map((key) => ({
          name: data[key].versions[data[key].preferred].info.title,
          description:
            data[key].versions[data[key].preferred].info.description,
          link: key,
          category: "Public API"
        }));

        setApis(apiArray);
        setFilteredApis(apiArray);

      } catch (error) {
        console.log(error);
      }

    };

    fetchApis();

  }, []);

  useEffect(() => {

    const filtered = apis.filter(api =>
      api.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredApis(filtered);

  }, [search, apis]);

  return (

    <div className="bg-gray-100 min-h-screen">

      <Header />

      <div className="max-w-6xl mx-auto p-6">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <ApiList apis={filteredApis} />

      </div>

    </div>

  );

};

export default Home;