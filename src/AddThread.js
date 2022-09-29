import React ,{useState,useContext} from "react";
import { ThreadContext } from "./ThreadContext";
import './AddThread.css';
import image from "./img/image.png";
import link from "./img/link.png";
import poll from "./img/poll.png";
import post from "./img/post.png";
import talk from "./img/talk.png";

const AddThread = () =>{
    const [title , setTitle] = useState('');
    const [content , setContent] = useState('');
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
        setTitle('');
        setContent('');
        $("myForm").style.display = "none";
    };

    var recursiveOpening = 0;

    const closeForm = () => {
        $("myForm").style.display = "none";
        
    }
    const openForm = () => {
        if(recursiveOpening%2==0){
            $("myForm").style.display = "block";
            recursiveOpening++;
        }
        else{
            $("myForm").style.display = "none";
            recursiveOpening++;
        }
        setBlank("post","postElement");
    }

    const setBlank = (top, desc) => {
        const find_top = ["post","image","link","poll","talk"];
        for(let item of find_top){
            if(item != top)
                $(item).style.backgroundColor = 'white';
            else
                $(item).style.backgroundColor = 'rgb(206, 246, 255)';
        }
        const find_desc = ["postElement", "imageElement", "linkElement"
        , "pollElement", "talkElement"];
        for(let item of find_desc){
            if(item != desc)
                $(item).style.display = 'none';
            else
                $(item).style.display = 'block';
        }
    }

    const postClicking = () => {
        setBlank("post","postElement");
    }
    const imageClicking = () => {
        setBlank("image","imageElement");
    }
    const linkClicking = () => {
        setBlank("link","linkElement");
    }
    const pollClicking = () => {
        // setBlank("poll","pollElement");
    }
    const talkClicking = () => {
        // setBlank("talk","talkElement");
    }

    function $(id)
      {
        return document.getElementById(id); // <--- I don't actual know how this work
      }
    
    return (
        <div><br/>
        <button className="topic" onClick={openForm}>+ Create Post</button>
        <div className="form-popup" id="myForm">
            <form className="form-container" onSubmit={addThread}>
            <input className="title"
            type="text" 
            name="title" 
            placeholder="Title"
            value={title} required
            onChange={updateTitle}/><br/>
            <div className="menu">
                <button id="post" type="button" className="bar" onClick={postClicking}>
                    <img src={post}/>
                    <b>Post</b>
                </button>
                <button id="image" type="button" className="bar" onClick={imageClicking}>
                    <img src={image} />
                    <b>Image & Video</b>
                </button>
                <button id="link" type="button" className="bar" onClick={linkClicking}>
                    <img src={link} />
                    <b>Link</b>
                </button>
                <button id="poll" type="button" className="bar" onClick={pollClicking}>
                    <img src={poll} />
                    <b>Poll</b>
                </button>
                <button type="button" className="bar" onClick={talkClicking} id="talk">
                    <img src={talk} />
                    <b>Talk</b>
                </button>
            </div>
            
            <div id="postElement">
                <textarea className="barCss barEl"
                type="text" 
                name="content"
                placeholder="Text(optional)" 
                value={content}
                required
                onChange={updateContent}/>
            </div>
            <div id="imageElement" className="barEl">
                <p>Drag and drop images or </p>
               <input type="file" name="file" id="file"/>
            </div>
            <div id="linkElement">
                <textarea className="barCss barEl" 
                type="text"
                name="link"
                placeholder="Url"
                value={content}
                required
                onChange={updateContent} />
            </div>
            <div id="pollElement">

            </div>
            <div id="talkElement">

            </div>
            
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