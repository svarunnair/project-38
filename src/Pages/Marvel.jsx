import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
   
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({
    border:"2px solid black",
    display:"flex",
    justifyContent:"right",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DataBox = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    width:"70%",
    display:"grid",
    gridTemplateColumns:'repeat(3,1fr)',

  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DataMap = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    width:'100%',
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    border:"2px solid green",
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const MenuBox = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    display:"flex",
    flexDirection:"column",
    width:"20%",
    position:"absolute",
    
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


function Marvel() {
    const mainData=useSelector((store)=>store.data.getMainData)
    const dispatch=useDispatch()


    console.log("mainData",mainData)

    useEffect(()=>{
       dispatch(getData())
    },[])

  return (
    <OuterContainer>
      <MenuBox>
        <Button>dddddd</Button>
        <Button>dddddd</Button>
        <Button>dddddd</Button>
        </MenuBox>


        <InnerDiv>

<DataBox>
    {mainData?.map((item)=>(
        <DataMap>

            <ImageBox as={"img"} src={item.images[0]}/>
            <TextBox>{item.name}</TextBox>
        
        </DataMap>
    ))}


</DataBox>



        </InnerDiv>


    </OuterContainer>
  )
}

export default Marvel