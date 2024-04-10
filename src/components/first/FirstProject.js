import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Alert from '../Alert';


export default function FirstProject() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <div>
            <Navbar number="First" title="Project" />
            <Alert alert={alert} />
            <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} heading="Text Converter (Function Based)" />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact showAlert={showAlert}/>} />
            </Routes>
        </div>
    )
}
