import React from "react";
import { Container } from "./Container";
import {Welcome} from './Welcome';
import './index.css'



export class App extends React.Component{
    render() {
        return (
            <div>
                <Container title={'this is a title'}>
                    <Welcome name={'Geronimo'}/>
                </Container>
            </div>
        )
    }
}

