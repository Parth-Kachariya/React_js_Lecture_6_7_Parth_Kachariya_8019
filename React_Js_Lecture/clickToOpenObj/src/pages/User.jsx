import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userdata = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        const data = res.data;
        setUser(data.users);
      } catch (err) {
        console.log(err);
      }
    };
    userdata();
  }, []);

  return (
    <>
      <Card userdata={user} />
    </>
  );
};

export default User;
