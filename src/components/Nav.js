import React ,  {useContext} from 'react';
import './Thread.css';
import './Nav.css'
import { ThreadContext } from '../ThreadContext';


const Nav = () => {
    const [threads, setThreads] = useContext(ThreadContext);

    return(
        <div className='userdash'>
        <h3>Hello Mr.Teo</h3>
        <p>Thread count : {threads.length} </p>
        </div>
    )
}

export default Nav;