
import { Box, Button, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postSignup } from '../../Redux/auth/authAction';
import { useNavigate } from 'react-router-dom';



const OuterContainer = styled(Box)(({ theme }) => ({
 
    // border:'2px solid red',
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerDiv = styled(Box)(({ theme }) => ({
 
    // border:'2px solid green',
    width:"28%",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:"80%",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextTitle = styled(Typography)(({ theme }) => ({
 
    fontWeight:600,
    padding:50,
    fontSize:27,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InputText = styled(Typography)(({ theme }) => ({
 display:"flex",
   fontSize:10,
   fontWeight:600,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DetailBox = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
   gap:15,
   display:"flex",
   flexDirection:"column",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DivBox = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerBox = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Signup() {
  const dispatch=useDispatch()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const [first,setFirst]=useState('')
  const [last,setLast]=useState('')
  const [date,setDate]=useState('')
  const [gender,setGender]=useState('')
  const navigate=useNavigate()


  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleFirst=(e)=>{
    let value=e.target.value 
    setFirst(value)
  }
  const handleLast=(e)=>{
    let value=e.target.value 
    setLast(value)
  }
  const handleDate=(e)=>{
    let value=e.target.value 
    setDate(value)
  }
  const handleGender=(e)=>{
    let value=e.target.value 
    setGender(value)
  }
  const handlePhone=(e)=>{
    let value=e.target.value 
    setPhone(value)
  }

  const handleCreate=()=>{
    if(email===""||first===""){
      alert("Kindly fill the all data")
    }
    else{
      if(!email.match(/^[A-Za-z\._\0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         alert("Kindly give the valid Email Id")
      }
      else{
    let data={
      email:email,
      password:password,
      FirstName:first,
      LastName:last,
      mobile:phone,
      DOB:date,
      gender:gender,
    }
    dispatch(postSignup(data))
    alert("Details uploaded successfully")
    navigate('/home')
  }
  }
}

  console.log("gendrrrrrrrrrrrr",gender)



  
  return (
    <OuterContainer>
        <InnerDiv>

        <InnerBox>
            <TextTitle>Create Account</TextTitle>

            <DetailBox>


                <DivBox>

                <InputText>FIRST NAME</InputText>
                <OutlinedInput onChange={handleFirst} sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox>
                <InputText>LAST NAME</InputText>
                <OutlinedInput onChange={handleLast} sx={{height:40,width:"100%"}}/>
                </DivBox>

                <DivBox sx={{display:"flex",}}>
                    <InnerBox>
                    <InputText>GENDER</InputText>


                    <FormControl  variant="standard" sx={{ m: 1,width:70 ,textAlign:"left",border:"1px solid black" }}>
 
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={salutation}
      
          label="Salutation"
        >

        


<MenuItem onChange={handleGender}  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Male</MenuItem>
          <MenuItem value={"Mrs."}>Female</MenuItem>
          <MenuItem value={"Mrss."}>Other</MenuItem>
         
        </Select>
      </FormControl>

                    </InnerBox>
                    <InnerBox >
                    <InputText>D.O.B</InputText>
                   
                  <Input onChange={handleDate} type='date'/>      

                    </InnerBox>

                </DivBox>
                <DivBox>
                <InputText>PHONE</InputText>
                <OutlinedInput onChange={handlePhone} sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox>
                <InputText>EMAIL</InputText>
                <OutlinedInput onChange={handleEmail} sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox>
                <InputText>PASSWORD</InputText>
                <OutlinedInput onChange={handlePassword} sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox sx={{paddingBottom:10,}}>
                    <Button onClick={handleCreate} sx={{color:"white",borderRadius:0,position:"static",background:"black",width:"100%",":hover":{color:"white",background:"black",}}}>Create</Button>
                </DivBox>

            </DetailBox>


        </InnerBox>
        </InnerDiv>
    </OuterContainer>
  )
}

export default Signup