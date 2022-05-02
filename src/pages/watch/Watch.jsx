import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {

  const location = useLocation()
  const movie = location.movie
  return (
    <div className='watch'>
      <Link to="/" className='link'>
        <div className="back">
          <ArrowBackIcon/>
              Home
        </div>
        </Link>   
        <video 
            className='video' 
            autoPlay progress controls 
            src={movie.video}
        />
    </div>
  )
}
