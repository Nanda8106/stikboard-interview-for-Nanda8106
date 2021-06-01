import React from "react";


const DatePicker = ({
    setIsDatePickerOverlay,
     setDates,
     preload,
     setPagenation,
     setSelectedFilter,
}) => {
    
    
     
    const pastWeek = () => {
        let toDate = new Date();
        let fromDate = new Date(new Date().setDate(new Date().getDate() - 7));
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past Week")
        preload()
        
    }
    const pastMonth = () => {
        let toDate = new Date();
        let fromDate = new Date(new Date().setDate(new Date().getDate() - 30));
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past Month")
        preload()
        
    }
    const past3Months = () => {
        let toDate = new Date();
        let fromDate = new Date(new Date().setDate(new Date().getDate() - 90));
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past 3 Months")
        preload()
        
    }
    const past6Months = () => {
        let toDate = new Date();
        let fromDate = new Date(new Date().setDate(new Date().getDate() - 180));
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past 6 Months")
        preload()
       
    }
    const pastYear = () => {
        let toDate = new Date();
        let fromDate = new Date(new Date().setDate(new Date().getDate() - 365));
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past 1 Year")
        preload()
    }
    const past2Years = () => {
        let toDate = new Date();
        let fromDate = new Date(new Date().setDate(new Date().getDate() - 365*10));
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past 2 Years")
        preload()
    }
    const all = () => {
        let toDate = new Date();
        let fromDate = new Date("2006-03-24")
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Past 15 Years")
        preload()
    }

    

    const collectDate = () => {
        let toDate = new Date(document.getElementById("cal-to").value);
        let fromDate = new Date(document.getElementById("cal-from").value);
        setDates({currentDate: toDate, pastDate:fromDate})
        setPagenation({currentPage:1, initialIndex:1, finalIndex:15})
        setSelectedFilter("Selected Dates")
        preload()
    }
    
    return (
        <div className={{width:"100%"}}>
            <p style={{textAlign:"center", color:"rgba(0,0,0,0.4)"}}>This filter doesn't work properly, It will work when you click again on the same filter</p>
            <div className="time">
            <span className="close" id="close" onClick={() => {
                    setIsDatePickerOverlay(false)
                }}>×</span>
                <div className="selected-date">
                    <ul>
                        <li onClick={() => {pastWeek();setIsDatePickerOverlay(false)}}>Past week</li>
                        <li onClick={() => {pastMonth();setIsDatePickerOverlay(false)}}>Past month</li>
                        <li onClick={() => {past3Months();setIsDatePickerOverlay(false)}}>Past 3 months</li>
                        <li onClick={() => {past6Months();setIsDatePickerOverlay(false)}}>Past 6 months</li>
                        <li onClick={() => {pastYear();setIsDatePickerOverlay(false)}}>Past year</li>
                        <li onClick={() => {past2Years();setIsDatePickerOverlay(false); preload()}}>Past 2 years</li>
                        <li onClick={() => {all();setIsDatePickerOverlay(false)}}>Default</li>
                    </ul>
                </div>
                <div>
                    <div className="calendar-form">
                        <div className="from-date">
                            <input type="date" id="cal-from" min="2006-03-24" max="2021-12-12"/>
                        </div>
                        <div className="to-date">
                            <input id="cal-to"  type="date" min="2006-03-25" max="2021-12-13"/>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {collectDate();setIsDatePickerOverlay(false) }}>Go</button>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default DatePicker;