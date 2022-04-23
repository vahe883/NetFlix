import './watch.scss'
import trailer from '../../trailer/MaxPayne.mp4'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video 
            className='video' 
            autoPlay progress controls 
            src={trailer}
        />
    </div>
  )
}
