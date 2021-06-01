import React, {useState} from "react";
import DetailsOverLay from "./DetailsOverlay";
import Modal from "react-modal"
import DatePicker from "./DatePicker";
import Pagenation from "./Pagenation";

Modal.setAppElement("#root")
const LaunchersInfo = ({
    spacexData,
    preload,
    upcomingLaunches,
    setDates
}) => {

    const [isDetailsOverlay , setIsDetailsOverlay] = useState(false);
    const [isdatePickerOverlay , setIsDatePickerOverlay] = useState(false);
    const [eachSpacexData, setEachSpacexData] = useState("");
    const [pagenation, setPagenation] = useState({currentPage: 1,dataperpage : 15,initialIndex : 1,finalIndex: 15})
    const [selectedFilter, setSelectedFilter] = useState("Past 15 Years")
  
    
    const {currentPage, initialIndex, finalIndex} = pagenation;

    
    // Filter selection code
    const filterData = () => {
        let filterType = document.getElementById("filter").value;
        if(filterType === "all"){
            preload()
            document.getElementById("table").style.display ="";
            document.getElementById("no_result").style.display ="none";
            
        }else if(filterType === "upcoming"){
            upcomingLaunches()
            document.getElementById("table").style.display ="";
            document.getElementById("no_result").style.display ="none";
        }else{
            document.getElementById("table").style.display ="none";
            document.getElementById("no_result").style.display ="block";
            document.getElementById("no_result").innerHTML = "No result found for the "+filterType+" filter";
        }
    }
    
    // previous and next button code
    const currentPageData = spacexData.slice(initialIndex-1, finalIndex);
    const decrementByOne = () => {
        setPagenation({initialIndex:initialIndex - 15, finalIndex: finalIndex - 15,currentPage: currentPage-1})      
    }
    const incrementByOne = () => {
        setPagenation({initialIndex:initialIndex + 15, finalIndex: finalIndex + 15, currentPage: currentPage+1})        
    }


    return (
        <div>
            {/* modal for rocket details */}
            {isDetailsOverlay && (
                <Modal isOpen={isDetailsOverlay} onRequestClose={()=> setIsDetailsOverlay(false)} style={{overlay:{backgroundColor:"rgba(0,0,0,0.3)"},content:{width:"50%",height:"90%",top:"10px", margin:"0 auto", minWidth:"500px"}}}>
                <DetailsOverLay eachSpacexData={eachSpacexData} setIsDetailsOverlay={setIsDetailsOverlay} />
            </Modal>
            )}

            {/* Overlay date picker */}
            {isdatePickerOverlay && (
                <Modal isOpen={isdatePickerOverlay} onRequestClose={()=> setIsDatePickerOverlay(false)} style={{overlay:{backgroundColor:"rgba(0,0,0,0.3)"},content:{width:"50%",height:"45%",top:"200px",minWidth:"600px", margin:"0 auto"}}}>
                <DatePicker setPagenation={setPagenation} setSelectedFilter={setSelectedFilter} setDates={setDates} preload={preload} setIsDatePickerOverlay={setIsDatePickerOverlay} />
            </Modal>
            )}
            
            <div className="data">
                <div className="selection">
                    <div className="left-side" onClick={() => {setIsDatePickerOverlay(true)}}>
                        <i className="fa fa-calendar-o"></i>{selectedFilter} <i  className="fa fa-angle-down"></i>                 
                    </div>
                    <div className="right-side">
                        <i className="fa fa-filter"></i><select name="" id="filter" onChange={() => {setPagenation({currentPage:1, initialIndex:1, finalIndex:15})}} onClick={() => {filterData()}}>
                            <option value="all" selected>All Launches</option>
                            <option value="upcoming" >Upcoming Launches</option>
                            <option value="successful" >Successful Launches</option>
                            <option value="failed" >Failed Launches</option>
                        </select>
                    </div>
                </div>
                <div className="details">
                    <table width="100%" id="table">
                        <tr className="header" height="50px;">
                            <th>No:</th>
                            <th>Launched (UTC)</th>
                            <th>Location</th>
                            <th>Mission</th>
                            <th>Orbit</th>
                            <th>Launch Status</th>
                            <th>Rocket</th>
                        </tr>

                        {/* Data  */}
                        {currentPageData.map( (eachSpacexData, index) => {         
                            return (
                                <tr className="tr" key={index} onClick={() => {setIsDetailsOverlay(true); setEachSpacexData(eachSpacexData)}}>
                                    <th>{eachSpacexData.flight_number}</th>
                                    <th>{eachSpacexData.launch_date_utc.substr(0, 10)} {eachSpacexData.launch_date_utc.substr(12, 4)}</th>
                                    <th>{eachSpacexData.launch_site.site_name}</th>
                                    <th>{eachSpacexData.mission_name}</th>
                                    <th>{eachSpacexData.rocket.second_stage.payloads[0].orbit}</th>
                                    <th>
                                        {eachSpacexData.upcoming ? (<span className="upcoming">Upcoming</span>) : (eachSpacexData.launch_success ? (<span className="failed">Failed</span>) : (<span className="success">Success</span>))}
                                    </th>
                                    <th>{eachSpacexData.rocket.rocket_name}</th>
                                </tr>
                            )    
                        })}
                    </table>
                    <p className="no-result" id="no_result"></p>
                </div>
                {/* Pagenation component */}
                <Pagenation incrementByOne={incrementByOne} currentPage={currentPage} dataLength={spacexData.length} decrementByOne={decrementByOne} initialIndex={initialIndex} finalIndex={finalIndex}/>  
            </div>
        </div>
    )

}

export default LaunchersInfo
