import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import {Counter} from './Counter'


export function App() {
    return (
        <>
         <Routes>
            <Route path='/' element={<Welcome name='Tony'/>}/>
            <Route path='/counter' element={<Counter />} />
        </Routes>
        </>
    )
}
