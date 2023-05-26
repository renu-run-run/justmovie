import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Link } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const Header = () => {


   const navigate = useNavigate();

   const KeyPressed =(e)=>{
    
    if(e.code === "Enter"){

    const query = e.target.value;
    navigate(`/search?q=${query}`)
    console.log(query);

    }

   }
    return(
      <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"black",width:"100%"}} position="static">
        <Toolbar>
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <Link to="/" style={{textDecoration: "none", color:"white"}}>
           
           </Link>
          </Typography>
          

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search the Movie.."
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={KeyPressed}
            />
          </Search>
          &nbsp; &nbsp;
          <button style={{color:"White", fontSize:"15px", backgroundColor:"black", padding:"10px",border:"none", fontWeight:"bold"}}>Login</button>
          <button style={{color:"White", fontSize:"15px", backgroundColor:"black", padding:"10px",border:"none", fontWeight:"bold"}}>Sign up</button>
        </Toolbar>
        
      </AppBar>
    </Box>
    )
}

export default Header



