import React from "react";
import "./OlxSearch.css";
import { HiOutlineSearch } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

const OlxSearch = () => {
    return (
        <div className="frist-box">
        <div className="main-box">
            <div className="olx-title">Olx</div>
            <div className="india-search">
                <div className="search-icon"><HiOutlineSearch /></div>
                <div className="india-title">
                    <div className="india">India</div>
                    <div className="dropdown"><RiArrowDropDownLine /></div>
                </div>
            </div>
            <div className="search-box">
                <div className="search">
                    <a className="properties">Search "Properties"</a>
                    <div className="search-icons">
                        <a className="searchicon1"><HiOutlineSearch /></a>
                    </div>
                </div>
            </div>
            <div className="english">ENGLISH</div>
            <a className="dropdowns"><RiArrowDropDownLine /></a>
            <a className="iconss1"><FaRegHeart /></a>
            <a className="iconss2"><FiMessageCircle /></a>
            <a className="iconss3"><FaRegBell /></a>
            <div className="img"><img src="https://th.bing.com/th/id/OIP.peZc0xWqWaa_DJ4kJb2U5wHaJ3?w=147&h=196&c=7&r=0&o=5&pid=1.7"></img></div>
            <div className="dropdown1"><RiArrowDropDownLine /></div>
            <div className="sell-box">
                <div className="sell"> + SELL</div>
            </div>
            
        </div>
        <div className="second-box">
            <div className="all-categories">
                <div className="all">ALL CATEGORIES</div>
                <div className="dropdownn">hh</div>
            </div>
        </div>
        </div>
        

);
};

export default OlxSearch;
    