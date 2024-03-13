import { InputOutlined } from '@mui/icons-material';
import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postSignin } from '../../Redux/auth/authAction';
import RefreshIcon from '@mui/icons-material/Refresh';

const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    width:"30%",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:"70%",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InputDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid yellow",
    paddingBottom:100,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TitleBox = styled(Typography)(({ theme }) => ({
    padding:50,
    fontWeight:900,
    fontSize:25,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
//   border:"2px solid red",
  paddingTop:80,
  display:"flex",
  cursor:"pointer",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InputText = styled(Typography)(({ theme }) => ({
display:"flex",
cursor:"pointer",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DivBox = styled(Typography)(({ theme }) => ({
    display:"flex",
    // border:"2px solid red",
    justifyContent:'space-between',
    
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {

        },
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));
  const ButtonBox = styled(Button)(({ theme }) => ({
    display:"flex",
    top:30,
    cursor:"pointer",
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));

function Signin() {

    const navigate=useNavigate('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()



    const handleEmail=(e)=>{
       let value=e.target.value 
       if(value.match(/^[A-Za-z\._\0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         
       }
       setEmail(value)

    }
    const handlePassword=(e)=>{
      let value=e.target.value 
      setPassword(value)
   }

   const handleClick=()=>{
    let data={
      email:email,
      password:password
    }
    dispatch(postSignin(data))
    alert("Signin Successfull")
    navigate('/home')
   }

    const handleCreate=()=>{
        navigate('/signup')
    }
  return (



    <OuterContainer>

        <InnerDiv>

            

            <TitleBox>Login</TitleBox>

            <InputDiv>
            <InputText  sx={{paddingBottom:1,fontSize:10,fontWeight:600,}}>EMAIL</InputText>
            <OutlinedInput  onChange={handleEmail} sx={{width:"100%",height:35,borderRadius:0}}/>
          
           <DivBox>
            <InputText sx={{paddingTop:2,fontSize:10,fontWeight:600,}}>PASSWORD</InputText>
            <InputText sx={{paddingTop:2,justifyContent:'right',fontSize:12}}>Forgot?</InputText>
            </DivBox>
            <OutlinedInput onChange={handlePassword}  sx={{width:"100%",height:35,borderRadius:0}}/>

            <ButtonBox onClick={handleClick} sx={{color:'white',position:"static",background:"black",width:"100%",borderRadius:0,":hover":{color:'white',background:"black"}}}>Sign in</ButtonBox>
            <TextBox onClick={handleCreate}>Create Account</TextBox>
            </InputDiv>
        </InnerDiv>

    </OuterContainer>
  )
}

export default Signin