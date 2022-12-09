import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from "./components/NaviBar/NaviBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";

function App() {


        return (
            <>

                <BrowserRouter>
                    <NaviBar/>
                    <AppRouter/>
                </BrowserRouter>

            </>


        );
    }

export default App;