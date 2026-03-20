import React, { useEffect, useState }  from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserMainDetail = () => {
  const {id} = useParams()
  const [userData, setUserData] = useState([])
 useEffect(() => {
    const userdata = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        const data = res.data;
        setUserData([data]);
      } catch (err) {
        console.log(err);
      }
    };
    userdata();
  }, []);
  
  return (
    <>
      <Card userdata={userData}/>
    </>
  )
}

export default UserMainDetail