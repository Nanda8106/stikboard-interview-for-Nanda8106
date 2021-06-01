import React from "react";
import Nasa from "../nasa.png"
import { ExternalLink } from 'react-external-link';

const DetailsOverLay = ({
    eachSpacexData,
    setIsDetailsOverlay
}) => {
    
   
    
    const imageUrl = eachSpacexData.links.mission_patch 
    
    return (
        <div className={{width:"100%"}}>              
                <div className="rocket-details">
                <span className="close" id="close" onClick={() => {
                    setIsDetailsOverlay(false)
                }}>×</span>
                    <div className="rocket-header">
                        <img src={imageUrl} width="60" height="70" alt=""/>
                        <div className="rocket-name">
                            <h3>{eachSpacexData.mission_name}</h3>
                            <span>{eachSpacexData.rocket.rocket_name}</span><br/>
                            <span><img src={Nasa} width="16" height="16" alt=""/><i className="fa fa-wikipedia-w"></i><i className="fa fa-youtube-play"></i></span>
                        </div>
                        <div>
                        {eachSpacexData.upcoming ? (<p className="upcoming">Upcoming</p>) : (eachSpacexData.launch_success ? (<p className="failed">Failed</p>) : (<p className="success">Success</p>))}
                        </div>
                    </div>
                    <div className="rocket-info">
                        <p>{eachSpacexData.details}.<ExternalLink href={`https://en.wikipedia.org/wiki/${eachSpacexData.mission_name}`}>Wikipedia</ExternalLink></p>
                    </div>
                    <div className="rocket-detailed-info">
                        <ul>
                            <li><span>Flight Number</span><span>{eachSpacexData.flight_number}</span></li>
                            <li><span>Mission Name</span><span>{eachSpacexData.mission_name}</span></li>
                            <li><span>Rocket Type</span><span>{eachSpacexData.rocket.rocket_type}</span></li>
                            <li><span>Rocket Name</span><span>{eachSpacexData.rocket.rocket_name}</span></li>
                            <li><span>Manufacturer</span><span>{eachSpacexData.rocket.second_stage.payloads[0].manufacturer}</span></li>
                            <li><span>Nationality</span><span>{eachSpacexData.rocket.second_stage.payloads[0].nationality}</span></li>
                            <li><span>Launch Date</span><span>{eachSpacexData.launch_date_utc.substr(0, 10)} {eachSpacexData.launch_date_utc.substr(12, 4)}</span></li>
                            <li><span>Payload Type</span><span>{eachSpacexData.rocket.second_stage.payloads[0].payload_type}</span></li>
                            <li><span>Orbit</span><span>{eachSpacexData.rocket.second_stage.payloads[0].orbit}</span></li>
                            <li><span>Launch Site</span><span>{eachSpacexData.launch_site.site_name}</span></li>
                        </ul>
                    </div>
                    
                </div>
            
           
        </div>
    )
}

export default DetailsOverLay;