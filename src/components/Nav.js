import React ,  {useContext} from 'react';
import './Thread.css';
import './Nav.css'
import { ThreadContext } from '../ThreadContext';
import { UserAuth } from '../authContext';


const Nav = () => {
    const [threads, setThreads] = useContext(ThreadContext);
    const {signIn} = UserAuth();
    return(
        <div className='userdash'>
        <h3>Hello Mr.Teo</h3>
        <p>Thread count : {threads.length} </p>
        <button
            onClick={()=>{
                signIn();
            }}
        >SignIn</button>
        </div>
    )
}

export default Nav;