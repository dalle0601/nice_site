import React from 'react';
import './navigation.css';

function Navigation({first, second, third, four}) {
    return (
        <div className="Navigation">
            <div className="left_btn">
                <div className="logo_btn">Nike</div>
            </div>
            <div className="center_btn">
                <div className="new_btn">{first}</div>
                <div className="men_btn">{second}</div>
                <div className="women_btn">{third}</div>
                <div className="kids_btn">{four}</div>
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