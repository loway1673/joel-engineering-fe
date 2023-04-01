import React from 'react';
import './About.css';


export default class About extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="about">About Regino Engineering</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about/mission">Mission</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about/vision">Vision</a>
                        </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="aboutBody">
                                REGINO Engineering is a customer-driven design and construction company committed to delivering products and services that comply with its established quality standards, promulgated safety practices, applicable legal requirements, and set work schedules. We shall continuously update our practices and establish a team with a passion for excellence, integrity, and teamwork.
                        </div>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="aboutHeader">
                                     About Regino Engineering
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="aboutBody">
                                    REGINO Engineering is a customer-driven design and construction company committed to delivering products and services that comply with its established quality standards, promulgated safety practices, applicable legal requirements, and set work schedules. We shall continuously update our practices and establish a team with a passion for excellence, integrity, and teamwork.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}