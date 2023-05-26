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
import {useSearchParams} from 'react-router-dom'
import SingleSearchCard from "../Components/SingleSearchCard";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";

import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Search = () => {
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
        <Typography>{totalRecords} records found</Typography>
        
        <InfiniteScroll
          pageStart={1}
          loadMore={loadData}
          hasMore={(totalRecords === 0) || (list.length < totalRecords)}
          
          useWindow={false}
        >
        <Grid container spacing={2} sx={{ flexGrow: 1 }} >

        {list.map((e, idx) =>{
         // console.log(e);
         return(
             //   <p key={idx}>{e.Title}</p>
             <Grid sx={4} m={4}>
             <SingleSearchCard  data={e}  key={idx}/>
             </Grid>
            
         )
        })} 
        </Grid>
        
        </InfiniteScroll>
      </Box>
        </div>
       
        
        </>
        
       
    )
        
}
export default Search;