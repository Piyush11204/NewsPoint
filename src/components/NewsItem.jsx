import React from 'react';
import './NewsItem.css';
import image from '../assets/image.jpg';

export const NewsItem = ({ title, description, src, url, time }) => {
    return (
        
        <div className="card">
            <img 
                src={src ? src : image} 
                style={{ height: "200px", width: "335px", borderRadius: "10px" }} 
                className="card-img-top" 
                alt="News" 
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="date-time">{time}</h5>
                <p className="card-text">
                    {description ? description.slice(0, 90) : "Information available in read more section"}
                </p>
                <a href={url} className="btn btn-primary button-40" target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
