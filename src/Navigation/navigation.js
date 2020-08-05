import React from 'react';
import './navigation.css';

function Navigation() {
    return (
        <div className="Navigation">
            <div className="left_btn">
                <div className="logo_btn">Nike</div>
            </div>
            <div className="center_btn">
                <div className="new_btn">NEW RELEASE</div>
                <div className="men_btn">MEN</div>
                <div className="women_btn">WOMEN</div>
                <div className="kids_btn">KIDS</div>
            </div>
            <div className="right_btn">
                <div className="search_div">
                    <input className="search_input" />
                </div>
            </div>
        </div>
    )
}

export default Navigation;