
import { Box, Button, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, Typography, styled } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';



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
    [theme.breakpoints.down("md")]: {},
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
  return (
    <OuterContainer>
        <InnerDiv>

        <InnerBox>
            <TextTitle>Create Account</TextTitle>

            <DetailBox>


                <DivBox>

                <InputText>FIRST NAME</InputText>
                <OutlinedInput sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox>
                <InputText>LAST NAME</InputText>
                <OutlinedInput sx={{height:40,width:"100%"}}/>
                </DivBox>

                <DivBox sx={{display:"flex",}}>
                    <InnerBox>
                    <InputText>GENDER</InputText>


                    <FormControl variant="standard" sx={{ m: 1,width:70 ,textAlign:"left",border:"1px solid black" }}>
 
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={salutation}
        //   onChange={handleChange}
          label="Salutation"
        >


<MenuItem  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Male</MenuItem>
          <MenuItem value={"Mrs."}>Female</MenuItem>
          <MenuItem value={"Mrs."}>Other</MenuItem>
         
        </Select>
      </FormControl>

                    </InnerBox>
                    <InnerBox >
                    <InputText>D.O.B</InputText>
                   
                  <Input type='date'/>      

                    </InnerBox>

                </DivBox>
                <DivBox>
                <InputText>PHONE</InputText>
                <OutlinedInput sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox>
                <InputText>EMAIL</InputText>
                <OutlinedInput sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox>
                <InputText>PASSWORD</InputText>
                <OutlinedInput sx={{height:40,width:"100%"}}/>
                </DivBox>
                <DivBox sx={{paddingBottom:10,}}>
                    <Button sx={{color:"white",borderRadius:0,background:"black",width:"100%",":hover":{color:"white",background:"black"}}}>Create</Button>
                </DivBox>

            </DetailBox>


        </InnerBox>
        </InnerDiv>
    </OuterContainer>
  )
}

export default Signup