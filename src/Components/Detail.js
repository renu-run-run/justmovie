import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { omdb } from "../utils";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import {  Chip, Typography,IconButton } from "@mui/material";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useLocalStorage from "use-local-storage";
import Nav from "./Nav";

const Detail = () => {
   const {id} = useParams();
  
   const navigate = useNavigate();
   const [data, setData] = useState({});
   const [flag, setFlag] = useState(false);

   const [favourites, setFavourites] = useLocalStorage("favourites", "[]");
   const [isFavourite, setFavourite] = useState(false);

   

     useEffect(_ => {
      const favs = JSON.parse(favourites);
      if(favs.includes(id)){
        setFavourite(true);
      }else{
        setFavourite(false);
      }
        
     },[favourites, id]);
     
     
     


     const toggleFavourite = _ =>{
      const favs = JSON.parse(favourites);
      if(isFavourite) {
        const idx = favs.indexOf(id);
        favs.splice(idx,1);
        
        setFavourite(false);

      }else{
        favs.push(id);
        setFavourite(true);
      }

      setFavourites(JSON.stringify(favs));
     }


     

     useEffect(_=>{
     (async _ => {
      const response = await omdb.get(`?i=${id}&plot=full`);
         if(response.data.Response === "False"){
           navigate("/404");
         }else{
          setData(response.data);
         }
     })();

     }, [ id, navigate]);

     useEffect(_=>{
      if(data.Country?.length > 0){
        (async _ => {
          const response = await axios.get(`https://restcountries.com/v3.1/name/${data.Country}?fullText=true`);
          
            setFlag(response.data[0]?.flags?.svg);
          
        })();
      }
     },[data])

    return(
        <>
        <Nav/>
          <Box  p={5}>
              <Stack spacing={3}>
                 <Stack direction="row" spacing={5}>
                   <img src={data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="Poster" />
                   <Box>
                     <Typography variant="h4">
                     {data.Title}
                     &nbsp;
                     <IconButton size="large" color="error" onClick={toggleFavourite}>
                     {isFavourite ? <FavoriteIcon/>:<FavoriteBorderIcon/> }
                     </IconButton>
                     </Typography>
                     <p>Please click the "like" button to add this to your playlist.</p>
                     <Typography variant="h6">
                     Released {data.Year}
                    </Typography> 
                    
                     <Typography variant="h5" mt={3} mb={1}>
                     Crew
                    </Typography> 
                    <Stack direction="row" gap={1} spacing={2} mt={2} sx={{flexWrap:"wrap"}} justify-content="flex-start" align-item="flex-start">
                    {data.Actors?.split(", ").map((e,i) =>{
                      return <Chip key={i} label={e} />
                    })}
                    {data.Writer?.split(", ").map((e,i) =>{
                      return <Chip key={i} label={e} />
                    })}

                    <Chip label={data.Director} />
                    
                    </Stack>
                   <Stack mt={2} direction="row" spacing={2} alignItems="center">
                      <img src={flag.toString()} alt="Flag" height={40} style={{outline: "1px solid" , outlineOffset: "2px", }}/>
                      <Typography variant="overline">
                      {data.Country}
                      </Typography>
                   </Stack>
                   
                   </Box>
                  
                 </Stack>
                
                 <Typography variant="h4">
                 Plot:
                 </Typography>
                 <Typography  align="justify" variant="h6">
                 {data.Plot}
                 </Typography>
              </Stack>
            
          </Box>
        </>
    )
} 
export default Detail