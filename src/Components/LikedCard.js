import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { omdb } from "../utils";

const LikedCard =({id}) =>{
      const [data, setData] = useState({});
      const navigate = useNavigate();
    useEffect(_=>{
        
        (async _ => {
            const response = await omdb.get(`?i=${id}`);
            setData(response.data);
        })();

    },[id]);
   
    const clicked = () =>{
        navigate(`/detail/${id}`);
    }

    return(
        <>
        
        <Grid item xs={3}>
         <Card>
         <CardActionArea onClick={clicked}>
           <CardMedia
           component="img"
           image={data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
           alt="green iguana"
           />
           <CardContent>
           <Typography variant="h6">
           {data.Title}
           </Typography>
           </CardContent>
           
         </CardActionArea>
          
           </Card>
        </Grid>
          
        </>
    )
}
export default LikedCard
