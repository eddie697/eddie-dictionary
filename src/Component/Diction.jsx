import React, {useState} from "react";
// import axios from "axios"
import axios from "axios";


const Diction =()=>{
    const [diction, setDiction] = useState("")
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    const handleSubmit =async (e)=>{
        e.preventDefault();
        if (!search) {
            setError("please input a word")
        }

        try {
            const base_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
            const response = await axios.get(base_url)
            setDiction(response.data)
        } catch (error) {
            setError("Word not found")
            
        }
    }

    return(
        <div className="okay">
            <h1>Eddie's Dictionary</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={search}
                onChange={(event)=>setSearch(event.target.value)}
                placeholder="Please input your word"
                name=""
                id=""/>
                <button type="submit">submit</button>
            </form>
            {
                error&&(
                    <p className="err">{error}</p>
                )
            }

            <div>
                {
                    diction &&(
                        <p>{diction[0].phonetic}</p>
                    )
                }
            </div>
            <div className="meaning">
                {
                    diction &&(
                        diction.map((dict, index)=>(
                            dict.meanings.map(meaning=>(
                                <div>
                                    {
                                        meaning.definitions.map(definition =>(
                                            <p>{definition.definition}</p>
                                        ))
                                    }
                                </div>
                            ))
                        ))
                    )
                }
            </div>
            <div>
                
                {
                    diction && (
                        diction.map((dict, index)=>(
                            dict.meanings.map(meaning =>(
                                <div key={index}>
                                {
                                    meaning.definitions.map(define=>{
                                        <p>{define.example}</p>
                                    })
                                }
                             </div>   
                            ))
                        ))
                    )
                }
            </div>


        </div>
    )
}
export default Diction;