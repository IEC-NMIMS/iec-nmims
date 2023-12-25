import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom';

const DefaultPage=styled(Box)({

})


const BlueFade= styled(Box)({
	height:'600px',
    width:'600px',
    backgroundImage:'linear-gradient(to bottom right,rgba(0, 80, 217,1)40%, rgba(0,212,255,1)80%,rgba(0, 232, 255)10%,#000 )',
    borderRadius:'100%',
    filter:'blur(40px)',
    position:'absolute',
    left:'-100px',
    top:'1000px',
})
const OrangeFade=styled(Box)({
	height:'600px',
    width:'600px',
    backgroundImage:'linear-gradient(to bottom right,rgba(241, 227, 180)40%,rgba(251, 130, 59)50%,rgba(255, 92, 0)100%,#000 )',
    borderRadius:'100%',
    filter:'blur(80px)',
    position:'absolute',
    right:'-100px',
    top:'2000px',
})

function App() {
	return (
		<DefaultPage>
			<Navbar></Navbar>
			<BlueFade></BlueFade>
			<OrangeFade></OrangeFade>
			
		</DefaultPage>
	)
}

export default App;
