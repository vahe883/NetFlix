import './listitem.scss'
import trailer from '../../trailer/MaxPayne_Item.mp4'
import pain_1 from '../../pics/pain_1.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from 'react';

export default function Listitem({index}) {

  const [isHover, setIsHover] = useState(false)
  
  return (
    <div 
      className='listitem' 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}
      style={{left: isHover && index * 225 - 50 + index * 2.5}}
    >
      <img src={pain_1} alt="" />

      {isHover && (
        <div>
         
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
              <div className="icons">
                  <PlayArrowIcon className='icon'/>
                  <AddIcon className='icon'/>
                  <ThumbUpOutlinedIcon className='icon'/>
                  <ThumbDownAltOutlinedIcon className='icon'/>
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>2006</span>
              </div>
              <div className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dignissimos, dicta, dolore officia asperiores.
              </div>
              <div className="genre">Action</div>
          </div>
        </div>
      )}
        
    </div>
  )
}
