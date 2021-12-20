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
        </div>

    )
}
export default CreateNote;