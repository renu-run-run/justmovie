import { Box, Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import useLocalStorage from "use-local-storage";

import LikedCard from "./LikedCard";
import Nav from "./Nav";


const LikedSongs = () =>{
    const [favourites] = useLocalStorage("favourites", "[]");
    return(
        <>
        <Nav/>
        <Box p={4} style={{backgroundColor:"#313030"}}>
        <Typography color="white" fontWeight="bold" variant="h5" textAlign="center">Welcom to my collection</Typography>
        <hr />
        <br />
        
        <Masonry columns={4} spacing={5} >
              {JSON.parse(favourites).map((e,i) =>{
                return <LikedCard id={e} key={i}/>
              })}
        </Masonry>
        
       
        </Box>
        
        
        </>
        

    )
}

export default LikedSongs