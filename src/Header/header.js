import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="Header">
            <div className="left_btn">
                <div className="Nike_btn">Nike</div>
                <div className="join_btn">Join Us</div>
                <div className="jordan_btn">Jordan</div>
                <div className="converse_btn">converse</div>
            </div>
            <div className="right_btn">
                <div className="login_btn">회원가입/로그인</div>
                <div className="cs_btn">고객센터</div>
                <div className="collect_btn">장바구니</div>
                <div className="country_btn">대한민국</div>
            </div>
        </div>
    )
}

export default Header;