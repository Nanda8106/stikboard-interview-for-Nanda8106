import React from "react";

const Pagenation = ({
    decrementByOne,
    incrementByOne,
    finalIndex,
    initialIndex,
    dataLength,
    currentPage
}) => {
    
    
    
    return (
        
            <div className="next-page">
                {(initialIndex >15) ? (<button  onClick={() => {decrementByOne()}}><i className="fa fa-angle-left"></i></button>) : (<button  disabled><i className="fa fa-angle-left"></i></button>)}
                <span>{currentPage}</span>
                
                {(finalIndex < dataLength) ? (<button onClick={() => {incrementByOne()}}><i className="fa fa-angle-right"></i></button>): (<button disabled><i className="fa fa-angle-right"></i></button>)}
               
        </div>
        
    )
}

export default Pagenation;