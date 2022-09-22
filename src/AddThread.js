import React ,{useState,useContext} from "react";
import { ThreadContext } from "./ThreadContext";
import './AddThread.css';

const AddThread = () =>{
    const [title , setTitle] = useState();
    const [content , setContent] = useState();
    const [threads, setThreads] = useContext(ThreadContext);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateContent = (e) => {
        setContent(e.target.value);
    }

    const addThread = e => {
        e.preventDefault();
        setThreads(prevThreads => [...prevThreads, {title : title, content : content}]); // make copy of previous object
        $("myForm").style.display = "none";
    };

    const closeForm = () => {
        $("myForm").style.display = "none";
    }
    const openForm = () => {
        $("myForm").style.display = "block";
    }

    function $(id)
      {
        return document.getElementById(id); // <--- I don't actual know how this work
      }
    
    return (
        <div>
        <button onClick={openForm}>Create Post</button>
        <div className="form-popup" id="myForm">
            <form className="form-container" onSubmit={addThread}>
            <input className="title"
            type="text" 
            name="title" 
            placeholder="Title"
            value={title} 
            onChange={updateTitle}/><br/>
            <textarea className="text"
            type="text" 
            name="content"
            placeholder="Text(optional)" 
            value={content} 
            onChange={updateContent}/>
            <br/>
            <div className='button'>
                <button type="submit" >Save</button><br/>
                <button type='button' onClick={closeForm}>Close</button>
            </div>
        </form>
        </div>
        
        </div>
    );
};

export default AddThread;