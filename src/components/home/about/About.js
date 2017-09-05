import React, { Component } from 'react';

import profilePic from "../../../assets/images/profile.jpg"

import "../../_common/common.css"
import "./about.css"

export default class About extends Component {

    render () {
        return (
            <div className="home-section container-about">        
                <img className="profile-picture-about" alt="profilepic" src={profilePic} />
                <div className="about-text">
                    <span className="about-text-hello">Hello! I'm <span className="about-name">Pier</span></span>
                    <br/><span className="about-description">I'm a software engineer from Italy</span>
                    <br/><br/>I like to build stuff and to have fun doing it.
                    <br/>My interests are broad, some of them are: Android, UI/UX, Web development, games development, VR and computer graphics.
                    <br/><br/>If you want to know more: <a href="" target="blank"><span className="about-cv">HERE is my CV.</span></a>
                    <br/><br/>Keep scrolling to see some of the projects I've worked on.
                </div>                
            </div>
        );
    }
}