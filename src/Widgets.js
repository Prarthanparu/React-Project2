import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_article_left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
        
    
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Paru is learning REACT", "Top News - 2003 readers")}
            {newsArticle("COVID-19 Updates - UK", "Top News - 10,003 readers")}
            {newsArticle("Tesla Hits the Roads of INDIA", "Top News - 12,003 readers")}
            {newsArticle("Farmers Fight for Justice inVain", "Top News - 1,22,003 readers")}
            {newsArticle("Paru is learning REACT", "Top News - 12003 readers")}
            {newsArticle("Paru is learning REACT", "Top News - 12003 readers")}
        </div>
    );
}

export default Widgets;
