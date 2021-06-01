import React, { useEffect, useState } from "react";
import Base from "./Base";
import Loading from "./Loading";
import axios from "axios"
import LaunchersInfo from "./LaunchersInfo";

const Home = () => {
    const [spacexData, setSpacexData] = useState([]);
    const [loading , setLoading] = useState(false)
    const [dates, setDates] = useState({currentDate : new Date(),pastDate : new Date("2006-03-22")})

    const {currentDate, pastDate} = dates;  // destructure dates

    const preload =  async () => {
        setLoading(true);
        const res= await axios .get(`https://api.spacexdata.com/v3/launches`);
        let data = [];  // temporary storing data
        res.data.map( eachData => {
            let comparedate = new Date(eachData.launch_date_utc)
            if(pastDate < comparedate && currentDate > comparedate){                
                data.push(eachData)   
            } 
        }) 
        setSpacexData(data)
        setLoading(false);
    }
  
    useEffect( () => {
        preload()
    }, [])
  
    
    const upcomingLaunches = async () => {  //fetching upcoming launches data
            setLoading(true)
            const res = await axios .get(`https://api.spacexdata.com/v3/launches/upcoming`);
            setSpacexData(res.data)
            setLoading(false)
    }


    return (
        <Base>
        {loading && (<Loading type="spin" color="#fffff"/>)}
        <LaunchersInfo spacexData={spacexData} setDates={setDates}  upcomingLaunches={upcomingLaunches} preload={preload}/>                 
        </Base>
    )
}

export default Home