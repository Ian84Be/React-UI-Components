import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

function CardContent() {
    return (
        <div className="card-content">
            <CardBanner />
            <div className="card-text">
                <h2>Get started with React</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque molestias asperiores, hic quos perferendis eius repellendus esse blanditiis ducimus est rem aut fugit iusto dolorem voluptate. Assumenda veniam reiciendis qui.</p>
                <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer">reactjs.org</a>
            </div>
        </div>
    )
}
export default CardContent;