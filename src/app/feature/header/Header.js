import React from 'react';
import './Header.css';
import ReLogo from '../../../assets/images/re-logo-official.png';

export default class Header extends React.Component {
    render() {
        return (
            <div id="container">
                <div class="headerOptions row">
                    <div class="col brandLogo">
                        <img src={ReLogo} alt="RE Logo" class="RElogo"></img>
                    </div>

                    <div class="col optionGroup">
                        <ul class="optionList nav nav-tabs justify-content-end">
                            <li class="optionItem nav-item">
                                <a href="/">
                                Home
                                </a>
                            </li>
                            <li class="optionItem nav-item">
                                <a href="/project">
                                Project
                                </a>
                            </li>
                            <li class="optionItem nav-item">
                                <a href="/about">
                                About Us
                                </a>
                            </li>
                            <li class="optionItem nav-item">
                                <a href="/inquire">
                                Inquire
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr class="headerHr" />
            </div>
        );
    }
}