import React, { useState } from 'react';
import './CreateNote.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';


function CreateNote(){

    const [tasks, setTasks] = useState([]);
    const [accomplishedTasks, setAccomplishedTasks] = useState([]);
    const [note, setNote] = useState({title:"", content:""});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            }
        })

    }

    const subbmitNote= (e)=>{
        setTasks(prevTasks=>{
            return [...prevTasks,note]
        });

    }

    const deleteNote=(id)=>{
        setTasks(prevNotes=>{
            return prevNotes.filter((noteItem, index)=>{
                return index!==id;
            });
        });

    }

    const addToAccomplish=(text)=>{

        const newNote={title:"" ,content: text}
        setAccomplishedTasks(prevTasks=>{
            return [...prevTasks,newNote]
        });

    }
     const deleteCompletedNote=(id)=>{
        setAccomplishedTasks(prevNotes=>{
            return prevNotes.filter((noteItem, index)=>{
                return index!==id;
            });
        });

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
                 onChange={handleChange}
                 />
                 <Fab onClick={subbmitNote}>
                 <AddIcon/>
                 </Fab>

                 



            </form> 
             <h1 className="m-task">My Tasks:{tasks.length}</h1>

            <div className="mission-form">
                <h2>My tasks</h2>
                {tasks.map((task,index )=>
                <Task
                type="Incomplete task"
                index={index} 
                text ={task.content}
                onDelete={deleteNote}
                onAddToAccomplishList={addToAccomplish}
                
                />

                )}
               


            </div>


            <div className="accomplished-mission-form">
                <h2>Accomplished tasks</h2>
                {accomplishedTasks.map((task,index)=>
                <Task
                index={index} 
                text ={task.content}
                type="complete task"
                onDeleteCompletedTask={deleteCompletedNote}

                />

                )}
                

            </div>
        </div>

    )
}
export default CreateNote;