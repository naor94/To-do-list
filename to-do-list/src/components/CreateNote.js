import React from "react";
import './CreateNote.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function CreateNote(){

    const subbmitNote= ()=>{
        console.log("fsdgsf")

    }
    return(
        <div> 
            <form className="create-note">
                <input type="text"
                 name="title" 
                 placeholder="Title"/>

                 <textarea
                 name="content"
                 rows="3"
                 placeholder="Take a note..."
                 />
                 <Fab onClick={subbmitNote}>
                 <AddIcon/>
                 </Fab>

                 



            </form> 
            <div className="mission-form">
                <h2>My tasks</h2>

            </div>

            <div className="accomplished-mission-form">
                <h2>Accomplished tasks</h2>

            </div>
        </div>

    )
}
export default CreateNote;