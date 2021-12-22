import React from "react";
import './Task.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';


const Task=(props)=>{

    const doneTask=()=>{
        deleteTask()
        props.onAddToAccomplishList(props.text)

    }

    const deleteTask=()=>{
        props.onDelete(props.index)
    }

    const deleteCompletedTask=()=>{
        props.onDeleteCompletedTask(props.index)
    }



return(

    <div className= "task">
        {props.text}  
        
        <div className="done-task">
        
        {props.type === "Incomplete task"?<Fab onClick={doneTask}> <CheckCircleOutlineIcon/></Fab>: <></>}
    
        </div>
        <div className="delete-task">

        {props.type === "Incomplete task"?<Fab onClick={deleteTask}>
        <DeleteIcon/> </Fab> : <Fab onClick={deleteCompletedTask}> <DeleteIcon/>  </Fab> }

        
        </div>
</div>
)



}

export default Task;