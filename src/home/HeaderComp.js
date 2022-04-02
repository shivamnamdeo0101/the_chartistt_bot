import React from 'react'
import img from "../assets/cover.png";
import "./home.css";
import {useHistory } from "react-router-dom";

function HeaderComp() {

    const history = useHistory();


  return (
    <div className="header">
        <div className='cover_comp'>
            <img src={img} alt=""/>
        </div>
        <div className="cover_comp">

            <div className='head_row'>
                <div className="head_row_comp">
                    <h2>Algo<mark className="color_blue">Trading</mark></h2>
                </div>
                
                    <h5>Home</h5>
                    <h5>Contact</h5>
                    <h5>Features</h5>
                    <h5>About</h5>
                

                <div className="head_row_button">
                    <h3 className="blue_button" onClick={()=>history.push("./signup")}>Register</h3>
                    <h3 className="grey_button" onClick={()=>history.push("./login")}>Login</h3>
                </div>

            </div>

            <div className='cover_data'>
                <h5>Forex Currency</h5>
                <h1>Your financial future <mark className="color_blue">strategized</mark> today.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book.</p>

                <div className="cover_row_button">
                    <h3 className="blue_button">Explore</h3>
                    <h3 className="grey_button">Buy Now</h3>
                </div>
            
            </div>

            
        </div>


    </div>
  )
}

export default HeaderComp