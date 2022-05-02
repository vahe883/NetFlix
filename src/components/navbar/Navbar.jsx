import "./navbar.scss"
import pic from '../../pics/pic.jpg'
import Search from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScroled, setIsScroled] = useState(false)
    window.onscroll = () => {
        setIsScroled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null) 
    }

  return (
    <div className={isScroled ? "navbar scroled" : "navbar"}>

      <div className="container">
          
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />

          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>TV Series</span>
          </Link>
          <Link to="/movies" className="link" >
            <span>Movies</span>
          </Link>
          
          <span>New and Popular</span>
          <span>My List</span>
        </div>

        <div className="right">

            <Search className="icon"/>

            <span className="">KID</span>

            <NotificationsIcon className="icon"/>

            <img src={pic} alt="" />

            <div className="profile">

                <ArrowDropDownIcon className="icon"/>

                <div className="options">
                    <span>Settings</span>
                    <span>LogOut</span>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
