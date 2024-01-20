import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    border:"2px solid black",
    display:"flex",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
    width:"100%",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DetailBox = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    width:"50%",
    height:"100%",
    textAlign:"left",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    width:"50%",
    height:"100%",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetail = styled(Typography)(({ theme }) => ({
    border:"2px solid green",

   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DetailImage = styled(Box)(({ theme }) => ({
    border:"2px solid blue",
    borderRadius:10,
    width:"10%",


   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


function Detail() {

    const params=useParams()
    const detail=useSelector((store)=>store.data.getDetailData)
    const dispatch=useDispatch()

    console.log("detail",detail)

  console.log("params",params)


  useEffect(()=>{
    dispatch(getDetail(params.id))
  },[])
  return (
    <OuterContainer>

        <InnerContainer>

        
        <ImageContainer>
        {/* <ImageBox as={"img"} src={detail.images[0]}/> */}

        </ImageContainer>

        <DetailBox>

<TextDetail sx={{paddingTop:5,}}>{detail.name}</TextDetail>
<TextDetail sx={{display:"flex",color:"#00008B",fontWeight:600}}>₹{detail.price}.00<TextDetail sx={{fontSize:8,color:"black"}}>Inclusive of all taxes</TextDetail></TextDetail>
<TextDetail>colour-Black</TextDetail>
{/* <DetailImage as={"img"} src={detail.images[0]}/> */}





        </DetailBox>




        </InnerContainer>


    </OuterContainer>
  )
}

export default Detail