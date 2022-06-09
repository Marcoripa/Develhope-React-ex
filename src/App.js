import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import {Counter} from './Counter'
import { ShowGitHubUser } from "./ShowGitHubUser";
import {GitHubUserList} from "./GitHubUserList";


export function App() {
    return (
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/counter'>Counter</Link>
            <Link to='/users'>Users List</Link>
        </nav>
         <Routes>
            <Route path='/' element={<Welcome name='Tony'/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='*' element={<div><p>Not Found</p></div>}/>
            <Route path='/users' element={<GitHubUserList/>} >
               <Route index element={<p>Add a user and select it</p>}/>
               <Route path=':username' element={<ShowGitHubUser />}/>
            </Route>   
        </Routes>
        </>
    )
}
