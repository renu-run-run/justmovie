import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';



// <Link to={`/detail/${data.imdbID}`}>
// <Typography component="div" variant="h5">
// {data.Title}
// </Typography>
// </Link>

const SingleSearchCard = ({data}) =>{
  const [showSkeleton, setShowSkeleton] = useState(true);
 


    useEffect(_=>{
      setTimeout(_=> setShowSkeleton(false), 0);
    });
    
    return (
      <>
     
      {showSkeleton ? "" : (
        <Card sx={{ display: 'flex',backgroundColor:"#313030" }}>
        <Link to={`/detail/${data.imdbID}`}>
          <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
          alt="Live from space album cover"
          />
        </Link>
       
        
            <CardContent>
              <Stack spacing={2} alignItems="flex-start" justifyContent="flex-start">
             
                
                <Typography variant="subtitle1" color="white" component="div">
                 Released {data.Year}
                </Typography>
                <Chip label={data.Type}  sx={{textTransform: "capitalize",color:"white"}}/>
                 
                    
         
              </Stack>
             
            </CardContent>
            
          
          
        </Card>

      )}
      
   
      
      
      
      </>
      
      );
}
export default SingleSearchCard;



