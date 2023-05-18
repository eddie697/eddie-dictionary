import React from "react";
import Data from "./List";
import { useState, useEffect } from "react";

const Usestate = ()=>{
    const [list, setList] = useState([{}]);
    useEffect(()=>{
        setList(Data)
    })
    return(
        <div>
            <h1>List of my Workers</h1>
            <div className="daughter">
                {
                    list.map((li, index)=>{
                        return(
                            <div className="son" key={index}>
                                <p>{li.Id}</p>
                                <p>{li.Name}</p>
                                <p>{li.Address}</p>
                                <p>{li.Gender}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Usestate;
