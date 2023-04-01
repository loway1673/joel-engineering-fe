import React from 'react';
import Header from '../app/feature/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContentHome from '../app/feature/content/home/ContentHome';
import Inquire from '../app/feature/content/inquire/Inquire';
import AbooutReginoEngineering from '../app/feature/content/about/AboutReginoEngineering';
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
                        <Route  exact path="/about" element={<AbooutReginoEngineering/>} />
                        <Route  exact path="/about/mission" element={<AbooutReginoEngineering/>} />
                        <Route  exact path="/about/vision" element={<AbooutReginoEngineering/>} />
                        <Route  exact path="/project" element={<Project/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}