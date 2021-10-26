import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header__flexbox">
                <p className="header__logo">voices</p>
                <div className="header__container">
                    <p>Apply as a Creator</p>
                    <div>
                        <div className="header__circle">
                            <div className="header__line transparent"></div>
                            <div className="header__line semi-bold"></div>
                            <div className="header__line main"></div>
                            <div className="header__line semi-bold"></div>
                            <div className="header__line transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;