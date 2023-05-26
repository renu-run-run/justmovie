// import { useEffect } from "react"
// import { omdb } from '../utils';
// const Search = () => {
   
//     useEffect(_ => {
//         (async _ => {
//          const response = await omdb.get("?q=imagin dragon");
//          console.log(response.albums);
//         })();
//     })

//     return(
//         <>
//          <h1>Search</h1>
//         </>
//     )
// }
// export default Search
import { useEffect, useState } from "react";
import { omdb} from '../utils'
import {Link,  useSearchParams} from 'react-router-dom'

import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SingleSearchCarda from "./SingleSearchCarda";
import {IconButton } from "@mui/material";

const Bodyn = () => {
    const [list , setList] = useState([]);
    const [params] = useSearchParams();
    const [totalRecords, setTotalRecords] = useState(0);

    const navigate = useNavigate();
    useEffect(_=>{
        if(params.has("q") && params.get("q") !== ""){
            setList([]);
        }
    }, [params]);
 
     const loadData = () =>{
        (async _ => {
            const pageNo = Math.floor(list.length / 10) + 1;
            const response =  await omdb.get(`?s=${params.get("q")}&page=${pageNo}`);
             if(response.data.Response === "False"){
                if(pageNo === 1){
                   navigate("/404");
                }else{
                    return;
                }
             }
            setTotalRecords(response.data.totalResults);
            
            setList((orignalList) => {
                return [ ...orignalList, ...response.data.Search ];
            });
            })();
     }

    return (
        <>
       
        <Header/>
        <div >
        
        <Box style={{width:"100%", backgroundColor:"#242425"} } >
        <div style={{width:"100%" , height:"60vh" , backgroundImage: "url('https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png')" }}>
        <Typography>{totalRecords} records found</Typography>

        <Link style={{textDecoration: "none", color:"white"}} to="/likes">
        <Box style={{borderRadius:"5px" ,width:"350px", height:"250px",backgroundColor:"white",margin:"50px",boxShadow:"0 0 10px white",background: "rgba(255,255,255,0.6)",backdropFilter: "blur(0.5px)"}}>
        <Typography  color="black" fontWeight="bold" textDecoration="none" variant="h3" p={2}> Take a look at Watchlist 
        <IconButton size="large" color="error"><FavoriteIcon/></IconButton>
        </Typography>
        </Box>
        </Link>
        </div>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadData}
          hasMore={(totalRecords === 0) || (list.length < totalRecords)}
          
          useWindow={false}
        >
        <Stack container spacing={1} m={2}>

        {list.map((e, idx) =>{
         // console.log(e);
         return(
             //   <p key={idx}>{e.Title}</p>
             
             <SingleSearchCarda  data={e}  key={idx}/>
             
            
         )
        })} 
        </Stack>
        
        </InfiniteScroll>
      </Box>
        </div>
       
        
        </>
        
       
    )
        
}
export default Bodyn;