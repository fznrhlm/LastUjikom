import React from "react";
import "./HomePage.css";
import ImageGallery from "../components/FoodGallery/Gallery";
import Footer from "../components/Footer/Footer";
import { Welcome } from "../components/Welcome";


const MenuList = () => {
  const menuItems = [
  
  ];

  return (
    <div className="menu-list">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <Welcome />
      <MenuList />
      <ImageGallery />
      <Footer/>
    </div>
  );
};

export default HomePage;