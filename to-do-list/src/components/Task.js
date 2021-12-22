import React from "react";
import './Task.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';


const Task=(props)=>{

    const doneTask=()=>{

    }

    const deleteTask=()=>{
        props.onDelete(props.index)

    }



return(

    <div className= "task">
        {props.text}  
        
        <div className="done-task">
        <Fab onClick={doneTask}>
        <CheckCircleOutlineIcon/>
        </Fab> 
        </div>
        <div className="delete-task">

        <Fab onClick={deleteTask}>
        <DeleteIcon/>   
        </Fab>
        </div>
</div>
)



}

export default Task;