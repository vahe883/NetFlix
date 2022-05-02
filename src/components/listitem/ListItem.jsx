import './listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Listitem({index, item}) {

  const [isHover, setIsHover] = useState(false)
  const [isData, setIsData] = useState({})

  useEffect(()=>{
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/"+item,  {
          headers: {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjQ4YzY1N2YwMjdmM2I2MDY0Y2EyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTUxNDUyNiwiZXhwIjoxNjUxNjAwOTI2fQ.2HlNLzguQnwOrgBMzl4t0C6v1wYAT5hcSLops1Y2HsE"
          }
        })
        setIsData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovie()
  },[item])
  
  return (
    <Link to={{pathname:"/watch", movie:isData}}>
      <div 
        className='listitem' 
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)}
        style={{left: isHover && index * 225 - 50 + index * 2.5}}
      >
        <img src={isData.img} alt="" />

        {isHover && (
          <div>
          
            <video src={isData.trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon className='icon'/>
                    <AddIcon className='icon'/>
                    <ThumbUpOutlinedIcon className='icon'/>
                    <ThumbDownAltOutlinedIcon className='icon'/>
                </div>
                <div className="itemInfoTop">
                  <span>{isData.duration}</span>
                  <span className='limit'>+{isData.limit}</span>
                  <span>{isData.year}</span>
                </div>
                <div className="desc">
                  {isData.desc}
                </div>
                <div className="genre">{isData.genre}</div>
            </div>
          </div>
        )}
          
      </div>
    
    </Link>
    
  )
}
