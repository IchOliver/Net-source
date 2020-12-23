import React,{useEffect} from 'react'
import {NextPage} from 'next'
import AboutLandingPage from '../components/About'
const AboutPage:NextPage<{setShow:any}> = props =>{
 const {setShow} = props;
 useEffect(()=>{
     setShow(false);
 })
    return(
        <AboutLandingPage/>
    )
}

export default AboutPage;
