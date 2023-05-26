import { Link, Outlet } from 'react-router-dom'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';



const Home = () => {
    return(
        <>
          <div className="home-container">
             <div  className="home-left-panel">
             <br/>
             <img src="https://www.nicepng.com/png/detail/436-4369539_movie-logo-film.png" alt="pro" width={150} height={45}/>
             <Link style={{textDecoration: "none", color:"white"}} to="/body"><div style={{display:"flex", alignItems:"center",textAlign:"center", marginLeft:"6rem"}}><div><HomeIcon fontSize="large" sx={{ color: "white" }} /></div> <div><h3> Home</h3></div></div> </Link> 

             <Link style={{textDecoration: "none", color:"white"}} to="/search"> <div style={{display:"flex", alignItems:"center",textAlign:"center", marginLeft:"6rem"}}><div><SearchIcon fontSize="large" sx={{ color: "white" }} /></div> <div><h3> Search</h3></div></div></Link>

             <Link style={{textDecoration: "none", color:"white"}}  to="/likes"> <div style={{display:"flex", alignItems:"center",textAlign:"center", marginLeft:"6rem"}}><div><FavoriteIcon fontSize="large" sx={{ color: "white" }} /></div> <div><h3> Likes</h3></div></div> </Link> 
             
             <Link style={{textDecoration: "none", color:"white"}} to="/likes"> <div style={{display:"flex", alignItems:"center",textAlign:"center", marginLeft:"6rem"}}><div><PlaylistAddIcon fontSize="large" sx={{ color: "white" }} /></div> <div><h3> WatchList</h3></div></div></Link> 
              
              <div>
               <p>legal</p><p>PrivacyCenter</p>
               <p>about adds</p><p>Privacy Policy</p>
              </div>
             </div>
             <div className="home-right-panel">
             <Outlet/>
             </div>
          </div>
        </>
    )
}

export default Home