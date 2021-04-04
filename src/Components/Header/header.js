import React from 'react';
import "./header.css";
import logo from "./../Images/logo.jpeg"

const Header = () => {
    const showMenu = ()=>{
        document.getElementById("navLinks").style.right = "0px";
    }
    const closeMenu = () =>{
        document.getElementById("navLinks").style.right = "-200px";
    }
    return (
        <div>
        <section className = "header">
            <div className = "top-bar">
                <a href = "index.html"><img src= {logo} alt = "logo" height = "150px" width = "150px" className = "logo"/></a>
                <div className = "log-links">
                        <ul>
                            <li className = " log-in"><a href = "index.html">Sign UP</a></li>
                            <li className = " log-in"><a href = "index.html">Log In</a></li>
                        </ul>
                </div><br/>
            </div>
            <nav>

                <div className="nav-links" id="navLinks">
                    <i className="fa fa-window-close" id="close" onClick = {closeMenu}></i>
                  <ul>
                      <li><a href="index.html">HOME</a></li>
                      <li><a href="index.html">ABOUT</a></li>
                      <li><a href="index.html">SUGGESTIONS</a></li>
                      <li><a href="index.html">CONTACT</a></li>
                  </ul>
              </div>
              <i className="fa fa-bars"  id = "open" onClick = {showMenu}></i>
            </nav>
            <h1 className = "title" id ="title">Share Your Fun Story</h1>
        </section>
        <section className = "content">
            <h1>Storied You Want To Read</h1>
            <p>Select from below categories stories you would like to read</p>
            <div className = "row">
                <div className = "category-col">
                    <h3>Interview Embarassment/Fun Interviews</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
                        when an unknown printer took a galley of type and scrambled it to make a type 
                    </p>
                    <div className = "details">
                        <a href = "index.html">View Stories</a>
                    </div>
                </div>
                <div className = "category-col">
                    <h3>Office Funny Stories</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type
                    </p>
                    <div className = "details">
                        <a href = "index.html">View Stories</a>
                    </div>
                </div>
                <div className = "category-col">
                    <h3>Family Funny Stories</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
                        when an unknown printer took a galley of type and scrambled it to make a type
                    </p>
                    <div className = "details">
                        <a href = "index.html">View Stories</a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Header;