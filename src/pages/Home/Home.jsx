import { useEffect, useState } from "react"
import axios from "axios"
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"


const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""} ${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjQ4YzY1N2YwMjdmM2I2MDY0Y2EyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTUxNDUyNiwiZXhwIjoxNjUxNjAwOTI2fQ.2HlNLzguQnwOrgBMzl4t0C6v1wYAT5hcSLops1Y2HsE"
          }
        })

        console.log(res.data)
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [type, genre])

  return (
    <div className="home">
        <Navbar/>
        <Featured type={type} />

        {
          lists.map((list) => (
            <List list={list}/>
          ))
        }
        
       
    </div>
  )
}

export default Home
