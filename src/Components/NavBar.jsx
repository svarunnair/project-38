import { Box, Input, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NavMenu from './NavMenu';
import PublicRoutes from '../Routes/PublicRoutes';
import { useStore } from 'react-redux';
import Sidebar from './Sidebar';
import PrivateRoutes from '../Routes/PrivateRoutes';
import Reminder from './Reminder';
import Signup from '../Pages/authPage/Signup';
import Signin from '../Pages/authPage/Signin';

const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid black",
    position:"sticky",
    width:"100%",
    top:0,
    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    display:"flex",
    background:"#0373bc",
  
    // background:"rgba(255, 255, 255, 0.5)",
    // position:"absolute",

    height:100,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxOne = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    width:"15%",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    gap:20,
   
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxTwo = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"28%",
    display:"flex",
    justifyContent:"right",
    alignItems:'center',
    gap:23,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        display:"none"
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxThree = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"20%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      width:"45%",
    },
    [theme.breakpoints.down("md")]: {
        width:"60%",
        paddingLeft:10,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const IconBox = styled(Box)(({ theme }) => ({
   width:"50%",
   cursor:"pointer",
  //  border:"2px solid red",
    
    [theme.breakpoints.down("xl")]: {
      
    },
    [theme.breakpoints.down("lg")]: {
   
    },
    [theme.breakpoints.down("md")]: {
      
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxFour = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"20%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    gap:10,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        display:"none"
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstBox = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    justifyContent:"center",
    gap:10,

    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const SubBox = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    color:"white",
    fontSize:18,
    cursor:"pointer",
    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const SecondBox = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",
    color:"white",
    fontSize:18,
    cursor:"pointer",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxFive = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"20%",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    gap:20,
    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextBox = styled(Typography)(({ theme }) => ({
    color:'white',
    fontSize:15,
    cursor:"pointer",
    display:"flex",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SearchBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"space-between",
    height:"100%",
    alignItems:'center',
    width:"80%",

    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    
    justifyContent:"center",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InputBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    width:"40%",
    padding:20,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  

function NavBar() {
    const navigate=useNavigate()
    const [show,setShow]=useState(false)
    const [menu,setMenu]=useState(false)
    const [showCart,setshowCart]=useState(false)
   
    const token=localStorage.getItem("token")

    const handleAcc=()=>{
      navigate('/signin')
    }

const handleCart=()=>{
   setshowCart(true)
}

const handleNew=()=>{
  if(token){
    navigate('/students')
  }
  else{
    alert("Please Login")
    navigate("/signin")
  }
 
}

const handleSearch=()=>{
    setShow(true)
    
}

const handleInput=(e)=>{
   let value=e.target.value 
   navigate(`/search/${value}`)
}

    const handleIcon=()=>{
        navigate('/home')
    }

    const handleClose=()=>{
      setShow(false)
      navigate('/')
    }

    const handleMenu=()=>{
       setMenu(true)
    }
    const handleStudent=()=>{
      navigate("/students")
    }

    const handleLocation=()=>{
      navigate('/location')
    }
  

    // let show = sessionStorage.getItem("show")

console.log("show",show)

  return (
   <>

     { show===true ? <InnerContainer>
     
     <SearchBox>

      
      <InputBox>
      <SearchIcon/>
     <Input sx={{width:"100%"}} onChange={handleInput}  placeholder='Search our store'/>
      </InputBox>
    
     <CloseIcon onClick={handleClose}/>

     
     
     </SearchBox>

     </InnerContainer>
     
     
     :  <OuterContainer>
        <InnerDiv>
           <BoxOne >
           <SearchIcon onClick={handleSearch} sx={{color:"white",fontSize:28,cursor:"pointer"}}/>
           <LocationOnOutlinedIcon onClick={handleLocation} sx={{color:"white",fontSize:28,cursor:"pointer"}}/>
           </BoxOne>

           <BoxTwo  onMouseEnter={()=>setMenu(false)}>
            <TextBox onClick={handleNew}>What's New </TextBox>
            <TextBox onMouseEnter={handleMenu}>Luggage <ArrowDropDownIcon/></TextBox>
           </BoxTwo>

           <BoxThree  onMouseEnter={()=>setMenu(false)} >
            <IconBox onClick={handleIcon}  as={"img"} src="https://skybags.co.in/cdn/shop/files/Image_1_0c0dbe99-a20b-4621-a8cf-54854a033dbd_140x.svg?v=1695290322"/>
           </BoxThree>


           <BoxTwo  onMouseEnter={()=>setMenu(false)}>
            <TextBox  onMouseEnter={handleMenu}>Backpack<ArrowDropDownIcon/></TextBox>
            <TextBox  onMouseEnter={handleMenu}>Duffles<ArrowDropDownIcon/></TextBox>
            <TextBox onClick={handleStudent}>Student Travel</TextBox>
           </BoxTwo>


           {/* <BoxFour>
            <FirstBox>
                <SubBox sx={{fontSize:15,}}>Backpack<ArrowDropDownIcon/></SubBox>
                <SubBox>Duffles<ArrowDropDownIcon/></SubBox>
                <SecondBox>Student Travel</SecondBox>

            </FirstBox>
           
           </BoxFour> */}

           <BoxFive><PermIdentityOutlinedIcon onClick={handleAcc} sx={{color:'white',fontSize:35,  cursor:"pointer",}}/>
           <ShoppingCartOutlinedIcon onClick={handleCart} sx={{color:'white',fontSize:35,  cursor:"pointer",}}/>
           </BoxFive>

{showCart&&<Sidebar setshowCart={setshowCart}/>}
        </InnerDiv>
        {menu?<NavMenu/>:<></>}
        
    </OuterContainer>}
    <PublicRoutes />
    {token?<PrivateRoutes/>:<Signin/>}
    

    </>
  )
}

export default NavBar