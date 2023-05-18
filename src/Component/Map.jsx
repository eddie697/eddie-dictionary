import React from "react";
import Data from "./List" 

const Map = ()=>{
    return(
        <div>
            <h1>List of My Employee working at Abuja Branch</h1>
            <div className="father">
                {
                    Data.map((particular, index)=>{
                        return(
                            <div key={index} className="worker">
                                <p>{particular.Id}</p>
                                <p>{particular.Name}</p>
                                <p>{particular.Address}</p>
                                <p>{particular.Gender}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Map;