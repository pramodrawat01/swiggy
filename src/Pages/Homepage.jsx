import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './Homepage.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Category from '../Components/Category';
import getApp from '../assets/get-app.png'
import Footer from '../Components/Footer'; 

import RestaurantImg from '../assets/food-delivery1.png';
import dineoutImg from '../assets/dineout1.png';

import instamartImg from '../assets/instamart1.png';


const Homepage = () => {
  const [item, setItems] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch("/category.json");
      let data = await res.json();
      setItems(data);
      console.log(item, "tisdfnidsfn");
    }
    getData();
  }, []);

  const scrollRef = useRef();

  return (
    <div>
    {/* Navbar */}
      <nav className="home-navbar">
        <div className="home-navbar-logo-container">
          <div>
            <img src={logo} alt="swiggy logo" className="home-navbar-logo" />
          </div>

          <h2 className="nav-swiggy">Swiggy</h2>
        </div>
        <div className="home-navbar-links">
          <button>Swiggy Corporate</button>
          <button>Partner with us</button>
          <button>
            <p>Get the App</p>
          </button>
          <button>Sign in</button>
        </div>
      </nav>


      {/* hero section */}
      <div className="text-container">
        <div className="text">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="search-container">
          <div className="location">
            <img src="" alt="logo" />
            <input></input>
          </div>
          <Link to="/search" className="search-container">
            <p>Search for restaurants, items or more</p>
          </Link>
        </div>
      </div>



      <div className="routes">
        <Link to="/restaurants-page">
          <img src={RestaurantImg} alt="delivery" />
        </Link>

        <img src={instamartImg} alt="instamart" />
        <img src={dineoutImg} alt="dineout" />
      </div>



      {/* carousel */}
      <div>
        <div className="category-container-home">
          <div className="mind-container-home">
            <h2>Order our best food options</h2>
            <div className="arrows-home">
              <button
                onClick={() =>
                  scrollRef.current.scrollBy({ left: -600, behavior: "smooth" })
                }
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() =>
                  scrollRef.current.scrollBy({ left: 600, behavior: "smooth" })
                }
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="category-containerr-home">
          <div className="items-home" ref={scrollRef}>
            {item.length > 0 ? (
              item.map((food, index) => {
                return (
                  <Link key={index} to={food.path}>
                    {" "}
                    <img src={food.image} alt="" />{" "}
                  </Link>
                );
              })
            ) : (
              <p>nothing</p>
            )}
          </div>
          <hr />
        </div>
      </div>

      {/**groceries carousel */}
      <Category />


      {/* dineout carousel */}
      <div>
        <div className="category-container-home">
          <div className="mind-container-home">
            <h2>Discover best restaurants on Dineout</h2>
            <div className="arrows-home">
              <button
                onClick={() =>
                  scrollRef.current.scrollBy({ left: -600, behavior: "smooth" })
                }
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() =>
                  scrollRef.current.scrollBy({ left: 600, behavior: "smooth" })
                }
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="category-containerr-home">
          <div className="items-dineout" ref={scrollRef}>
            {item.length > 0 ? (
              item.map((food, index) => {
                return (
                  <Link key={index} to={food.path}>
                    {" "}
                    <img src={food.image} alt="" />{" "}
                  </Link>
                );
              })
            ) : (
              <p>nothing</p>
            )}
          </div>
          <hr />
        </div>
      </div>  

      {/* get app banner  */}
      <div>
        <img src={getApp} alt='get app banner'  className="full-width-image" />
      </div>


      {/* <div className="cuisine-grid">
          {[
            "Chinese",
            "South Indian",
            "Indian",
            "Kerala",
            "Korean",
            "North Indian",
            "Seafood",
            "Bengali",
            "Punjabi",
            "Italian",
            "Andhra",
          ].map((type, index) => {
            const slug = type.toLocaleLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={index}
                to={`/restaurants-page/${slug}-restaurant-near-me`}
              >
                <button key={index} className="cuisine-btn">
                  {type} Restaurant Near Me
                </button>
              </Link>
            );
          })}
        
          <button className="cuisine-btn orange-btn">Show More ⌄</button>
        </div> */}

        <Footer/>
    </div>
  );
};

export default Homepage;