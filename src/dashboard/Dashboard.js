import React from 'react';
import Header from '../app/feature/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContentHome from '../app/feature/content/home/ContentHome';
import Inquire from '../app/feature/content/inquire/Inquire';
import About from '../app/feature/content/about/About';
import Project from '../app/feature/content/project/Project';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <BrowserRouter>
                    <Routes>
                        <Route  exact path="/" element={<ContentHome/>} />
                        <Route  exact path="/inquire" element={<Inquire/>} />
                        <Route  exact path="/about" element={<About/>} />
                        <Route  exact path="/project" element={<Project/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}