import React from 'react';
import Header from '../app/feature/header/Header';
import Content from '../app/feature/content/Content';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}