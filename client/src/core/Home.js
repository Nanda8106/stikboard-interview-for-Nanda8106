import React from "react";
import Base from "./Base";


const Home = () => {
    return (
        <Base>
            <div class="data">
            <div class="selection">
                <div class="left-side">
                    <i class="fa fa-calendar-o"></i><select>
                        <option selected value="6">Past 6 Months</option>
                        <option value="10">Past 10 Months</option>
                        <option value="1">Past 1 year</option>
                    </select>
                </div>
                <div class="right-side">
                    <i class="fa fa-filter"></i><select name="" id="">
                        <option value="" selected>All Launches</option>
                    </select>
                </div>
            </div>
            <div class="details">
                <table width="100%">
                    <tr class="header" height="50px;">
                        <th>No:</th>
                        <th onclick="turnOn()">Launched (UTC)</th>
                        <th>Location</th>
                        <th>Mission</th>
                        <th>Orbit</th>
                        <th>Launch Status</th>
                        <th>Rocket</th>
                    </tr>
                    

                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="failed">Failed</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="success">Success</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="upcoming">Upcoming</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="failed">Failed</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="failed">Failed</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="success">Success</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="upcoming">Upcoming</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>
                    <tr class="tr">
                        <th>01</th>
                        <th>24 March 2006 at 22.30</th>
                        <th>Kwajalein Atoll</th>
                        <th>FalconSat</th>
                        <th>LEO</th>
                        <th>
                            <p class="failed">Failed</p>
                        </th>
                        <th>Falcon 9</th>
                    </tr>


                </table>
                <p class="no-result">No results found for the specific filter</p>
            </div>
            <div class="next-page">
                <span><i class="fa fa-angle-left"></i></span>
                <span>1</span>
                <span>2</span>
                <span>...</span>
                <span>10</span>
                <span><i class="fa fa-angle-right"></i></span>
            </div>
        </div>
        </Base>
    )
}

export default Home;