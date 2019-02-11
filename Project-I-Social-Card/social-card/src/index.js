import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

function SocialCard() {
    return (
        <div className="social-card">
        <HeaderContainer />
        <CardContainer />
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HeaderContainer />, document.getElementById('root'));
ReactDOM.render(<SocialCard />, document.getElementById('root'));
