import { Box, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/data/action';
import { useNavigate, useParams } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"right",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const MapData = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    width:"80%",
    padding:30,

    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ImageBox = styled(Box)(({ theme }) => ({
    width:"80%",
    
    ":hover":{width:"100%",transition:"all .2s"},
    
    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextBox = styled(Typography)(({ theme }) => ({
   
    color:"grey",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ItemBox = styled(Box)(({ theme }) => ({
   
    // border:"2px solid red",
 

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Search() {

  const mainData=useSelector((store)=>store.data.getMainData)
  const dispatch=useDispatch()
  const params=useParams()
  const navigate=useNavigate()
  const [image,setImage]=useState(false)

  console.log("paramss",params)

  console.log("mainData",mainData)

  const handleProduct=(id)=>{
     navigate(`/detail/${id}`)
  }
  
  let value=params.id

  const searchData=mainData.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()))

  console.log("searchData",searchData)

  console.log("serchData",searchData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <OuterContainer>

        <InnerContainer>

          <MapData >

            {searchData.map((item)=>(
              <ItemBox>
              <ImageBox onClick={()=>handleProduct(item.id)}  as={"img"} src={item.images[0]}/>
               
                <TextBox>{item.name}</TextBox>
                <TextBox>₹{item.price}.00</TextBox>
              </ItemBox>
            ))}

          </MapData>

        </InnerContainer>


    </OuterContainer>
  )
}

export default Search