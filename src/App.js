import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import {Counter} from './Counter'
import { ShowGitHubUser } from "./ShowGitHubUser";


export function App() {
    return (
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/counter'>Counter</Link>
            <Link to='./:username'>Tony</Link>
        </nav>
         <Routes>
            <Route path='/' element={<Welcome name='Tony'/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/:username' element={<ShowGitHubUser />} />
        </Routes>
        </>
    )
}
