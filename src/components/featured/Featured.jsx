import './featured.scss'
import pain from '../../pics/pain.jpg'
import pain_1 from '../../pics/pain_1.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className='featured'>

        {type && (
            <div className="category">
                <span>
                    {type === "movie" ? "Movies" : "TV Series"}
                </span>    
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horor">Horor</option>
                    <option value="romance">Romance</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
                
            </div>
        )}

        <img src={pain} alt="" />

        <div className="info">

            <img src={pain_1} alt="" />
            
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis, rem dolorum? Odio unde accusantium, nam similique tenetur error sed hic aut molestiae animi. 
                Cupiditate, ipsa velit libero cumque fugit adipisci?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>
            </div>

        </div>
      
    </div>
  )
}

