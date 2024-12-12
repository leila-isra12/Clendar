import React, { useState } from "react";
import "./LatestNewsTeacher.css";
import latesttasksImage from "./assets/latesttasks.jpg";
import latestuploadsImage from "./assets/latestuploads.jpg";
import latestnewsImage from "./assets/latestnews.jpg";
import Footer from "./Footer.jsx";

const LatestNewsTeacher = () => {
    const [newsList] = useState([
        { id: 1, title: "Created SASS Section", description: "New SASS Examples & Tutorials", photo: latesttasksImage, date: "3 Days Ago" },
        { id: 2, title: "Changed The latesttasks", description: "A Brand New Website latesttasks", photo: latestuploadsImage, date: "5 Days Ago" },
        { id: 3, title: "Added latestnews Gateway", description: "Many New latestnews Gateways Added", photo: latestnewsImage, date: "9 Days Ago" },
        { id: 4, title: "Created SASS Section", description: "New SASS Examples & Tutorials", photo: latesttasksImage, date: "3 Days Ago" },
        { id: 5, title: "Changed The latesttasks", description: "A Brand New Website latesttasks", photo: latestuploadsImage, date: "5 Days Ago" },
        { id: 6, title: "Added latestnews Gateway", description: "Many New latestnews Gateways Added", photo: latestnewsImage, date: "9 Days Ago" },
        { id: 7, title: "Created SASS Section", description: "New SASS Examples & Tutorials", photo: latesttasksImage, date: "3 Days Ago" },
        { id: 8, title: "Changed The latesttasks", description: "A Brand New Website latesttasks", photo: latestuploadsImage, date: "5 Days Ago" },
        { id: 9, title: "Added latestnews Gateway", description: "Many New latestnews Gateways Added", photo: latestnewsImage, date: "9 Days Ago" },
        { id: 10, title: "Created SASS Section", description: "New SASS Examples & Tutorials", photo: latesttasksImage, date: "3 Days Ago" },
        { id: 11, title: "Changed The latesttasks", description: "A Brand New Website latesttasks", photo: latestuploadsImage, date: "5 Days Ago" },
        { id: 12, title: "Added latestnews Gateway", description: "Many New latestnews Gateways Added", photo: latestnewsImage, date: "9 Days Ago" },
        { id: 13, title: "Created SASS Section", description: "New SASS Examples & Tutorials", photo: latesttasksImage, date: "3 Days Ago" },
        { id: 14, title: "Changed The latesttasks", description: "A Brand New Website latesttasks", photo: latestuploadsImage, date: "5 Days Ago" },
        { id: 15, title: "Added latestnews Gateway", description: "Many New latestnews Gateways Added", photo: latestnewsImage, date: "9 Days Ago" },
      ]);
      
  return (
    <div className="big-divT">
    <div className="news-containerT">
      <div className="right-sectionT">
        <h1 className="titleT">Latest News</h1>
        <div className="news-gridT">
          {newsList.map((news) => (
            <div key={news.id} className="news-cardT">
              <img src={news.photo} alt={news.title} className="news-imageT" />
              <div className="news-contentT">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                {news.location && <p className="locationT">📍 {news.location}</p>}
                <p className="dateT">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LatestNewsTeacher;
