import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import {Counter} from './Counter'
import { ShowGitHubUser } from "./ShowGitHubUser";


export function App() {
    return (
        <>
         <Routes>
            <Route path='/' element={<Welcome name='Tony'/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/:username' element={<ShowGitHubUser />} />
        </Routes>
        </>
    )
}
